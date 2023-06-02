const getTodos = () => {
  //this sets the variable request to a new XMLHttpRequest
  //XMLHttpRequest is a built-in browser object in JavaScript that provides an easy way to make asynchronous HTTP requests to a server.
  //commonly used to retrieve data from a server or send data to a server without reloading the entire web page.
  const request = new XMLHttpRequest();
  //this sets us a statechange listener
  //The readystatechange event is fired whenever the readyState property of the XMLHttpRequest object changes
  request.addEventListener("readystatechange", () => {
    //If the readyState is 4 (DONE) and the status is 200 (OK), it means the request was successful, and the response is available.
    // In this case, console.log(request.responseText) is called to log the response text to the console.
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    } else if (request.readyState === 4) {
      console.log("could not fetch the data");
    }
  });
  //this sets up your request details
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  //sends request
  request.send();
};

getTodos();
getTodos();
