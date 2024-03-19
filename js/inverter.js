let texto = document.querySelector(".texto");
let botao = document.querySelector('.texto-vai');
let aparecer = document.querySelector('h2')

botao.addEventListener('click', reversao);

function reversao() {
    let textoOriginal = texto.value;
    let textoInvertido = '';
    for (let i = textoOriginal.length - 1; i >= 0; i--) {
        textoInvertido += textoOriginal[i];
    }
    aparecer.innerHTML = textoInvertido;
}
