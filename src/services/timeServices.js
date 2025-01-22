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


module.exports = {
    getTimeHistory,

}