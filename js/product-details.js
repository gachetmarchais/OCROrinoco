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

const quantity = document.getElementById('teddy-quantity');
const addBasket = document.getElementById('add-basket');

// récupérer le teddy du server
ajaxGet().then( teddy => {
    console.log(teddy);

    // remplir les champs html par les infos du teddy
        image.innerHTML = `<img id="teddy-image" src="${teddy.imageUrl}" alt="Photo de ${teddy.name}" >`;
        name.innerHTML = teddy.name;
        description.innerHTML = teddy.description;
        price.innerHTML = teddy.price/100 + ' ' + 'Eur';

   // ajouter les différents choix de couleurs -- A FAIRE 
        /*
        ajaxGet().then(colors => {           
            colors.forEach (color => {
                $selectColors.innerHTML += `
                '<option id="color-option">' + ${colors[i]} + '</option>';`
            });
            console.log(selectColors);          
            
           for (i = 0; i < colors.length; i++) {
                $selectColors.innerHTML += 
                '<option id="colors-options">' + colors[i] + '</option>';
            }; 
        });  */

        function createColorsOptions(){
            let c = new Color();
            let yourOptions = "<option value='0'>select</option>";

            for (let i = colors; i < colors.lenght; i++) {
                yourOptions += 
                "<option value='+i+'>Choix de la couleur</option>";
            }
            console.log(yourOptions);
            document.getElementById ('teddy-color') = yourOptions;
        }
        

    // ajouter les quantités -- A FAIRE 
        


    // activer le bouton d'ajout au panier -- PAS FINI
        addBasket.addEventListener('click', function(event){
            event.preventDefault();
            let element = {};
            element.id = teddy_id;
            element.name = teddy.name;
            element.price = teddy.price;
            element.quantity = teddy.quantity;

            let basket = [];

        });
   
});

