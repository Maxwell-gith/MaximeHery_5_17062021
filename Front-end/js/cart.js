const addToCart = item => {
    item.quantity = parseInt(document.getElementById('quantity').value);
    //RECUPERATION DU PANIER
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('panier')) : [];
        document.getElementById('id').value = id;
        document.getElementById('optionChoice').value = optionChoice;
        document.getElementById('quantityChoice').value = quantityChoice;
    // BOUCLE FOR PARCOURIR LIGNE PANIER
        let cameraExistIndex = false;
        for (let i=0; i < cart.length; i++) {
            let item = cart[i];
            if (item.id === item.id) {
                cameraExistIndex = i;      
        };
        if (false !== cameraExistIndex) { 
            cart[cameraExistIndex].quantity = parseInt(cart[cameraExistIndex].quantity) + item.quantity;
        }else{
            cart.push(item);
        }
};

// CIBLAGE DE LA BALISE POUR L'AFFICHAGE
let cartContainer = document.getElementById('cartContainer');

// AFFICHAGE HTML CART DANS CART_PAGE
const cartView = cart => {
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