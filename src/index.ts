let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

//Exercício 1 - Tipagem e Arrays
//Crie um array de números e imprima a soma dos valores.

const lista: number[] = [10, 20, 30];

const soma: number = lista.reduce(
  (somarValores, valorTotal) => somarValores + valorTotal,
  0
);

console.log(soma);

//Exercício 2 - Função Tipada
//Crie uma função que recebe um nome e retorna uma mensagem personalizada.

function mensagemPersonalizada(nome: string): string {
  return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Vinicius"));

//Exercício 3 - Classe e Instância
//Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.
class Carro {
  constructor(
    public marca: string,
    public modelo: string,
    public ano: number
  ) {}
  detalhes(): string {
    return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
  }
}
const carro1 = new Carro("Uno", "Fiat", 2007);
console.log(carro1.detalhes());

interface Multiplicacao {
  (n1: number, n2: number): number;
}

const resultadoMultiolicacao: Multiplicacao = (a, b) => {
  return a * b;
};

console.log(resultadoMultiolicacao(2, 5));

function inverterArray<T>(array: T[]): T[] {
  return array.reverse();
}

const listaNumeros = [1, 2, 3, 4, 5];
const numerosInvertidos = inverterArray(listaNumeros);
console.log(numerosInvertidos);
