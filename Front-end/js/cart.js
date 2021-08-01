let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('panier')) : [];

// CIBLAGE DE LA BALISE POUR L'AFFICHAGE
let cartContainer = document.getElementById('cartContainer');

// AFFICHAGE HTML CART DANS CART_PAGE
const cartView = item => {
    cartContainer.innerHTML +=
    `<table class="text-center mt-5 mb-5 table">
        <td>${item.imageUrl}</td>
        <td>${item.name}</td>
        <td>${optionChoice}</td>
        <td>${quantityChoice}</td>
        <td>supprimer</td>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
        </tr>
    </table>`
};


