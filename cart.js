
const addProduct = () =>{
    const Product = get('product-name');
    const quantity = get('product-quantity');
    // localStorage.setItem(Product,quantity);
    saveItemLocalStorage(Product,quantity);
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
const getshopingCartLocalStorage = () =>{
    let saceCart = localStorage.getItem('cart');
    let cart = {};
    if(saceCart){
        cart = JSON.parse(saceCart);
    }
    return cart;
}
const saveItemLocalStorage = (product,quantity)=>{
    const cart = getshopingCartLocalStorage();
    cart[product] = quantity;
    const cartstringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartstringify);
}
const displayStoreProduct =()=>{
    const cart = getshopingCartLocalStorage();
    for(const product in cart)
    {
        const quantity = cart[product];
        console.log(cart,product);
        display(product,quantity);
    }
}
displayStoreProduct;