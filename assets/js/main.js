document.getElementById('customerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://mc-test-function-004.azurewebsites.net/user");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

var form = {
    customerName: document.getElementById("customerName").value
};
xhr.send(JSON.stringify(form));
return false;
});

function initializeLinks() {
    $('.logout').each(function () {
      $(this).prop('href', '/.auth/logout?post_logout_redirect_uri=' + encodeURI(window.location.pathname));
    });
  }