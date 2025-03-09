import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { X } from "lucide-react";

interface Review {
  id: string;
  attributes: {
    title: string;
    description: string;
    score: number;
  };
}

interface Game {
  id: string;
  attributes: {
    name: string;
    image_url: string;
    slug: string;
  };
}

const Game: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({
    title: "",
    description: "",
    score: 5,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/gamecds/${slug}`)
      .then((response) => {
        setGame(response.data.data);
        setReviews(response.data.included);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching game:", error);
        setError("Failed to load game data.");
        setLoading(false);
      });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!game?.id) {
      console.error("Game ID is missing");
      return;
    }

    const csrfToken = document.querySelector<HTMLMetaElement>(
      'meta[name="csrf-token"]'
    )?.content;
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken || "";

    axios
      .post("http://localhost:3000/api/v1/reviews", {
        withCredentials: true,
        review: {
          title: newReview.title.trim(),
          description: newReview.description.trim(),
          score: Number(newReview.score),
          gamecd_id: game.id,
        },
      })
      .then((response) => {
        setReviews([...reviews, response.data.data]);
        setNewReview({ title: "", description: "", score: 5 });
      })
      .catch((error) => {
        console.error(
          "Failed to submit review:",
          error.response?.data || error.message
        );
      });
  };

  const handleDelete = (reviewId: string) => {
    axios
      .delete(`http://localhost:3000/api/v1/reviews/${reviewId}`, {
        withCredentials: true,
      })
      .then(() => {
        setReviews(reviews.filter((review) => review.id !== reviewId));
      })
      .catch((error) => {
        console.error(
          "Failed to delete review:",
          error.response?.data || error.message
        );
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {game && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <img
              src={game.attributes.image_url}
              alt={game.attributes.name}
              className="w-60 h-80 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-bold mt-2">{game.attributes.name}</h3>
          </div>

          <div>
            <h5 className="text-lg font-semibold">User Reviews</h5>
            {reviews.map((review) => (
              <div
                className="border-b py-2 flex justify-between items-start"
                key={review.id}
              >
                <div>
                  <strong>
                    {review.attributes.title} - ⭐ {review.attributes.score}/5
                  </strong>
                  <p className="text-gray-600">
                    {review.attributes.description}
                  </p>
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(review.id)}
                  className="text-red-500 hover:text-red-700 transition ml-2"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold">Leave a Review</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="reviewTitle" className="block font-medium">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  id="reviewTitle"
                  value={newReview.title}
                  onChange={(e) =>
                    setNewReview({ ...newReview, title: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="reviewDescription"
                  className="block font-medium"
                >
                  Description
                </label>
                <textarea
                  className="w-full p-2 border rounded-lg"
                  id="reviewDescription"
                  rows={3}
                  value={newReview.description}
                  onChange={(e) =>
                    setNewReview({ ...newReview, description: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="reviewScore" className="block font-medium">
                  Score (1-5)
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-lg"
                  id="reviewScore"
                  min="1"
                  max="5"
                  value={newReview.score}
                  onChange={(e) =>
                    setNewReview({
                      ...newReview,
                      score: Number(e.target.value),
                    })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
