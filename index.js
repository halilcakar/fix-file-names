let fs = require("fs");
let path = require("path");
let directory = "./example-folder";

let fixName = (name) => {
  return name
    .toLowerCase()
    .replace(/ä/g, "a")
    .replace(/ß/g, "ss")
    .split(" ")
    .join("-");
};
fs.readdir(path.resolve(directory), "utf-8", (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach((file) => {
    let fileToRename = `${directory}/${file}`;
    fs.renameSync(fileToRename, `${directory}/${fixName(file)}`);
  });
});
