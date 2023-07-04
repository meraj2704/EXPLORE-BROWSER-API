const showAlert = () =>{
    const num = Math.random()*10;
    console.log(num);
    if(num<5)
    {
        alert('ki khobor bondu');
    }
}
const getConfirmation =() =>{
    const decistion = confirm('Are you coming?')
    console.log(decistion);
    if(decistion === true)
    {
        alert('500 taka bkash kor');
    }
    else{
        alert('vai tui ke');
    }
}
const getInfo = () =>{
    const name = prompt('Enter your name?');
    console.log(name);
}