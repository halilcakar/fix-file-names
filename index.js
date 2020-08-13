let fs = require("fs");
let path = require("path");
let directory = "./icons";

let fixName = (name) => {
  return name
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ä/g, "a")
    .replace(/ß/g, "ss")
    .replace(/,./g, "")
    .replace(/_/g, " ")
    .split(" ")
    .join("-");
};
fs.readdir(path.resolve(directory), "utf-8", (err, files) => {
  if (err) {
    throw err;
  }
  let newDir = `${directory}-fixed`;
  if (!fs.existsSync(newDir)){
      fs.mkdirSync(newDir);
  }
  files.forEach((file) => {
    let fileToRename = `${directory}/${file}`;
    fs.writeFileSync(`${newDir}/${fixName(file)}`, fileToRename);
  });
});
