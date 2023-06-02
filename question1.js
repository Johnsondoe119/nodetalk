//Question 1
//readFilesync basically goes and reads a file and displays whats in that file to you if you ask for it to
//writeFilesync will display the wanted information to a text file
const { readFileSync, writeFileSync } = require("fs");

const fs = require("fs");
//they are creating two variables here. the first one labeled first is  basically reading the information from the first text file
//while the second variable is reading the information from the second tectfile
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
//after the files are read they console.log it to display it in the console
console.log(first, second);
//here its creating two text file that displays information from the two text files we read, both are withing the first and second variable
//Using templete literals to format it and display the information within the the new file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
  //flag property actually has many uses depending on what value its set to, in this case "a" does: Opens the file for appending, a file is created if it doesn't exist
);

