function numeroALetras(num) {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const especiales = ["once", "doce", "trece", "catorce", "quince"];

    if (num < 10) {
        return unidades[num];
    } else if (num >= 11 && num <= 15) {
        return especiales[num - 11];
    } else if (num % 10 === 0) {
        return decenas[Math.floor(num / 10)];
    } else {
        return decenas[Math.floor(num / 10)] + " y " + unidades[num % 10];
    }
}

document.getElementById("traducirBtn").addEventListener("click", function() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = numeroALetras(numero);
    document.getElementById("resultado").textContent = resultado || "Número fuera de rango";
});
