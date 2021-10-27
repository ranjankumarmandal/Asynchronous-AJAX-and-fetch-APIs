// Get Some Data from a Text File and Bring it into your webpage asynchronously using XHR (XML Http Request)

document.querySelector('.button').addEventListener('click', loadData);

function loadData(e) {
    // create an XHR object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true); /*GET is a request, data.txt location, true means this is asynchronous */

    // optional - used for spineners / loaders
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState); /* output is 3 - means processing request*/
    }

    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState); /* output is 4 - means request finished*/
        if(this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    xhr.onerror = function() {  /* incase if any error happens while talking to server */
        console.log('Request error.....');
    }



    xhr.send();
}


// readyState values
// 0: request not initialized
// 1: server connection established
// 2: request recieved
// 3: processing request
// 4: request finished and response is ready


// HTTP STATUSES
// 200: "OK"
// 403: "Forbidded"
// 404: "Not Found"