const realizarOperacion = (num1, num2, num3, operacion) => {
    switch (operacion) {
        case "suma":
            return num1 + num2 + num3;
        case "resta":
            return num1 - num2 - num3;
        case "multiplicacion":
            return num1 * (num2 || 1) * (num3 || 1);
        case "division":
            if (num2 === 0 || num3 === 0) {
                return "No es posible realizar una división por cero";
            }
            return num1 / (num2 || 1) / (num3 || 1);
        case "raiz":
            return `La raíz cuadrada de ${num1} es: ${Math.sqrt(num1).toFixed(2)}`;
        case "potencia2":
            return `La potencia de base 2 de ${num1} es: ${num1 ** 2}`;
        case "potencia3":
            return `La potencia de base 3 de ${num1} es: ${num1 ** 3}`;
        default:
            return "Esta operación no es válida";
    }
};

let num1, num2, num3, operacion;
let pregunta;

console.log("Bienvenido a la Calculadora de Edwin Rivera");

while (operacion !== "salir") {
    num1 = parseFloat(prompt("\nIngrese el primer número: "));
    num2 = parseFloat(prompt("Ingrese el segundo número (opcional, deje vacío si no aplica): ")) || 0;
    num3 = parseFloat(prompt("Ingrese el tercer número (opcional, deje vacío si no aplica): ")) || 0;

    operacion = prompt(
        "Ingrese la operación que desea realizar (suma, resta, multiplicacion, division, raiz, potencia2, potencia3): "
    ).toLowerCase();

    console.log("El resultado es:");
    console.log(realizarOperacion(num1, num2, num3, operacion));

    pregunta = prompt("\n¿Desea realizar otra operación? (si/no): ").toLowerCase();

    if (pregunta === "si") {
        continue;
    } else {
        console.log("Gracias por usar la Calculadora de Edwin Rivera. ¡Adiós!");
        break;
    }
}

