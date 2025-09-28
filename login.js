const loginForm = document.getElementById('loginForm')
const registerForm = document.getElementById('registerForm')
const showRegister = document.getElementById('showRegister')
const showLogin = document.getElementById('showLogin')
const btnLogin = document.querySelector('.btn__login')
const formRegisterWrapper = document.querySelector('.form-register')
const formLoginWrapper = document.querySelector('.form-login')

showRegister.addEventListener('click', () => {
    loginForm.classList.add('hidden')
    registerForm.classList.remove('hidden')
    formRegisterWrapper.style.display = 'flex'
    formLoginWrapper.style.display = 'none'
})

showLogin.addEventListener('click', () => {
    loginForm.classList.remove('hidden')
    registerForm.classList.add('hidden')
    formRegisterWrapper.style.display = 'none'
    formLoginWrapper.style.display = 'flex'
})

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    loginForm.reset()
    window.location.href = 'index.html'
})

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    registerForm.reset()
    window.location.href = 'index.html'
})



