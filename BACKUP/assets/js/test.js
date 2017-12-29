document.getElementById('customerForm').addEventListener('submit', function (e) {
    var functionUrl = "https://mc-test-function-004.azurewebsites.net/api/newuser";
    var form = {
        customerName: document.getElementById("customerName").value
    };
    $.ajax({
        method: "POST",
        url: functionUrl,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        data: JSON.stringify(form),
        success: function(data){
            alert('Request submitted');
        },
        error: function(data){
            alert('Whoops, something went wrong.')
            console.info(data);
        }
    });
});

function initializeLinks() {
    $('.logout').each(function () {
      $(this).prop('href', '/.auth/logout?post_logout_redirect_uri=' + encodeURI(window.location.pathname));
    });
  }