// Código para cargar el nombre y mostrar mensaje en la página welcome
document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("userName");
    const welcome = document.getElementById("welcome");

    if (userName) {
        welcome.textContent = `Hola, ${userName}, bienvenid@ de nuevo`;
    } else {
        welcome.textContent = "Por favor ve al index e ingresa tu nombre";
    }

    const btEliminar = document.getElementById("btEliminar");
    if (btEliminar) {
        btEliminar.addEventListener("click", function() {
            localStorage.removeItem("userName");
            alert("Se ha eliminado la información");
            welcome.textContent = "Por favor ve al index e ingresa tu nombre";
        });
    }
});

// Código para guardar el nombre desde el index.html
document.addEventListener("DOMContentLoaded", function() {
    const btGuardar = document.getElementById("btGuardar");
    if (btGuardar) {
        btGuardar.addEventListener("click", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            localStorage.setItem("userName", name);
            alert("Nombre guardado exitosamente");
        });
    }
});
