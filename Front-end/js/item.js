// /*!
// * Start Bootstrap - Shop Homepage v5.0.1 (https://startbootstrap.com/template/shop-homepage)
// * Copyright 2013-2021 Start Bootstrap
// * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
// */

let params = (new URL(document.location)).searchParams;

let id =params.get("id");

let itemContainer = document.getElementById("itemContainer");

const itemView = item => {
    itemContainer.innerHTML += `<div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
                                <div class="col-md-6">
                                    <div class="small mb-1">Ref: BST-498</div>
                                    <h1 class="display-5 fw-bolder">Shop item template</h1>
                                    <div class="fs-5 mb-5">
                                        <span>$40.00</span>
                                    </div>
                                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                                    <div class="d-flex">
                                        <!-- <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" /> -->
                                        <div class="me-3 dropdown">
                                            <button class="bg-dark btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Options
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                        <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                            <i class="bi-cart-fill me-1"></i>
                                            Ajouter au panier
                                        </button>
                                    </div>
                                </div>`

};

fetch("http://localhost:3000/api/cameras" + id)
    .then(res => res.json())
    .then(function (cam){
        let item = new Product(cam)
        itemView(item);
    })
    .catch(function(err){
        console.log("fetch Error")
        alert("Désolé aucun produit n'a été trouvé !")
    })