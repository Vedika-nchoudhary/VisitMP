const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const placeRouter = require("./routes/placeroute");
const artRouter = require("./routes/artroute");
const itineraryRouter =require ("./routes/itineraryRoute");
const eventRouter=require("./routes/eventRoute");
const cuisineRouter=require("./routes/cuisineRoute");
const hotelRouter=require("./routes/hotelRoute");
const chatRouter=require("./routes/chatbot");
const experienceRouter = require("./routes/experienceRoute");
const weatherRouter = require("./routes/weatherRoutes.js") ;
const authRouter=require("./routes/auth")
const mediaRouter = require("./routes/mediaRoute.js");
const searchRoute = require("./routes/searchRoute");

app.get('/', (req, res) => {
    res.send('MP Tourism API is running');
});

app.use("/destination", placeRouter);
app.use("/ai", itineraryRouter);
app.use("/api/art", artRouter);
app.use("/events",eventRouter);
app.use("/cuisines",cuisineRouter);
app.use("/hotels" , hotelRouter );
app.use("/ai",chatRouter);
app.use("/experiences", experienceRouter);
app.use("/weather", weatherRouter);
app.use("/auth",authRouter);
app.use("/media", mediaRouter);
app.use("/search", searchRoute);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => console.log(err));

