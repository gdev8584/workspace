import fs from "fs";
import path from "path";

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName);

export function fileReadAsync() {
    fs.writeFile(
        filePath,
        "This is initail data, you will read",
        "utf-8",
        (err: any) => {
          if (err) console.error(err);
          else console.log("file is saved by writeFile");
        }
      );
      
      fs.readFile(filePath, "utf-8", (err: any, data: any) => {
        if (err) console.error(err);
        else console.log(data);
      });
      
    //   append data in file , if file not exit it will create new one
      
      fs.appendFile(filePath, "\nThis is first step", "utf-8", (err) => {
        if (err) console.error(err);
        else console.log("file is saved by append");
      });
      
    //   fs.unlink(filePath, (err) => {
    //     if (err) console.error(err);
    //     else console.log("file has been deleted");
    //   });
      
}