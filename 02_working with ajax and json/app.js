document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);
    xhr.onload = function() {
        if(this.status === 200) {
            const customer = JSON.parse(this.responseText);
            document.getElementById('customer').innerHTML = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>NAME: ${customer.name}</li>
                    <li>COMPANY: ${customer.company}</li>
                    <li>PHONE: ${customer.phone}</li>
                </ul>
            `;
        }
    }

    xhr.send();
}

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function() {
        if(this.status === 200) {
            const customers = JSON.parse(this.responseText);
            let output = ``;
            customers.forEach((customer) => {
                output += `
                    <ul>
                        <li>NAME: ${customer.id}</li>
                        <li>NAME: ${customer.name}</li>
                        <li>COMPANY: ${customer.company}</li>
                        <li>PHONE: ${customer.phone}</li>
                    </ul>
                `;
            });

            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}