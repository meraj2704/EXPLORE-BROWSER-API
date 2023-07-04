const addProduct = () =>{
    const Product = get('product-name');
    const quantity = get('product-quantity');
    localStorage.setItem(Product,quantity);
    display(Product,quantity);
}
const get = id =>{
    const inputFiled = document.getElementById(id);
    const inputValue = inputFiled.value;
    inputFiled.value = '';
    return inputValue;
}
const display =(Product,quantity) =>{
    const displayContainer = document.getElementById('display-container');
    const li = document.createElement('li');
    li.innerText = `${Product} : ${quantity}`;
    displayContainer.appendChild(li);
}