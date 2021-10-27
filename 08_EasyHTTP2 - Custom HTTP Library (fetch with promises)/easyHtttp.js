/**
 * Easy HTTP Library
 * Library for making HTTP Requests
 * 
 * @version 2.0.0
 * @author Ranjan Kumar Mandal
 * @license MIT
 **/

class EasyHTTP {
    get(url) {
        // make HTTP GET request
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((e) => reject(e));
        });
    }
    
    post(url, data) {
        // make HTTP POST request - submit
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((e) => reject(e));
        });
    }

    put(url, data) {
        // make HTTP PUT request - update
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((e) => reject(e));
        });
    }

    delete(url) {
        // make HTTP DELETE request - delete
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {'Content-type': 'application/json'},
            })
                .then((response) => response.json())
                .then((data) => resolve('Resource Deleted..'))
                .catch((e) => reject(e));
        });
    }
}