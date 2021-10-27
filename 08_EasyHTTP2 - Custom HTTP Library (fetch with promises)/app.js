const http = new EasyHTTP();

// GET users
http.get('https://jsonplaceholder.typicode.com/users')
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

// data
const data = {
    name: 'Ranjan Kumar Mandal',
    username: 'Ranjan',
    email: 'test@test.com'
};

// POST data - submit
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

    
// PUT data - update
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then((data) => console.log(data))
.catch((e) => console.log(e));

// DELETE data
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
.then((data) => console.log(data))
.catch((e) => console.log(e));