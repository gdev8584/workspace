//? challenges: "Event Maestro: Handle It All"

//!objective
//* create program using Node.js EventEmiter that:

//? Listens for multiple typesof user events(eg. login, logout, purches and profile-update)
//? track how many time each event emitted
//? logs a summery of all event occurrences when special summary event is triggered

//! Requirements
//? Create at lear for custom events(eg. user-login, user-logout, user-purches, profile-update)
//? emit multiple time with diffrent arguments(eg. userName, item purchage)
//? Track and store of each event types
//? define summary of each event was triggered

import EventEmitter from "events";
import fs from "fs";
import path from "path";
const emitter = new EventEmitter();

export function test1() {
  const filePath = path.join(__dirname, "summary-count.txt");

  const countEmit = () => {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      return JSON.parse(data);
    }
    return {
      "user-login": 0,
      "user-logout": 0,
      "user-purchase": 0,
      "profile-update": 0,
    };
  };

  const loadCountEmitter = countEmit();

  const saveEmitterCount = (counts: any) => {
    fs.writeFileSync(filePath, JSON.stringify(counts, null, 2), "utf8"); // null,2 is used for pretty jsom not more
  };
  emitter.on("user-login", (userName) => {
    loadCountEmitter["user-login"]++;
    console.log(`user is now login ${userName}`);
    saveEmitterCount(loadCountEmitter);
  });

  emitter.on("user-purchase", (userName, item) => {
    loadCountEmitter["user-purchase"]++;
    console.log(`${userName} is purchase ${item}`);
    saveEmitterCount(loadCountEmitter);
  });

  emitter.on("profile-update", (userName, list) => {
    loadCountEmitter["profile-update"]++;
    console.log(`${userName} is update profile ${list}}`);
    saveEmitterCount(loadCountEmitter);
  });

  emitter.on("user-logout", (userName) => {
    loadCountEmitter["user-logout"]++;
    console.log(`user is now logout ${userName}`);
    saveEmitterCount(loadCountEmitter);
  });

  emitter.on("summary", () => {
    console.log("\n event summary");
    for (const [event, count] of Object.entries(loadCountEmitter)) {
      console.log(`${event}: ${count}`);
    }
  });

  emitter.emit("user-login", "Devanand");
  emitter.emit("user-purchase", "Devanand", "Laptop");
  emitter.emit("profile-update", "Devanand", "email");
  emitter.emit("user-logout", "Devanand");

  emitter.emit("summary");
}
