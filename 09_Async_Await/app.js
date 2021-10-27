// async function don't return a data but they return a promise of data.
// concept of async await has been introduced in JS ES7 as an advanced concept of promises in JS
//           and to make asynchronuous programming in JS easier.

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // wait until fetch (is a promise) call gets resolved
    const data = await response.json(); // wait until response promise gets resolved
    console.log(data);
}

getUsers();



// --------------- or --------------
async function getUsers1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = response.json();
    return data;
}

getUsers1().then((data) => console.log(data));