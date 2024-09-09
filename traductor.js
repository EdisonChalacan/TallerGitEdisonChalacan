function numeroALetras(num) {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const especiales = ["once", "doce", "trece", "catorce", "quince"];
    const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    if (num === 0) {
        return "cero";
    } else if (num < 10) {
        return unidades[num];
    } else if (num >= 11 && num <= 15) {
        return especiales[num - 11];
    } else if (num < 100) {
        return decenas[Math.floor(num / 10)] + (num % 10 !== 0 ? " y " + unidades[num % 10] : "");
    } else if (num < 1000) {
        return centenas[Math.floor(num / 100)] + (num % 100 !== 0 ? " " + numeroALetras(num % 100) : "");
    } else if (num < 1000000) {
        if (Math.floor(num / 1000) === 1) {
            return "mil" + (num % 1000 !== 0 ? " " + numeroALetras(num % 1000) : "");
        } else {
            return numeroALetras(Math.floor(num / 1000)) + " mil" + (num % 1000 !== 0 ? " " + numeroALetras(num % 1000) : "");
        }
    }
}

function numeroAIngles(num) {
    const unidades = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const decenas = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const especiales = ["eleven", "twelve", "thirteen", "fourteen", "fifteen"];
    const centenas = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

    if (num === 0) {
        return "zero";
    } else if (num < 10) {
        return unidades[num];
    } else if (num >= 11 && num <= 15) {
        return especiales[num - 11];
    } else if (num < 100) {
        return decenas[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + unidades[num % 10] : "");
    } else if (num < 1000) {
        return centenas[Math.floor(num / 100)] + (num % 100 !== 0 ? " " + numeroAIngles(num % 100) : "");
    } else if (num < 1000000) {
        if (Math.floor(num / 1000) === 1) {
            return "one thousand" + (num % 1000 !== 0 ? " " + numeroAIngles(num % 1000) : "");
        } else {
            return numeroAIngles(Math.floor(num / 1000)) + " thousand" + (num % 1000 !== 0 ? " " + numeroAIngles(num % 1000) : "");
        }
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
