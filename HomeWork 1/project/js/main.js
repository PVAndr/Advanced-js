'use strict';
const products = [
    { id: 1, image: "http://placehold.it/250x230/", title: 'Notebook', price: 1000 },
    { id: 2, image: "http://placehold.it/250x230/", title: 'Mouse', price: 100 },
    { id: 3, image: "http://placehold.it/250x230/", title: 'Keyboard', price: 250 },
    { id: 4, image: "http://placehold.it/250x230/", title: 'Gamepad', price: 150 },
];

const renderProduct = (image, title, price) => {
    return `<div class="product-item">
                <img src="${image}" />
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
}

const renderProducts = (list) => {
    document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(item => renderProduct(item.image, item.title, item.price)).join(""))
}

renderProducts(products);
