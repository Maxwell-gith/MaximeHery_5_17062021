// /*!
// * Start Bootstrap - Shop Homepage v5.0.1 (https://startbootstrap.com/template/shop-homepage)
// * Copyright 2013-2021 Start Bootstrap
// * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
// */

//REQUETE API
// fetch("http://localhost:3000/api/cameras")
//     .then( data => data.json())
//     .then( jsonListProducts => {
//         for(let jsonProducts of jsonListProducts){
//             let product = new Products(jsonProducts);
//             document.getElementById("container").innerHTML += 
                                                                `<div class="col mb-5">
//                                                                     <div class="card h-100">
//                                                                         <img class="card-img-top" src=${jsonProducts.imageUrl} alt="..." />
//                                                                         <div class="card-body p-4">
//                                                                             <div class="text-center">
//                                                                                 <h5 class="fw-bolder">${jsonProducts.name}</h5>
//                                                                                 <div class="d-flex justify-content-center small text-warning mb-2">
//                                                                                     <div class="bi-star-fill"></div>
//                                                                                     <div class="bi-star-fill"></div>
//                                                                                     <div class="bi-star-fill"></div>
//                                                                                     <div class="bi-star-fill"></div>
//                                                                                     <div class="bi-star-fill"></div>
//                                                                                 </div>
//                                                                                 <!-- Product price-->
//                                                                                 <span>${jsonProducts.price/100}€</span>  
//                                                                             </div>
//                                                                         </div>
//                                                                         <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                                                                             <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="../Front-end/item_page.html">Voir fiche produit</a></div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>`


//         }
//     })


// class Products{
//     constructor(jsonProducts){
//         jsonProducts && Object.assign(this, jsonProducts)
//     }
// }

// class ProductsManager{
//     constructor(listProducts){
//         this.listProducts = listProducts;
//     }
// }