let cart = JSON.parse(localStorage.getItem('cart'));

// CIBLAGE DE LA BALISE POUR L'AFFICHAGE
let cartContainer = document.getElementById('cartContainer');

if(cart === null || cart < 1){
    cartContainer.innerHTML = 
    `<div class="text-center mt-2 mb-5">
        <h1 class="display-5 fw-bolder text-center">est vide...</h1>
        <a href="../index.html" class="btn btn-dark mt-5">Remplissez-le ! <i class="fas fa-camera-retro"></i></a>
    </div>`;

}else {
    let cartView = [];
    for(i = 0; i < cart.length; i++) {
        cartView = 
    `<table class="mt-5 mb-5 table">
        <tr>
            <td class="w-25"><img class="card-img" src="${cart[i].imageUrl}"></td>
            <td class="text-center">${cart[i].name}</td>
            <td>${cart[i].lenses}</td>
            <td>${cart[i].quantity}</td>
            <td>${cart[i].price/100}€</td>
            <td id="emptyCart"><i class="fas fa-trash-alt"></i></td>
        </tr>
        <tr id="totalPriceContainer">

        </tr>
    </table>
    <form>
        <div>
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
        <button type="submit" class="btn btn-dark mt-3">Commander</button>
    </form>`;
    };

    if (i == cart.length) {
        cartContainer.innerHTML = cartView;
    };
};

const itemTotalPrice = () => {
    let totalPriceCart = [];
    if (cart && cart.length >= 1) {
        for(let j=0; j < cart.lenght; j++) {
            let priceInCart = cart[j].price * cart[j].quantity;
            totalPriceCart.push(priceInCart);
        };
    };
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalPrice = totalCart.reduce(reducer, 0);
    totalPriceContainer = document.getElementById("totalPriceContainer").innerHTML = `<td></td>
    <td></td>
    <td></td>
    <td>Total</td>
    <td>${totalPrice}€</td>`;

    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
};











