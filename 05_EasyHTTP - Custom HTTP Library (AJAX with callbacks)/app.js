const http = new EasyHTTP();

// GET responses - jsonplaceholder is fake api provided, means we can use this as a backend server for performing http requests with REST APIs
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) { 
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }

// });

// POST responses
const data = {
    title:'Custom Post',
    body: 'This is a custom post' 
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });


// PUT responses - update
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// })

// DELETE reponses
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) { 
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }

});
