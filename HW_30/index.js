const buyBtn = document.querySelector('.card_btn');
const overlay = document.querySelector('.overlay');
const overlaySubmit = document.querySelector('.overlay_submit');
const closeModal = document.querySelector('.modal__close')
const closeModalSubmit = document.querySelector('.modal_submit_close')
const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn')
const buttonSubmit = document.querySelector('.button_submit')

buyBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
})


buttonSubmit.addEventListener('click', () => {
    overlay.style.display = 'none';


    const name = document.querySelector('input[name="name"]').value;
    const city = document.querySelector('select[name="city"]').value;
    const post = document.querySelector('input[name="post"]').value;
    const payment = document.querySelector('select[name="payment"]').value;
    const quantity = document.querySelector('input[name="quantity"]').value;

    if (
        name === "" ||
        city === "1" ||
        post === "" ||
        payment === ""
    ) {
        alert("Заповніть всі поля форми");
    } else {
        overlaySubmit.style.display = 'block';
        document.querySelector(".modal_submit-name").textContent = `Ім'я: ${name}`;
        document.querySelector(".modal_submit-city").textContent = `Місто: ${city}`;
        document.querySelector(".modal_submit-post").textContent = `Склад Нової пошти: ${post}`;
        document.querySelector(".modal_submit-payment").textContent = `Спосіб оплати: ${payment}`;
        document.querySelector(".modal_submit-quantity").textContent = `Кількість: ${quantity}`;

    }


})

closeModal.addEventListener('click', () => {
    overlay.style.display = 'none';
})
closeModalSubmit.addEventListener('click', () => {
    overlaySubmit.style.display = 'none';
})



plusBtn.addEventListener('click', () => {
    const input = document.getElementById("quantity");
    let value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
})
minusBtn.addEventListener('click', () => {
    const input = document.getElementById("quantity");
    let value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 1) {
        value = 1
    }
    value--;
    input.value = value;
})





