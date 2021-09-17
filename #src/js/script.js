let addToCart = document.getElementsByClassName('addtocart__btn');
let plusToCart = document.getElementsByClassName('addtocart__plus-btn');
let minusToCart = document.getElementsByClassName('addtocart__minus-btn');
let addToFavorite = document.getElementsByClassName('products__favorite-btn');

for (let i=0; i<addToCart.length; i++) {
    addToCart[i].onclick = function() {
        addToCart[i].parentNode.classList.add("active");
    }
}

for (let i=0; i<plusToCart.length; i++) {
    plusToCart[i].onclick = function() {
        let currentValue = plusToCart[i].parentNode.querySelector('.addtocart__value').value
        plusToCart[i].parentNode.querySelector('.addtocart__value').value= + currentValue + 1;
    }
}

for (let i=0; i<minusToCart.length; i++) {
    minusToCart[i].onclick = function() {
        let currentValue = minusToCart[i].parentNode.querySelector('.addtocart__value').value
        if (+currentValue == 1) {
             minusToCart[i].parentNode.parentNode.classList.remove("active");
        } else { 
            minusToCart[i].parentNode.querySelector('.addtocart__value').value= + currentValue - 1;
            console.log(currentValue);
        }
    }
}

for (let i=0; i<addToFavorite.length; i++) {
    addToFavorite[i].onclick = function() {
        if(addToFavorite[i].parentNode.classList.contains("favorite-active")) {
            addToFavorite[i].parentNode.classList.toggle("favorite-active");
        } else {
            addToFavorite[i].parentNode.classList.toggle("favorite-active");
        }         
    }
}
