const Character = require("../models/CharacterModel");
const mongoose = require("mongoose");


const getAllPlayers = async () => {
    try {
        const playersPopulated = await Character.find();
        // Poblamos el equipo
        playersPopulated.map(async (playerPopulated) => {
            await playerPopulated.equipment.populate('Saddlebag');
            await playerPopulated.equipment.populate('Weapon');
            await playerPopulated.equipment.pouch.populate('precious_stones');
        });

        return playersPopulated;
    } catch (error) {
        throw error;
    }
}

const populateAllPlayers = async (players) => {

    // players.map(async (playerPopulated) => {
    //     await playerPopulated.equipment.populate('saddlebag');
    //     await playerPopulated.equipment.populate('weapons');
    //     await playerPopulated.equipment.pouch.populate('precious_stones');
    //     console.log(playerPopulated.equipment);
    // });
    return players;
}

const morningActions = async() => {
    const allPlayers = await Character.find();

    console.log("Morning (05:00)");
    
    allPlayers.map( async (player) => {


        
        const values = [{dex: 0, str: 2}, {dex: 1, str: 1}, {dex: 2, str: 0}];
        const index = Math.floor(Math.random()*values.length);

        player.stats.dexterity += values[index].dex;
        console.log("   -->"+ player.name +" dexterity increases by "+values[index].dex+" points and now is "+ player.stats.dexterity);
        
        player.stats.strength += values[index].str;
        console.log("   -->"+ player.name +" strength increases by "+values[index].str+" points and now is "+ player.stats.strength);
        console.log("----------------------------------------------------------------------------------------");
        await Character.findOneAndUpdate({ name:player.name}, {$set:{stats:player.stats}}, {new:true});
       
        
    })
}


module.exports = {
    getAllPlayers,
    populateAllPlayers,
    morningActions
}