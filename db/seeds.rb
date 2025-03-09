
gamecds = Gamecd.create([
    {
        name:"Gta 5",
        image_url:"https://m.media-amazon.com/images/I/614WWLr9gBL._AC_UF894,1000_QL80_.jpg"
    },
    {
        name:"Gta San",
        image_url:"https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg"
    },
    {
        name:"Gta VC",
        image_url:"https://upload.wikimedia.org/wikipedia/en/c/ce/Vice-city-cover.jpg"
    },
    {
        name:"Forza Horizon",
        image_url:"https://store-images.s-microsoft.com/image/apps.49800.13718773309227929.bebdcc0e-1ed5-4778-8732-f4ef65a2f445.9ac09d39-064d-466c-81ca-2f1b6f0b95c5"
    },
    {
        name:"Gta 3",
        image_url:"https://rukminim1.flixcart.com/image/300/300/xif0q/physical-game/s/o/m/no-standard-gta-3-pc-game-dvd-physical-game-pc-original-imagq3qcvt6eqy66.jpeg"
    },
    {
        name:"Gta 6",
        image_url:"https://i.gadgets360cdn.com/products/large/gta-6-poster-1200x1680-1701751156.jpg"
    },
    {
        name:"MineCraft",
        image_url:"https://5.imimg.com/data5/SELLER/Default/2022/9/QX/CJ/VW/140642735/minecraft-bedrock-ps4-.jpeg"
    },
    {
        name:"Fortnite",
        image_url:"https://m.media-amazon.com/images/I/917JLu3S8DL._AC_UF894,1000_QL80_.jpg"
    },
    {
        name:"PUBG",
        image_url:"https://rukminim1.flixcart.com/image/300/300/jx6fiq80/code-in-the-box-game/f/b/v/ps4-pubg-playerunknown-s-battlegrounds-ps4-standard-edition-original-imafhnz6dpefgczh.jpeg"
    },
    {
        name:"FIFA",
        image_url:"https://m.media-amazon.com/images/I/71RmYwT5JOL.jpg"
    },
    {
        name:"Tomb Raider",
        image_url:"https://m.media-amazon.com/images/I/818yA5mNQpL._AC_UF894,1000_QL80_.jpg"
    },
    {
        name:"RDR 2",
        image_url:"https://m.media-amazon.com/images/I/81dKP+iFloL.jpg"
    }
])

reviews = Review.create([
    {
        title: "Great Game",
        description: "I had a great exp",
        score: 5,
        gamecd: gamecds.first
    },
    {
        title: "Shit Game",
        description: "I had a Shit exp",
        score: 1,
        gamecd: gamecds.first
    },
])