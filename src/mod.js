"use strict";

class ChooseTheWeather {
    constructor() {
        this.mod = "Revingly-BraceTheStorm";
        Logger.info(`Loading: ${this.mod}`);
        WeatherController.generateWeather = this.chooseWeather;
    }

    chooseWeather(data) {
        // Get the config file for the weather
        const { weather, customSettings } = require('./config.json');
        // Get the weather sets to choose from
        const weatherSets = require('./weatherSet.json');
        // Put the choosen weather from the config in a variable
        const choosenWeather = weatherSets[weather];

        // If user choose custom then we loop over the customSettings 
        // and add each property to the data.weather object
        if (weather === "custom") {
            Object.entries(customSettings).forEach(([key, value]) => {
                data.weather[key] = customSettings[key];
            });
        } else { // If user select one of the predefined weather sets then we just add it to the data.weather
            Object.entries(choosenWeather).forEach(([key, value]) => {
                data.weather[key] = value;
            });
        }

        return data;
    }
}

module.exports.Mod = ChooseTheWeather;