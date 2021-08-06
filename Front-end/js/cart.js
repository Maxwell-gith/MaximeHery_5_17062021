let cart = JSON.parse(localStorage.getItem('cart'));

// CIBLAGE DE LA BALISE POUR L'AFFICHAGE
let cartContainer = document.getElementById('cartContainer');

if(cart === null || cart.lenght < 1){
    cartContainer.innerHTML = 
    `<div class="text-center mt-1 mb-2">
        <h1 class="display-5 fw-bolder text-center">est vide...</h1>
        <a href="../index.html" class="btn btn-dark btn-outline-dark mt-5 display-5">Remplissez-le ! <i class="fas fa-camera-retro"></i></a>
    </div>`;

}else {
    let theadContainer = document.getElementById('theadContainer');
    theadContainer.innerHTML = 
    `<tr>
        <th>Photo</th>
        <th>Nom</th>
        <th>Option</th>
        <th>Prix Unitaire</th>
        <th>Quantité</th>
        <th>Prix Total</th>
        <th>Supprimer</th>
    </tr>`
    let formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = 
    `<div class="form-row">
        <div class="form-group col-md-6 mt-3">
            <input type="text" class="form-control" placeholder="Nom">
        </div>
        <div class="form-group col-md-6 mt-3">
            <input type="text" class="form-control" placeholder="Prénom">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6 mt-3">
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
        </div>
    </div>
    <div class="form-group col-md-6 mt-3">
        <input type="text" class="form-control" id="inputAddress" placeholder="Adresse">
    </div>
    <div class="form-group col-md-6 mt-3">
        <input type="text" class="form-control" id="inputAddress2" placeholder="Complément d'adresse">
    </div>
    <div class="form-group col-md-6 mt-3">
        <input type="text" class="form-control" id="inputCity" placeholder="Ville">
    </div>
    <div class="form-group col-md-6 mt-3">
        <input type="number" class="form-control" id="inputpostalcode" placeholder="Code Postal">
    </div>
    <button type="submit" class="btn btn-dark mt-3">Commander</button>`
    let cartView = [];
    for(i = 0; i < cart.length; i++) {
        cartView +=
        `<tr>
            <td class="w-25"><img class="card-img" src="${cart[i].imageUrl}"></td>
            <td class="align-middle">${cart[i].name}</td>
            <td class="align-middle">${cart[i].lenses}</td>
            <td class="align-middle">${cart[i].price/100}€</td>
            <td class="align-middle"><input class="form-control text-center me-3" id="inputQuantity" type="number" value=${cart[i].quantity} min="1" max="20" style="max-width: 4.5rem" /></td>
            <td class="align-middle">${cart[i].quantity*cart[i].price/100}€</td>
           
            <td class="align-middle" id="delete1Item"><i class="fas fa-trash-alt"></i></td>
        </tr>`;
    };

    if (i == cart.length) {
        cartContainer.innerHTML = cartView;
    };
};

const itemTotalPrice = () => {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalPrice = totalCart.reduce(reducer, 0);
    totalPriceContainer = document.getElementById("totalPriceContainer").innerHTML =
    `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Total</td>
        <td>${totalPrice}€</td>
    </tr>`;

    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
};











