//récupérer l'Id du teddy
const url = new URL(window.location.href);
const teddy_id = url.searchParams.get('id');
console.log(teddy_id); //à retirer
// lien explicatif avec exemple : https://developers.google.com/web/updates/2016/01/urlsearchparams


// se connecter aux teddies du server via l'url
async function ajaxGet(){
    const url = 'http://localhost:3000/api/teddies/' + teddy_id;
    let response = await fetch(url); 

    if (response.ok) { 
        let json = await response.json();
        return json;
    } else {
    alert("HTTP-Error: " + response.status);
    }
};

// récupérer des Id des balises html
const image = document.getElementById('teddy-image');
const name = document.getElementById('teddy-name');
const description = document.getElementById('teddy-description');
const price = document.getElementById('teddy-price');
const selectColors = document.getElementById('teddy-color');


// récupérer le teddy du server -- A FAIRE 


    // remplir les champs html par les infos du teddy
        image.innerHTML = `<img id="teddy-image" src="${teddy.imageUrl}" alt="Photo de ${teddy.name}" >`;
        name.innerHTML = teddy.name;
        description.innerHTML = teddy.description;
        price.innerHTML = teddy.price/100 + ' ' + 'Eur';

   // ajouter les différents choix de couleurs 
        
        teddy.colors.forEach(color =>{
            selectColors.innerHtml += 'option value =$(color)>$(color)</option>';
        });


    // activer le bouton d'ajout au panier -- PAS FINI
       document.querySelector('form').addEventListener('submit', function(e){
            e.preventDefault();
            let element = {};
            element._id         = teddy_id;
            element.name        = teddy.name;
            element.price       = teddy.price;
            element.quantity    = teddy.quantity;
            element.imageUrl    =teddy.imageUrl;

            let basket = JSON.parse(window.localStorage.getItem('orinoco_ocr_natacha_P5'));
            /*
            if() {
                basket.push(element);
            }
            */
            window.localStorage.setItem(('orinoco_ocr_natacha_P5'));
        });   
 

// ajouter les quantités
function implementQuantitySelect(){
    const $select = document.querySelector('#teddy-quantity');
    for (let i = 1; i <= 50; i++) {
        $select.innerHTML += 'option value=$(i)>$(i)</option>';
    }
}
implementQuantitySelect();
