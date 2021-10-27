document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);



// get text data - event callback function
function getText(e) {
    fetch('text.txt').then((response) => response.text()).then((data) => {document.getElementById('output').innerHTML = data}).catch((e) => {console.log(e)});
}

// get json data - event callback function
function getJson(e) {
    fetch('post.json').then((response) => response.json()).then((data) => {console.log(data)}).catch((e) => {console.log(e)});
}

// get external data - event callback function
function getExternal(e) {
    fetch('https://api.github.com/users').then((response) => response.json()).then((data) => {console.log(data)}).catch((e) => {console.log(e)});
}


// ---------------- Error Handling with fetch api ----------------------------
function handleError(response) {
    if(!response.ok) throw new Error(response.error);
    return response;
}

fetch('https://api.github.com/users').then((response) => response.json()).then(handleError).then((data) => {console.log(data)}).catch((e) =>{console.log(e)});