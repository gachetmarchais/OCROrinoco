let basket = JSON.parse(window.localStorage.getItem('orinoco_ocr_natacha_P5'));
const $listTeddies = document.querySelector('#list-teddy');
    

basket.forEach(product => {
    console.log(product);
    $listTeddies.innerHTML += `
    <li class="teddy-product" id="${product._id}">
       <img src="${product.imageUrl}"/>
       <span>${product.name}</span>
       <span>${product.price/100}.00€</span>
       <span>${product.quantity }</span> 
       <span>${product.price/100*product.quantity},00€</span>
    `;
});

// Prix total du panier -- A FAIRE 
function totalCount() {
    let total = 0;
    basket.forEach(product => {
        total += product.price * product.quantity;
    })
       
    console.log(total);
    const totalBasket = document.querySelector('#total-amount');
    totalBasket.innerText = total / 100 + ' €';
}

// updateQuantity();
totalCount();



document.querySelector('form').addEventListener('submit', () => {
   const firstName = document.querySelector('#firstname').value;
   const lastName = document.querySelector('#lastname').value;
   const city = document.querySelector('#city').value;
   const address = document.querySelector('#address').value;
   const email = document.querySelector('#email').value;   

});

// Formulaire
function form() {
    let disableBtn = document.querySelector('#btn-validation');
}
