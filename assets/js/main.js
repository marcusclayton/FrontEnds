document.getElementById('customerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://mc-test-function-004.azurewebsites.net/api/newuser");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

var form = {
    customerName: document.getElementById("customerName").value
};
xhr.send(JSON.stringify(form));
return false;
});