//RECUPERATION DES DONNEES URL
let paramsUrl = new URL(window.location).searchParams;

let orderId = paramsUrl.get("orderId");

//RECUPERATION DES DONNEES CONTACT
let contact = JSON.parse(localStorage.getItem("contact"));

// RECUPERATION DU PRIX TOTAL
let totalPrice = JSON.parse(localStorage.getItem("totalPrice")); 

// AFFICHAGE HTML
let confirmationContainer = document.getElementById("confirmationContainer");
function confirmationView (){
    confirmationContainer.innerHTML =
 `<div class="text-center mt-1 mb-2">
    <h1 class="display-5 fw-bolder text-center">Confirmation de votre commande</h1>
    <p class="text-center"> Merci ${contact.firstName} ${contact.lastName} !</p>
    <p class="text-center"> Votre commande a bien été enregistrée avec le n° ${productsOrdered} </br>
    pour un montant total de ${totalPrice/100}€</br>
    Un email vous sera envoyé à l'adresse suivante ${contact.email} au moment de l'expédition.   
    <a href="../index.html" class="btn btn-dark btn-outline-dark mt-5 display-5">Retour à l'accueil <i class="fas fa-camera-retro"></i></a>
</div>`;
};

confirmationView();

