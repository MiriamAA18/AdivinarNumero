let numeroSecreto;

// Función para generar el número aleatorio
function generarNumero() {
    numeroSecreto = Math.floor(Math.random() * 101); // Número entre 0 y 100
    document.getElementById("mensaje").textContent = "Número generado. ¡Adivina!";
    console.log("Número secreto: " + numeroSecreto); // Mostrar en consola para verificar
}

// Función para verificar el número adivinado
function verificarNumero() {
    const numeroAdivinado = parseInt(document.getElementById("numeroAdivinado").value);

    // Comprobamos si el número ingresado es válido
    if (isNaN(numeroAdivinado)) {
        document.getElementById("mensaje").textContent = "Por favor ingresa un número válido.";
    } else if (numeroAdivinado < 0 || numeroAdivinado > 100) {
        document.getElementById("mensaje").textContent = "El número debe estar entre 0 y 100.";
    } else if (numeroAdivinado === numeroSecreto) {
        document.getElementById("mensaje").textContent = "¡Felicidades, adivinaste el número!";
    } else {
        if (numeroAdivinado > numeroSecreto) {
            document.getElementById("mensaje").textContent = "El número es menor. ¡Intenta de nuevo!";
        } else {
            document.getElementById("mensaje").textContent = "El número es mayor. ¡Intenta de nuevo!";
        }
    }

    // Limpiar el campo de entrada
    document.getElementById("numeroAdivinado").value = "";
}
