interface Multiplicacao {
  (numero1: number, numero2: number): number;
}

const multiplicar: Multiplicacao = (numero1, numero2) => {
  return numero1 * numero2;
};
