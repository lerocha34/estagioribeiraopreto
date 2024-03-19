let button = document.querySelector(".fibonacci-vai");
let input = document.querySelector(".fibonacci");

function fibonacci(number) {
    
    let a = 0;
    let b = 1;
    while (b < number) {
        const proximo = a + b;
        a = b;
        b = proximo;
    }

    return b === number;
}

function verificar (){
    const numero = parseInt(input.value); 
    if (!isNaN(numero)) {
        if (fibonacci(numero)) {
            console.log(`${numero} faz parte da sequência de Fibonacci.`);
        } else {
            console.log(`${numero} não faz parte da sequência de Fibonacci.`);
        }
    } else {
        console.log("Por favor, insira um número válido.");
    }
}

button.addEventListener('click', verificar);
