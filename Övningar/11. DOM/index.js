let getButton = document.getElementById('getData');
getButton.onclick = function(){
   // Creating an new XMLHttpRequest object
let xhr = new XMLHttpRequest();
// (<method>, <url>, <if asynchronos>)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
// Sets how to handle the response
xhr.onload = function(){
    if (this.readyState == 4 && this.status == 200) {
        console.log(this);  // Whole response object
        console.log(this.responseText);  // The response data
        JSON.parse(this.responseText); // Parses the JSON to a workable JavaScript object
    }
};

// Sends the request
xhr.send(); 
};

let sendButton = document.getElementById('sendData');
sendButton.onclick = function(){
   // Creating an new XMLHttpRequest object
let xhr = new XMLHttpRequest();
// (<method>, <url>, <if asynchronos>)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
// Sets how to handle the response
xhr.onload = function(){
    if (this.readyState == 4 && this.status == 200) {
        console.log(this);  // Whole response object
        console.log(this.responseText);  // The response data
        JSON.parse(this.responseText); // Parses the JSON to a workable JavaScript object
    }
};

// Sends the request
xhr.send(); 
};

