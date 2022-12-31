#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var weather_1 = require("./weather/weather");
var Main = /** @class */ (function () {
    function Main(program) {
        this.program = program;
        this.init(program);
    }
    Main.prototype.init = function (program) {
        this.setupProgram(program);
    };
    Main.prototype.setupProgram = function (program) {
        program.version("1.0.2").description("Yanayi, a weather cli app.");
        program
            .command("city <city>")
            .description("Get weather for 3 days for the provided city")
            .action(function (city) {
            (0, weather_1.getWeather)(city);
        });
        program.parse(process.argv);
    };
    return Main;
}());
new Main(commander_1.program);
