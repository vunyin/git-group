function getValue(event){
    event.preventdefault();
    let input = document.querySelector('#input').value;
    let h1 = document.createElement('h1');
    h1.textContent= input;
}


const btnLogin = document.querySelector('login');
btnLogin.addEventListener('click',getValue);