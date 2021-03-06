document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    e.preventDefault();

    const number = document.querySelector('#number').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}` ,true);           // true means asynchronous
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            if(response.type === 'success') {
                response.value.forEach((joke) => {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Something went wront</li>'; 
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }
    xhr.send();
}