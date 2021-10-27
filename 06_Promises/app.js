// Promises - they return promise to return a data. They are probably an alternative to callbacks
// Promises introduced in JS ES5. 
// This was introduced to make asynchronuos coding in JS easier than callbacks.
// Later on, in ES7, async await introduced to make the little more easier.

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// ------------------------------------ with asynchronuously with promises -----------
function createPost(post) {
    return new  Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: something went wrong...');
            }
        }, 2000);
    })
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

createPost({title: 'Post Three', body: 'This is post three'}).then(getPost).catch((e) => {console.log(e)}); //// we are passing this here