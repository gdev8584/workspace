import express from "express";
const app = express();
const port = 3000;

import { fileReadAsync } from "./nodejs/fileReadAsync";
import { fsPromise } from "./nodejs/fsPromisesModule";
import { eventModule } from "./nodejs/eventModules";

// fileReadAsync();
// fsPromise();
eventModule();
// app.get("/", (req, res) => {
//   res.send("Hello CodeSandbox!");
// });

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
