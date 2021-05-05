// Obter a diferença de anos
export function obterDiferencaYear(year) {
    return new Date().getFullYear() - year; // Ano atual menos o escolhido no formulário
}

// Calcula o total segundo a marca 
export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case 'europeu':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

// Calcula o tipo de seguro
export function obterPlano(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Mostrar a primeira letra maiscula
export function primeiraMaiscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1); // .charAt() escolhe o caracter / .toUpperCase() aumenta o tamanho / slice() corta a palavra de um ponto
}