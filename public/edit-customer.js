const params = new URLSearchParams(window.location.search);
const customerId = params.get("id");
const customers = JSON.parse(localStorage.getItem("customers") || "[]");
const customer = customers.find((c) => c.id == customerId);


if (customer) {
    document.getElementById("editCustomerName").value = customer.name;
    document.getElementById("editCustomerEmail").value = customer.email;
    document.getElementById("editPhoneNumber").value = customer.phoneNumber;
    document.getElementById("editPlan").value = customer.plan;
    document.getElementById("editIsActive").checked = customer.isActive;
}

document.getElementById("editCustomerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    customer.name = document.getElementById("editCustomerName").value;
    customer.email = document.getElementById("editCustomerEmail").value;
    customer.phoneNumber = document.getElementById("editPhoneNumber").value;
    customer.plan = document.getElementById("editPlan").value;
    customer.isActive = document.getElementById("editIsActive").checked;



    localStorage.setItem("customers", JSON.stringify(customers));
    alert("Customer details updated!");
    window.location.href = "index.html";
});


