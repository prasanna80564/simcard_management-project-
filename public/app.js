// Add new customer and SIM 
document.getElementById("customerSimForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("customerName").value;
  const email = document.getElementById("customerEmail").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const plan = document.getElementById("plan").value;
  const isActive = document.getElementById("isActive").checked;

  // Save to local storage or send to server
  const customers = JSON.parse(localStorage.getItem("customers") || "[]");
  customers.push({ id: Date.now(), name, email, phoneNumber, plan, isActive });
  localStorage.setItem("customers", JSON.stringify(customers));

  fetchCustomers();
});

// Fetch customers 
function fetchCustomers() {
  const customers = JSON.parse(localStorage.getItem("customers") || "[]");
  const table = document.getElementById("customerTable");

  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Plan</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>`;

  customers.forEach((customer) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${customer.name}</td>
      <td>${customer.email}</td>
      <td>${customer.phoneNumber}</td>
      <td>${customer.plan}</td>
      <td>${customer.isActive ? "Yes" : "No"}</td>
      <td>
        <button onclick="editCustomer(${customer.id})">Edit</button>
        <button onclick="deleteCustomer(${customer.id})">Delete</button>
      </td>`;
  });
}

// edit-customer.html 
function editCustomer(customerId) {
  window.location.href = `edit-customer.html?id=${customerId}`;
}

// Delete customer
function deleteCustomer(customerId) {
  if (confirm("Are you sure you want to delete this customer?")) {
    let customers = JSON.parse(localStorage.getItem("customers") || "[]");
    customers = customers.filter((customer) => customer.id !== customerId);
      localStorage.setItem("customers", JSON.stringify(customers));
      fetchCustomers();
  }
}