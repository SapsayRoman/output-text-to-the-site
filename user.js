document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    console.log("Спроба входу з:", username, password);
    alert('Авторизація імітована! Перевірте консоль.');
});
