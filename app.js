function copiarTexto() {
    const textoResultado = document.getElementById("Decrip");
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

document.getElementById("encriptarBoton").addEventListener("click", function() {
    const texto = document.getElementById("Encrip").value.toLowerCase();
    document.getElementById("Decrip").value = encriptar(texto);
    toggleVisibility();
});

document.getElementById("desencriptarBoton").addEventListener("click", function() {
    const texto = document.getElementById("Encrip").value.toLowerCase();
    document.getElementById("Decrip").value = desencriptar(texto);
    toggleVisibility();
});

document.getElementById("copiarBoton").addEventListener("click", copiarTexto);

document.getElementById("Encrip").addEventListener("input", toggleVisibility);

function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function toggleVisibility() {
    const texto = document.getElementById("Encrip").value.trim();
    const imagen = document.getElementById("imagen muñeco");
    const mensaje = document.getElementById("mensaje");
    if (texto) {
        imagen.style.display = "none";
        mensaje.style.display = "none";
    } else {
        imagen.style.display = "block";
        mensaje.style.display = "block";
    }
}   