document.getElementById('registerButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log("Реєстрація з даними:", username, email, password);
    alert('Реєстрація імітована! Перевірте консоль.');
});
