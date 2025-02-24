
gamecds = Gamecd.create([
    {
        name:"Gta 5",
        image_url:"https://m.media-amazon.com/images/I/614WWLr9gBL._AC_UF894,1000_QL80_.jpg"
    },
    {
        name:"Gta San",
        image_url:"https://m.media-amazon.com/images/I/614WWLr9gBL._AC_UF894,1000_QL80_.jpg"
    },
    {
        name:"Gta VC",
        image_url:"https://m.media-amazon.com/images/I/614WWLr9gBL._AC_UF894,1000_QL80_.jpg"
    },
    {
        name:"Forza Horizon",
        image_url:"https://m.media-amazon.com/images/I/614WWLr9gBL._AC_UF894,1000_QL80_.jpg"
    },
    {
        name:"Gta 3",
        image_url:"https://m.media-amazon.com/images/I/614WWLr9gBL._AC_UF894,1000_QL80_.jpg"
    },
    {
        name:"Gta 6",
        image_url:"https://m.media-amazon.com/images/I/614WWLr9gBL._AC_UF894,1000_QL80_.jpg"
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