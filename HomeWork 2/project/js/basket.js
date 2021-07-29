"use strict"



// Показать/скрыть товары в корзине
openBasketBtn.addEventListener("mouseover", function () {
    basketEl.style.display = "block"
});
openBasketBtn.addEventListener("mouseout", function () {
    basketEl.style.display = "none"
});

// Отрисовать добавленный товар в корзине.
function renderNewProductInBasket() {
    let productRow = `
        <div class="basketRow">
            <div>${products.name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products.price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products.price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

// Удалить товар из корзины. Пока не знаю как это реализовать. Скорее всего через productID и toggle.

// Посчитать суммартную стоимость товаров в корзине. Тут реализация через цикл. Где цена одного продукта умножается на его количество 
// и складывается со следующим значением.