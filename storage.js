document.getElementById('add-item-name').addEventListener('click', function(){
    const inputField = document.getElementById('input-field-name');
    const inputValue = inputField.value;
    localStorage.setItem('name', inputValue);
})
document.getElementById('add-item-age').addEventListener('click', function(){
    const inputField = document.getElementById('input-field-age');
    const inputValue = inputField.value;
    localStorage.setItem('age', inputValue);
})
document.getElementById('remove-item-name').addEventListener('click', function(){
    localStorage.removeItem('name');
})
document.getElementById('remove-item-age').addEventListener('click', function(){
    localStorage.removeItem('age');
})
document.getElementById('clear-all').addEventListener('click', function(){
    localStorage.clear();
})