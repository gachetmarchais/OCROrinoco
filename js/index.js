
async function ajaxGet(){
    const url = 'http://localhost:3000/api/teddies';
    let response = await fetch(url); //stock resultat de la méthode fetch (tj paramètre url)

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json;
    } else {
    alert("HTTP-Error: " + response.status);
    }
};

ajaxGet().then(teddies => { // faire le retour de name et img dans liste
    console.log (teddies);    
    const $listTeddies = document.querySelector('#list-teddies');
    
    teddies.forEach(teddy => {
        $listTeddies.innerHTML += `
        <li class="teddy-product" id="${teddy._id}">
            <a href="html/product-details.html?id=${teddy._id}"><img src="${teddy.imageUrl}" id="teddy-image"></a>
            <div id="teddy-name">
                <h3>${teddy.name}</h3>
            </div>
        `;
    });
});


 // initialiser le basket 
 let storage = window.localStorage.getItem('orinoco_ocr_natacha_P5');

if(storage) {
    console.log('Youpi, le storage existe déjà !!');
} else {
    window.localStorage.setItem('orinoco_ocr_natacha_P5', JSON.stringify([]));
}

   



