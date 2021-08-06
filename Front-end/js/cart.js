let cart = JSON.parse(localStorage.getItem('cart'));

// CIBLAGE DE LA BALISE POUR L'AFFICHAGE
let cartContainer = document.getElementById('cartContainer');

if(cart === null || cart < 1){
    cartContainer.innerHTML = 
    `<div class="text-center mt-2 mb-5 table">
        <h1 class="display-5 fw-bolder text-center">est vide...</h1>
    </div>    `;
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
    </table>`;
    };

    if (i == cart.length) {
        cartContainer.innerHTML = cartView;
    }
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











