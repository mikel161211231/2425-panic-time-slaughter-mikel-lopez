const Time = require("../models/TimeModel");
const mongoose = require("mongoose");


const getTimeHistory = async () => {
    try {
        const timeHistory = await Time.find();
        return timeHistory;
    } catch (error) {
        throw error;
    }
}


const makeTravesia = async () => {
    try {
        console.log("Travesia (12:00)");
        
        const allTimes = await Time.find();
        const travelKm = Math.floor(Math.random() * 10) + 1;
        const dayWeek = allTimes[allTimes.length - 1].day_week === ("Monday") ? "Tuesday" :
            allTimes[allTimes.length - 1].day_week === ("Tuesday") ? "Wednesday" :
                allTimes[allTimes.length - 1].day_week === ("Wednesday") ? "Thursday" :
                    allTimes[allTimes.length - 1].day_week === ("Thursday") ? "Friday" :
                        allTimes[allTimes.length - 1].day_week === ("Friday") ? "Saturday" :
                            allTimes[allTimes.length - 1].day_week === ("Saturday") ? "Sunday" :
                                allTimes[allTimes.length - 1].day_week === ("Sunday") ? "Monday" :
                                    "";

        const newTime = {
            day_number: allTimes[allTimes.length - 1].day_number + 1,
            day_week: dayWeek,
            km_traveled: travelKm,
            km_total: allTimes[allTimes.length - 1].km_total + travelKm
        }

        
        console.log("   --> Day week "+ newTime.day_week);
        console.log("   --> Day number "+ newTime.day_number);
        console.log("   --> Today "+ newTime.km_traveled +" km");
        console.log("   --> Total "+ newTime.km_traveled +" km");

        let newTimeToInsert = new Time(newTime);
        const createdTime = await newTimeToInsert.save();
        return createdTime;
    } catch (error) {
        throw error;
    }
}



module.exports = {
    getTimeHistory,
    makeTravesia,
}