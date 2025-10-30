/*** Converted CommonJS module with 10 functions and optional interactive mode ***/
let prompt;
try {
  prompt = require('prompt-sync')({ sigint: true });
} catch (e) {
  // If prompt-sync isn't available (e.g. some test environments), provide a
  // non-interactive stub that returns a sensible default string.
  prompt = () => '5';
}

function getNumberInput(message) {
  while (true) {
    const input = prompt(message);
    const number = Number(input);
    if (!isNaN(number)) return number;
    console.log('Please enter a valid number!');
  }
}

function somar(num1, num2) {
  if (arguments.length === 0) {
    num1 = getNumberInput('Enter first number: ');
    num2 = getNumberInput('Enter second number: ');
  }
  return num1 + num2;
}

function multiplicar(num3, num4) {
  if (arguments.length === 0) {
    num3 = getNumberInput('Enter first number: ');
    num4 = getNumberInput('Enter second number: ');
  }
  return num3 * num4;
}

function subtrair(num5, num6) {
  if (arguments.length === 0) {
    num5 = getNumberInput('Enter first number: ');
    num6 = getNumberInput('Enter second number: ');
  }
  return num5 - num6;
}

function dividir(num7, num8) {
  // If divisor is zero, throw an error to match test expectations
  if (num8 === 0) throw new Error('Erro: divisão por zero');
  return num7 / num8;
}

function calcularMedia(nota1, nota2, nota3, nota4) {
  return (nota1 + nota2 + nota3 + nota4) / 4;
}

function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

function calcularAreaRetangulo(altura, largura) {
  return altura * largura;
}

function verificarParOuImpar(Num) {
  // Return a human-readable string as requested: 'par' or 'ímpar'
  return (Num % 2 === 0) ? 'par' : 'ímpar';
}

function calcularRaizQuadrada(Numb) {
  return Math.sqrt(Numb);
}

function calcularHipotenusa(NUM1, NUM2) {
  return Math.sqrt(NUM1 * NUM1 + NUM2 * NUM2);
}

// Export all functions for tests and external usage
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};

// If this file is executed directly, run an interactive demo (won't run when required)
if (require.main === module) {
  console.log('Interactive demo: answer the prompts (or press Ctrl+C to skip)');
  const a = getNumberInput('Digite um primeiro número: ');
  const b = getNumberInput('Digite um segundo número: ');
  console.log('somar:', somar(a, b));
  console.log('multiplicar:', multiplicar(a, b));
  console.log('subtrair:', subtrair(a, b));

  const c = getNumberInput('Digite um terceiro número: ');
  const d = getNumberInput('Digite um quarto número: ');
  console.log('dividir (c/d):', dividir(c, d));

  const n1 = getNumberInput('Digite a primeira nota: ');
  const n2 = getNumberInput('Digite a segunda nota: ');
  const n3 = getNumberInput('Digite a terceira nota: ');
  const n4 = getNumberInput('Digite a quarta nota: ');
  console.log('média:', calcularMedia(n1, n2, n3, n4));

  const base = getNumberInput('Digite a base: ');
  const expo = getNumberInput('Digite o expoente: ');
  console.log('potência:', elevarPotencia(base, expo));

  const altura = getNumberInput('Digite a altura do retângulo: ');
  const largura = getNumberInput('Digite a largura do retângulo: ');
  console.log('área retângulo:', calcularAreaRetangulo(altura, largura));

  const num = getNumberInput('Digite um número para par/ímpar (retorna 0 para par, 1 para ímpar): ');
  console.log('par/ímpar (0=par,1=ímpar):', verificarParOuImpar(num));

  const nr = getNumberInput('Digite um número para raiz quadrada: ');
  console.log('raiz quadrada:', calcularRaizQuadrada(nr));

  const hip1 = getNumberInput('Digite o primeiro cateto: ');
  const hip2 = getNumberInput('Digite o segundo cateto: ');
  console.log('hipotenusa:', calcularHipotenusa(hip1, hip2));
}
/**** Escreva o código abaixo 👇******/
