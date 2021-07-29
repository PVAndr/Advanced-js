'use strict';
// const products = [
//     { id: 1, image: "http://placehold.it/250x230/", title: 'Notebook', price: 1000 },
//     { id: 2, image: "http://placehold.it/250x230/", title: 'Mouse', price: 100 },
//     { id: 3, image: "http://placehold.it/250x230/", title: 'Keyboard', price: 250 },
//     { id: 4, image: "http://placehold.it/250x230/", title: 'Gamepad', price: 150 },
// ];

// const renderProduct = (image, title, price) => {
//     return `<div class="product-item">
//                 <img src="${image}" />
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="by-btn">Добавить</button>
//               </div>`;
// }

// const renderProducts = (list) => {
//     document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(item => renderProduct(item.image, item.title, item.price)).join(""))
// }

// renderProducts(products);


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/250x230') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
                  <h3>${this.title}</h3>
                  <p>${this.price} </p>
                  <button class="by-btn">Купить</button>
          </div>`;
    }
}

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this._goods = [];
        this._allProducts = [];

        this._fetchGoods();
        this._render();
    }

    _fetchGoods() {
        this._goods = [
            { id: 1, title: 'Notebook', price: 20000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }

    sum() {
        return this._goods.reduce((sum, { price }) => sum + price, 0);
    }

    _render() {
        const block = document.querySelector(this.container);

        for (const product of this._goods) {
            const productObject = new ProductItem(product);
            this._allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
}
const list = new ProductList();
