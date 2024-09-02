// Función para mostrar una notificación tipo toast
function mostrarToast(mensaje) {
    // Eliminar todas las notificaciones existentes
    const toasts = document.querySelectorAll('#toasts .toast');
    toasts.forEach(toast => toast.remove());

    // Crear un nuevo div para el toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = mensaje;

    // Agregar el toast al contenedor
    document.querySelector('#toasts').appendChild(toast);

    // Eliminar el toast después de un tiempo
    setTimeout(() => {
        toast.remove();
    }, 3000); // El toast se mostrará durante 3 segundos
}

// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para manejar el clic en el botón "Encriptar"
document.querySelector('.btn-crypt').addEventListener('click', function() {
    let inputText = document.querySelector('.input-section').value;
    if (validarTexto(inputText)) {
        let textoEncriptado = encriptarTexto(inputText);
        document.querySelector('#outputText').value = textoEncriptado;
        document.querySelector('.alert-container').style.display = 'none';
    } else {
        mostrarToast('Por favor, ingresa solo letras minúsculas y sin acentos.');
    }
});

// Función para manejar el clic en el botón "Desencriptar"
document.querySelector('.btn-descrypt').addEventListener('click', function() {
    let inputText = document.querySelector('.input-section').value;
    if (validarTexto(inputText)) {
        let textoDesencriptado = desencriptarTexto(inputText);
        document.querySelector('#outputText').value = textoDesencriptado;
        document.querySelector('.alert-container').style.display = 'none';
    } else {
        mostrarToast('Por favor, ingresa solo letras minúsculas y sin acentos.');
    }
});

// Función para copiar el texto encriptado o desencriptado al portapapeles
document.querySelector('.copiar').addEventListener('click', function() {
    let outputText = document.querySelector('#outputText');
    outputText.select();
    document.execCommand('copy');
});

// Función para validar que el texto solo contenga letras minúsculas sin acentos
function validarTexto(texto) {
    let regex = /^[a-z\s]+$/; // Expresión regular para letras minúsculas y espacios
    return regex.test(texto);
}
