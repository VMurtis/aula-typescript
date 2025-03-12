import { Carro, testeCarro } from "./interface/Carro";
import { Multiplicacao } from "./interface/Multiplicacao";
import { ManipuladorDeArray } from "./classes/ManipuladorDeArray";
console.log(testeCarro);

console.log(multiplicar(7, 2));

const manipuladorDeNumeros = new ManipuladorDeArray([1, 2, 3, 4, 5]);
console.log(manipuladorDeNumeros.inverterArray());


const repositorio = new RepositorioUsuario();

repositorio.salvar({ nome: "Vinicius", email: "rm551151@fiap.com.br" });

const usuarios = repositorio.obterTodos();

console.log(usuarios);

