// provide promise based api for interacting with filesystem, allowing asynchronous operation to be handled using
// modern javascript feature like async/await or .then() chains

import fs from "fs/promises";
import path from "path";

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName);

//?.then() ensures clear chaining of multiple asynchronous operations.
//?.catch() centrelizes error handling making it easy to debug and manage failures.

export function fsPromise() {
  const file = __dirname;
  // no need to write every time fs.promise simply import fs/promises
//   fs.promises 
//     .readdir(file)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

//   fs.promises
//     .writeFile(filePath, "hello , I AM DEV", "utf-8")
//     .then(() => console.log("file created"))
//     .catch((err) => console.error(err));

  fs
    .appendFile(filePath, "my also name is ravi", "utf-8")
    .then(() => console.log("file created"))
    .catch((err) => console.error(err));

   fs.readFile(filePath, 'utf-8').then((data)=> console.log(data)).catch((e)=> console.log(e))
}
