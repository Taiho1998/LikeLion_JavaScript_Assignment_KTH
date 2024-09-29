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
let resultNode = document.getElementById('result')
for(let i = 0; i < products.length; i++)
    prodList.innerHTML += `<option onclick="addList()" class="product" value="${i}">${products[i].name} - ${products[i].price}</option>`
let itemNode = document.getElementsByClassName('product')
// 선택된 항목이 저장되는 배열
let selectedList;
let totalPrice;


// ctrl이나 shift 없이 다중 선택이 가능하게 하기 위한 이벤트
prodList.addEventListener('mousedown', function(e){
    e.preventDefault();
    let option = e.target;
    option.selected = !option.selected;
})

//selectedList에 선택된 항목을 넣기
function addList() {
    //중복 입력을 방지하기 위해 매번 초기화 시킨 후 selected 여부에 따라 itemNode을 추가
    selectedList = [];
    totalPrice = 0;
    for (let i = 0; i < products.length; i++){
        if (itemNode[i].selected == true) {
            selectedList.push(itemNode[i].value)
            totalPrice += products[itemNode[i].value].price

        }
    }
    console.log(totalPrice)

    // 선택한 항목이 존재하는 경우에만 발생
        printList()
}

function printList(){
    if(selectedList.length != 0) {
        resultNode.innerHTML = '<h3>선택한 상품</h3><ul id = "resultLists"></ul>'
        for (let i = 0; i < selectedList.length; i++){
            let resultLists = document.getElementById('resultLists')
            let listNode = document.createElement('li')
            let listNodeText = document.createTextNode(`${products[selectedList[i]].name} - ${products[selectedList[i]].price}`)
            listNode.appendChild(listNodeText)
            resultLists.appendChild(listNode)
        }
        resultNode.innerHTML += `<h3>총액 : ${totalPrice}</h3>`
    }else {
        resultNode.innerHTML = null
    }
}