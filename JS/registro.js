document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form')

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        const address = document.getElementById('address').value
        const faculty = document.getElementById('faculty').value
        const major = document.getElementById('major').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        // Aquí puedes hacer lo que quieras con los datos, como enviarlos a un servidor o mostrarlos en la consola
        console.log('Nombre:', firstName)
        console.log('Apellido:', lastName)
        console.log('Dirección:', address)
        console.log('Facultad:', faculty)
        console.log('Carrera:', major)
        console.log('Correo Electrónico:', email)
        console.log('Contraseña:', password)

        // Aquí puedes agregar código para enviar los datos a un servidor usando AJAX, Fetch, etc.
    })
})
