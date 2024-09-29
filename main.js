"use strict";

function Product(name, price){
    this.name = name;
    this.price = price;
}
let products = [
    new Product('대뱃살', 3000),
    new Product('목살', 5000),
    new Product('배꼽살', 4000),
    new Product('중뱃살', 1000)
]

let prodList = document.getElementById('prodList')
prodList.addEventListener('mousedown', function(e){
    e.preventDefault();
    let option = e.target
    if (option.selected){
        option.selected = false;
    }else {
        option.selected = true;
    }

    console.log(option.selected, option)
})