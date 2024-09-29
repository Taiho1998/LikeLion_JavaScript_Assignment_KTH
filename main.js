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
// 선택된 항목이 저장되는 배열
let selectedList = [];

for(let i = 0; i < products.length; i++)
    prodList.innerHTML += `<option onclick="addList()" class="product" value="${i}">${products[i].name} - ${products[i].price}</option>`
let item = document.getElementsByClassName('product')

// ctrl이나 shift 없이 다중 선택이 가능하게 하기 위한 이벤트
prodList.addEventListener('mousedown', function(e){
    e.preventDefault();
    let option = e.target;
    option.selected = !option.selected;
})


//selectedList에 선택된 항목을 넣기
function addList() {
    //중복 입력을 방지하기 위해 매번 초기화 시킨 후 selected 여부에 따라 item을 추가
    selectedList = [];
    for (let i = 0; i < products.length; i++){
        if (item[i].selected == true) {
            selectedList.push(item[i].value)
        }
    }
    console.log(selectedList)
    printList(selectedList)
}

function printList(selectedList){
    
}