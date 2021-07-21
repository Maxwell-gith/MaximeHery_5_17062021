// RECUPERATION URL
let params = (new URL(document.location)).searchParams;

// RECUPERATION DE L'ID DANS L'URL
let id = params.get("id");

// CIBLAGE DE LA BALISE POUR L'AFFICHAGE
let itemContainer = document.getElementById("itemContainer");


// LOCAL STORAGE
const addToCart = cart => {
    localStorage.setItem('cart' , JSON.stringify(cart));
};

// CREATION PANIER
class Cart {
    constructor(id, optionChoice, quantityChoice) {
        this.id = id;
        this.optionChoice = optionChoice;
        this.quantityChoice = quantityChoice;
    }
}

// AFFICHAGE HTML ITEM DANS ITEM_PAGE
const itemView = item => {
    itemContainer.innerHTML += 
    `<div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src=${item.imageUrl} alt="..." /></div>
    <div class="col-md-6">
    <div class="small mb-1">Ref:${item.id}</div>
    <h1 class="display-5 fw-bolder">${item.name}</h1>
    <div class="fs-5 mb-5">
    <span>${item.price/100}€</span>
    </div>
    <p class="lead">${item.description}</p>
    <div class="d-flex">
    <input class="form-control text-center me-3" id="inputQuantity" type="number" value="1" min="1" max="20" style="max-width: 4.5rem" />
    <select id="options" class="me-3 dropdown">
    
    </select>
    </div>
    <a href="cart_page.html" id="addCart" class="btn btn-outline-dark flex-shrink-0 mt-3">
    <i class="bi-cart-fill me-1"></i>
    Ajouter au panier
    </a>
    </div>`;

// SELECTION LENSES
    for (let lenses of item.lenses) {
        document.getElementById('options').innerHTML += `<option value="${lenses}">${lenses}</option>`
    };
    
// AJOUT AU PANIER
document.getElementById('addCart').addEventListener('click',(e)=> {
    // RECUPERATION DE LA SELECTION
        optionSelect = document.getElementById("options");
        optionChoice = optionSelect.value;
        quantitySelect = document.getElementById("inputQuantity");
        quantityChoice = quantitySelect.value;
    //PASSAGE EN OBJET ET ON ENVOIE AU LOCALSTORAGE 
        let cart = new Cart(id, optionChoice, quantityChoice)
        addToCart(cart)
        // e.preventDefault();
    });
};



// REQUETE API
fetch("http://localhost:3000/api/cameras/" + id)
    .then(res => res.json())
    .then(function (cam){
        let item = new Product(cam)
        itemView(item);
    })
    .catch(function(err){
        console.log("fetch Error")
        alert("Désolé aucun produit n'a été trouvé !")
    });



