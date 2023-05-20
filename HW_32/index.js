// Отримуємо посилання на кнопку "мої замовлення" та обгортку замовлень
const myOrdersBtn = document.querySelector(".my_orders_btn");
const cardWrapper = document.querySelector(".card_wrapper");

// Додаємо обробник події для кнопки "мої замовлення"
myOrdersBtn.addEventListener("click", showMyOrders);

// Функція для показу замовлень користувача
function showMyOrders() {
    // Отримуємо збережені замовлення з localStorage (якщо є)
    const orders = JSON.parse(localStorage.getItem("orders")) || [];


    // Сховати категорії та показати список замовлень
    cardWrapper.innerHTML = "";

    // Проходимось по замовленнях та додаємо їх до списку
    orders.forEach((order) => {
        const orderElement = document.createElement("div");
        orderElement.classList.add("order");
        orderElement.innerHTML = `
          <div class="order_date">${order.date}</div>
          <div class="order_price">${order.price}</div>
          <button class="delete_order_btn">Delete</button>
          <div class="order_details">${order.details}</div>
        `;

        // Додаємо обробник події для кнопки "видалити замовлення"
        const deleteBtn = orderElement.querySelector(".delete_order_btn");
        deleteBtn.addEventListener("click", () => deleteOrder(order));

        cardWrapper.appendChild(orderElement);
    });
}

// Функція для збереження замовлення в localStorage
function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
}

// Функція для видалення замовлення зі списку
function deleteOrder(order) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = orders.filter(
        (savedOrder) => savedOrder.date !== order.date
    );
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    showMyOrders();
}

// Додаємо обробник події для кнопок "замовити"
const orderBtns = document.querySelectorAll(".order_btn");
orderBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const name = card.querySelector(".card_name").textContent;
        const price = card.querySelector(".card_price").textContent;

        // Створюємо об'єкт замовлення
        const order = {
            date: new Date().toLocaleString(),
            price: price,
            details: `Ordered item: ${name}`,
        };

        // Зберігаємо замовлення
        saveOrder(order);
    });
});

