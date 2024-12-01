document.getElementById("customerSimForm").addEventListener("submit", function (e){
  e.preventDefault();
  const name = document.getElementById("customerName").value;
  const email = document.getElementById("customerEmail").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const plan = document.getElementById("plan").value;
  const isActive = document.getElementById("isActive").Checked;

  const customers = JSON.parse(localStorage.getItem("customers") || "[]");
  customers.push({ id: Date.now(), name,email,phoneNumber,plan,isActive});
  localStorage.setItem("customers",JSON.stringify(customers));
  fetchCustomers();


});

//fetch customers

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
  <th>Action</th>
  </tr>`;

  customers.forEach((customer) => {
    const row = table.inertRow();
    row.innerHTML = `
    <td>${customer.name}</td>
    <td>${customer.email}</td>
    <td>${customer.phoneNumber}</td>
    <td>${customer.plan}</td>
    <td>${customer.isActive ? "Yes" : "No"}</td>
    <td>
      <buttton onclick="editCustomers(${customer.id})">Edit</button>
      <button onclick="deleteCustomer(${customer.id})">Delete</button>
      </td>`;
  });
}

