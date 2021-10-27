// ----------- Synchronuous code ----------------- 
const posts = loadPostSync();
// .. wait till posts are fetched
// .. do something with posts

doNextThing();  // Has to wait untill posts load



// -------------- Asynchronous code --------------
loadPostAsync(function() {
    // .. wait till posts are fetched
    // .. do something with posts
});

doNextThing(); // Doesn't have to wait until posts load