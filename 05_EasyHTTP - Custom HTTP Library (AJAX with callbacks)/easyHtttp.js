function EasyHTTP() {
    this.http = new XMLHttpRequest();
}

// make an http GET request
EasyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    this.http.onload = () => {
        if(this.http.status === 200) {
            callback(null, this.http.responseText);
        } else {
            callback('Error: ' + this.http.status);
        }
    }
    this.http.send();
}

// make an http POST request
EasyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload = () => {
        callback(null, this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// make an http PUT request
EasyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload = () => {
        callback(null, this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// make an http DELETE request
EasyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    this.http.onload = () => {
        if(this.http.status === 200) {
            callback(null, 'Data Deleted');
        } else {
            callback('Error: ' + this.http.status);
        }
    }
    this.http.send();
}