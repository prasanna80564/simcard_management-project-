
function fetchCustomerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const customerId = urlParams.get('id');
    
    fetch(`http://localhost:3000/customers/${customerId}`)
      .then(response => response.json())
      .then(customer => {
        document.getElementById('customerId').value = customer._id;
        document.getElementById('name').value = customer.name;
        document.getElementById('email').value = customer.email;
        document.getElementById('phone').value = customer.phone;
      })
      .catch(error => console.error('Error fetching customer details:', error));
  }
  
  // Update customer
  document.getElementById('editCustomerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const customerId = document.getElementById('customerId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    const updatedCustomer = { name, email, phone };
  
    fetch(`http://localhost:3000/customers/${customerId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedCustomer),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(() => {
        alert('Customer updated successfully!');
        window.location.href = 'index.html';
      })
      .catch(error => console.error('Error updating customer:', error));
  });
  
  // Delete customer
  function deleteCustomer() {
    const customerId = document.getElementById('customerId').value;
  
    fetch(`http://localhost:3000/customers/${customerId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => {
        alert('Customer deleted successfully!');
        window.location.href = 'index.html';
      })
      .catch(error => console.error('Error deleting customer:', error));
  }
  
 
  document.addEventListener('DOMContentLoaded', fetchCustomerDetails);
  