const { readFile, writeFile } = require("fs");//this line is telling us that its going to uses the fs moduale to read and display the contents of a file
console.log("start");//once calling the moduale is done and the files are ready to be read we console log start to inform user of the begining
readFile("./content/first.txt", "utf8", (err, result) => {//its using the read file function to read the contents of the first text file.
    //the err and result parameters are used in this if statement to specify what to do when and if either parameters happen
  if (err) {
    //if an error console log the error and end the task
    console.log(err);
    return;
  }
  //if an error is not thrown the variable first will gain the value of result
  const first = result;
  //we would console.log the results to the iser
  console.log(result);
  //here we would do the exact same thing to the second text file
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(result);
    //next the program will put the information stored in the two variables and in a new text file will present said  results
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        //will tell you when done with task
        console.log("done with the task");
      }
    );
  });
});
console.log("starting next task");
