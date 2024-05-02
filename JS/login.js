const $submit = document.getElementById('submit')
const $password = document.getElementById('password')
const $username = document.getElementById('username')
const $visible = document.getElementById('visible')

document.addEventListener('change', e => {
    if (e.target === $visible) {
        if ($visible.checked === false) $password.type = 'password'
        else $password.type = 'text'
    }
})
document.addEventListener('submit', e => {
    e.preventDefault()
    const username = $username.value
    const password = $password.value
    if (username === 'admin' && password === 'admin') {
        window.location.href = '/inicio.html'
    } else {
        alert('Invalid username or password')
    }
})  // login.js file 