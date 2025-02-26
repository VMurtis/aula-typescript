var mensagem = "Olá, TypeScript!";
console.log(mensagem);
//Exercício 1 - Tipagem e Arrays
//Crie um array de números e imprima a soma dos valores.
var lista = [10, 20, 30];
var soma = lista.reduce(function (somarValores, valorTotal) { return somarValores + valorTotal; }, 0);
console.log(soma);
//Exercício 2 - Função Tipada
//Crie uma função que recebe um nome e retorna uma mensagem personalizada.
function mensagemPersonalizada(nome) {
    return "Ol\u00E1, ".concat(nome, "! Bem-vindo ao TypeScript.");
}
console.log(mensagemPersonalizada("Vinicius"));
//Exercício 3 - Classe e Instância
//Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.detalhes = function () {
        return "".concat(this.marca, " ").concat(this.modelo, ", Ano: ").concat(this.ano);
    };
    return Carro;
}());
var carro1 = new Carro("Uno", "Fiat", 2007);
console.log(carro1.detalhes());
var resultadoMultiolicacao = function (a, b) {
    return a * b;
};
console.log(resultadoMultiolicacao(2, 5));
function inverterArray(array) {
    return array.reverse();
}
var listaNumeros = [1, 2, 3, 4, 5];
var numerosInvertidos = inverterArray(listaNumeros);
console.log(numerosInvertidos);
