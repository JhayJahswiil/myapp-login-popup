// DOM ELEMENTS
const loginBtn = document.querySelector('.login');
const popup = document.querySelector('.pop__up');
const closePopup = document.querySelector('.close-popup');
const openEye = document.querySelector('.open-eye');
const closeEye = document.querySelector('.close-eye');
const password = document.querySelector('.password-input');

// DOM IMPLEMENTATIONS
loginBtn.addEventListener('click', (e) => {
    loginBtn.style.display = 'none';
    popup.style.display = 'initial'
})

closePopup.addEventListener('click', (e) =>{
    loginBtn.style.display = 'initial';
    popup.style.display = 'none'
})

// PASSWORD VISIBILITY
closeEye.addEventListener('click', function(){
    if(password.type === 'password'){
        password.type = 'text';
        closeEye.style.display = 'none';
        openEye.style.display = 'initial';
    }
})

openEye.addEventListener('click', function(){
    if(password.type === 'text'){
        password.type = 'password';
        closeEye.style.display = 'initial';
        openEye.style.display = 'none';
    }
})