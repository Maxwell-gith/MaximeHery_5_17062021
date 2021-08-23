let cart = JSON.parse(localStorage.getItem('cart'));

// CIBLAGE DE LA BALISE POUR L'AFFICHAGE
let cartContainer = document.getElementById('cartContainer');

// AFFICHAGE SI LE PANIER EST VIDE
// alert(cart.lenght);
if(cart == null || cart == []){
    cartContainer.innerHTML = 
    `<div class="text-center mt-1 mb-2">
        <h1 class="display-5 fw-bolder text-center">est vide...</h1>
        <a href="../index.html" class="btn btn-dark btn-outline-dark mt-5 display-5">Remplissez-le ! <i class="fas fa-camera-retro"></i></a>
    </div>`;

// AFFICHAGE SI LE PANIER CONTIENT UN OU DES PRODUITS
}else {
    //EN TETE DU TABLEAU 
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

    //AFFICHAGE DES PRODUITS DANS BODY DU TABLEAU
    let cartView = [];
    for(i = 0; i < cart.length; i++) {
        cartView +=
        `<tr>
        <td class="w-25"><img class="card-img" src="${cart[i].imageUrl}"></td>
        <td class="align-middle">${cart[i].name}</td>
        <td class="align-middle">${cart[i].lenses}</td>
        <td class="align-middle">${cart[i].price/100}€</td>
        <td class="align-middle">${cart[i].quantity}</td>
        <td class="align-middle">${cart[i].quantity*cart[i].price/100}€</td>
        
        <td class="align-middle"><button class="delete1Item btn btn-outline-dark" data-id="${i}"><i class="fas fa-trash-alt"></i></button></td>
        </tr>`; //a voir pour pouvoir modifier la quantité sur cette page et que le calcul des prix suivent
    };

    if (i == cart.length) {
        cartContainer.innerHTML = cartView;
    };

    // SUPPRIMER UN ARTICLE
    function delete1 (id) {
            if (cart[id].quantity > 1) {
                cart[id].quantity --;
            } else {
                cart.splice(id, 1);
            }
            localStorage.setItem('cart' , JSON.stringify(cart));
            window.location.reload();
    };    
    
    document.querySelectorAll('.delete1Item').forEach(btnDelete => {
        btnDelete.addEventListener('click', () => delete1(btnDelete.dataset.id))
    });

    //CALCUL DU PRIX DU PANIER
    let totalPrice = [];
    for (k = 0; k < cart.length; k++) {
        let priceInCart = cart[k].price;
        totalPrice.push(priceInCart)
        // console.log(totalPrice)
    }
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPriceCalculation = totalPrice.reduce(reducer,0);  
    // console.log(totalPriceCalculation);

    // AFFICHAGE DU PRIX DANS FOOTER DU TABLEAU
    let totalPriceContainer = document.getElementById('totalPriceContainer');
    totalPriceContainer.innerHTML =
    `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <th>TOTAL</th>
        <th>${totalPriceCalculation/100}€</th>
        <th><button id="deleteAll" class="btn btn-outline-dark">Tout supprimer</button></th>
    </tr`; 

    // SUPRIMER TOUT LE PANIER
    let deleteAll = document.getElementById('deleteAll');
    function deleteCart() {
        if (cart == null){
        }else {
            localStorage.clear();
            window.location.reload();
        }
    };
    deleteAll.addEventListener('click', deleteCart);



    // AFFICHAGE DU FORMULAIRE DE COMMANDE
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


    


    

    
};









