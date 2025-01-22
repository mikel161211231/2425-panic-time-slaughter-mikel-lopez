const playersServices = require('../services/playersServices');


const getAllPlayers = async (req, res) => {
    try {
        const allPlayers = await playersServices.getAllPlayers();
        if (allPlayers.length === 0) {
            return res.status(404).send({ message: "Does not exist any player" });
        }
        const populateAllPlayers = await playersServices.populateAllPlayers(allPlayers);
        res.send({ status: "OK", data: populateAllPlayers })
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
    getAllPlayers,
}