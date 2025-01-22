const timeServices = require('../services/timeServices');


const getTimeHistory = async (req, res) => {
    try {
        const timeHistory = await timeServices.getTimeHistory();
        if (timeHistory.length === 0) {
            return res.status(404).send({ message: "Does not exist any time history" });
        }
        res.send({ status: "OK", data: timeHistory })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({status: "FAILED",
                message: "ERROR while making the petition:",
                data: {error: error?.message || error}
            });
    }
}

const executeDayActions = async (req, res) => {
    try {
        await timeServices.makeTravesia();
        res.send({ status: "OK" })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({status: "FAILED",
                message: "ERROR while making the petition:",
                data: {error: error?.message || error}
            });
    }
}

module.exports = {
    getTimeHistory,
    executeDayActions,
}