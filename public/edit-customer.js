const { MongoCryptCreateDataKeyError } = require("mongodb");

function fetchCustomerDetails() {
    const urlParmas = new URLSearchParams(window.location.search);
    const customerId = urlParmas.get('id');


    fetch(`http://localhost:3000/customers/${customerId}`)
    .then(response => response.json())
    .then(customer => {
        document.getElementById('customerId').value = customer._id;
        document.getElementById('name').value = customer.name;
        document.getElementById('email').value = customer.email;
        document.getElementById('phone').value = customer.phone;

    })
    .catch(error => console.error('error fetching customer data',error));
}

//edit customer details
