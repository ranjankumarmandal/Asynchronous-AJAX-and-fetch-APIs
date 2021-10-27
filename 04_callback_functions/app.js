// A callback function is another function that is passed as an argument to a function.

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// ------------------------- with Synchronuos Programming ------------------
function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

function getPost() {
    setTimeout(() => {
        let output = ``;
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'});
getPost(); ///////// we are calling this here

// ------------------------------------ with asynchronuously with Callback functions -----------
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function getPost() {
    setTimeout(() => {
        let output = ``;
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPost); ///// we are passing this here