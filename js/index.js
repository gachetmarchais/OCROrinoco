
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
ajaxGet().then(function(teddies){ // faire le retour de name et img dans liste
    console.log (teddies);
    const $listTeddies = document.querySelector('#list-teddies');
    teddies.forEach(teddies => {
        $listTeddies.innerHTML += `
        <li class="teddy-product" id="${teddy._id}">
            <img src="${teddy.imageUrl}">
            <h3>${teddy.name}</h3>
        `;
    })
});
teddy.send();

   

    /*
    < li  class = " media text-white bg-secondaire arrondi-droit arrondi-bordure gauche frontière-secondaire mb-3 pr-3 " id = " 5beaaa8f1c9d440000a57d95 " >
    < img  class = " mr-3 " src = " images / teddy_3.jpg " alt = " Teddie Lenny et Carl " >
    < div  class = " media-body align-self-center " >
        < h3  class = " mt-0 " > Lenny et Carl </ h3 >
        < p  class = " mb-0 " > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </ p >
    </ div >
    < div  class = " ml-3 align-self-center " >
        < div  class = " btn btn-primary " > Voir le produit </ div >
    </ div >*/



