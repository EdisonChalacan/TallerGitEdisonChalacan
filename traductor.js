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

function numeroAIngles(num) {
    const unidades = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const decenas = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const especiales = ["eleven", "twelve", "thirteen", "fourteen", "fifteen"];

    if (num < 10) {
        return unidades[num];
    } else if (num >= 11 && num <= 15) {
        return especiales[num - 11];
    } else if (num % 10 === 0) {
        return decenas[Math.floor(num / 10)];
    } else {
        return decenas[Math.floor(num / 10)] + " " + unidades[num % 10];
    }
}

document.getElementById("traducirBtn").addEventListener("click", function() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = numeroALetras(numero);
    document.getElementById("resultado").textContent = resultado || "Número fuera de rango";
});

document.getElementById("traducirInglesBtn").addEventListener("click", function() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoIngles = numeroAIngles(numero);
    document.getElementById("resultadoIngles").textContent = resultadoIngles || "Number out of range";
});
