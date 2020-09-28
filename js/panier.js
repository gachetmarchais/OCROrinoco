let basket = JSON.parse(window.localStorage.getItem('orinoco_ocr_natacha_P5'));
const $listTeddies = document.querySelector('#list-teddy');
    

basket.forEach(product => {
    console.log(product);
    $listTeddies.innerHTML += `
    <li class="teddy-product" id="${product._id}">
       <span>${element.imageUrl}</span>
       <span>${element.name}</span>
       <span>${element.price/100}.00€</span>
       <span>${element.quantity }</span> 
       <span>${element.price/100*element.quantity},00€</span>
    `;
});

// Prix total du panier -- A FAIRE 
function totalCount() {
    for (let i in basket) {
        total += basket[i].price * basket[i].quantity;
    }
    console.log(total);

    totalBasket = total / 100 + ',00 €';
}

updateQuantity();
totalCount();


// Formulaire
function form() {
    let disableBtn = document.querySelector('#btn-validation');
}
