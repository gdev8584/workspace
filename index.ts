import express from "express";
const app = express();
const port = 3000;

import { fileReadAsync } from "./nodejs/fileReadAsync";
import { fsPromise } from "./nodejs/fsPromisesModule";
import { eventModule } from "./nodejs/eventModules";
import { test1 } from "./nodejs/nodejs-task-1";

// fileReadAsync();
// fsPromise();
// eventModule();
test1();
// app.get("/", (req, res) => {
//   res.send("Hello CodeSandbox!");
// });

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
