// index.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodbRoute = 'mongodb+srv://mikellopez:LgJaK1L920MOT813@cluster0.wkjfl.mongodb.net/TimeSlaughter';

const playersRouter = require("./routes/playerRoutes");
const timeRouter = require("./routes/timeRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Use bodyparser
app.use(bodyParser.json());

app.use("/api/players", playersRouter);
app.use("/api/time", timeRouter);


async function start() {
    try {
        await mongoose.connect(mongodbRoute, {});
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        console.log(`Correct connection with Mongo`);
        
    } catch (error) {
        console.log(`Error to connect to the database: ${error.message}`);
        
    }
}

start();


module.exports = app;