//script for index.html
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
        customers.forEach(customer => {
          const row = table.insertRow();
          row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>
              <a href="edit-customer.html?id=${customer._id}">Edit</a>
              <button onclick="deleteCustomer('${customer._id}')">Delete</button>
            </td>`;
        });
      })
      .catch(error => console.error('Error fetching customers:', error));
  }
  
  
  function deleteCustomer(id) {
    fetch(`http://localhost:3000/customers/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => {
        alert('Customer deleted successfully!');
        fetchCustomers();  
      })
      .catch(error => console.error('Error deleting customer:', error));
  }
  
 
  document.getElementById('addCustomerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    const newCustomer = { name, email, phone };
  
    fetch('http://localhost:3000/customers/add', {
      method: 'POST',
      body: JSON.stringify(newCustomer),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(() => {
        alert('Customer added successfully!');
        fetchCustomers();  
      })
      .catch(error => console.error('Error adding customer:', error));
  });
  