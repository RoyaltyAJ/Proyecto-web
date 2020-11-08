    var nombre = document.getElementById('NOMBRE DEL PUBLICANTE');
    var apellido = document.getElementById('APELLIDO DEL PUBLICANTE');
    var titulo = document.getElementById('TITULO');
    var carrera = document.getElementById('CARRERA');
    var links = document.getElementById('LINKS DE LA PUBLICACION');

        nombre.innerText = localStorage.getItem('nombre');
        apellido.innerText = localStorage.getItem('apellido');
        titulo.innerText = localStorage.getItem('titulo');
        carrera.innerText = localStorage.getItem('carrera');
        links.innerText = localStorage.getItem('links')

            localStorage.getItem('nombre');
            localStorage.getItem('apellido');
            localStorage.getItem('titulo');
            localStorage.getItem('carrera');
            localStorage.getItem('links');