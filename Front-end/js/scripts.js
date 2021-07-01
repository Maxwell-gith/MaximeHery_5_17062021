/*!
* Start Bootstrap - Shop Homepage v5.0.1 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

//REQUETE API
fetch("http://localhost:3000/api/cameras")
    .then(function(res){
        if (res.ok){
            return res.json();
        }
    })
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){

    });

// INTEGRATION HTML

document.getElementById("container");

