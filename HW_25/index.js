const textField = document.getElementById('input1');
const div1 = document.getElementById('div1');

textField.addEventListener('focus', function () {
    div1.style.display = 'block';
});

textField.addEventListener('blur', function () {
    div1.style.display = 'none';
});