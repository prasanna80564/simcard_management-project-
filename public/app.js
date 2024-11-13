const { response } = require("express");

function fetchCustomers() {
    fetch('http://localhost:3000/customers')
    .then(response => response.json())
    .then(customers => {

        const table = document.getElementById('customerTable');
        table.innerHTML = `
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Actions</th>
        </tr>`;

        customers.array.forEach(element => {
            const row = table.insertRow();
            row.innerHTML = `
            <td>${customer.name}<\td>
            <td>${customer.email}<\td>
            <td>${customer.phone}<\td>
            <td>
            <a href="edit-customer.html?id=${customer._id}">Edit</a>
            <button onclick="deleteCustomer('${customer._id}')">DELETE</button>
            
            </td>`;


        });

    })

    .catch(error => console.error('error fetching customers:',error));

}

// delete 

function deleteCustomer(id) {
    fetch(`http://localhost:3000/customers/${id}`,{
        method : 'DELETE'
    })

    .then(response => response.json())
    .then(() => {
        alert('customer is successfully deleted!');
        fetchCustomers();


    })
    .catch(error => console.error('errror deleting the customer:',error));
}

// new customer 

document.getElementById('addCustomerForm').addEventListener('submit' , function (e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const newCustomer = {name, email, phone};

    fetch('http://localhost:3000/customers/add',{

        method: 'post'
        body: JSON.stringify(newCustomer),
        headers: {'content-Type': 'application/json'}
    })

    .then(response => response.json())
    .then(() => {
        alert('customer is added successfully!');
        fetchCustomers();

    })
    .catch(error => console.error('error adding customer:',error));


});











    








