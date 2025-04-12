// Advatage: NO need for manual callbacks. Cleaner and more intuitive asynchronous workflow using async and await
// use cases: REDING Files asynchronous in non-blocking way.
// writing appending data to files without blocking the event loop.
//Hnadling gracefully with .catch() or try...catch blocks

import fs from "fs";
import path from "path";

const fileName = "fileRead.txt";
const filePath = path.join(__dirname, fileName);
const file = __dirname;

export function fsAsyncAwait() {
  const readFolder = async () => {
    try {
      const response = await fs.promises.readFile(file, "utf-8");
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  readFolder();
}

// .writeFile, .readFile, .appendFile, .unlink   --> same as above
