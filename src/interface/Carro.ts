interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  motor?: string; 
}

export const testeCarro: Carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  motor: "2.0",
};