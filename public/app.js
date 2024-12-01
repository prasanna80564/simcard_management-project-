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