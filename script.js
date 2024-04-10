document.getElementById('translateButton').addEventListener('click', function() {
    var sourceText = document.getElementById('sourceText').value;
    // Імітація перекладу (насправді потрібно реалізувати запит до сервера)
    document.getElementById('translationResult').innerText = "Виведенний текст: " + sourceText;
});
