#!/usr/bin/env node
import { Command, program } from "commander";

import { getWeather } from "./weather/weather";

class Main {
  constructor(private program: Command) {
    this.init(program);
  }

  init(program: Command) {
    this.setupProgram(program);
  }

  private setupProgram(program: Command) {
    program.version("1.0.3").description("Yanayi, a weather cli app.");

    program
      .command("city <city>")
      .description("Get weather for 3 days for the provided city")
      .action((city) => {
        getWeather(city);
      });

    program.parse(process.argv);
  }
}

new Main(program);
