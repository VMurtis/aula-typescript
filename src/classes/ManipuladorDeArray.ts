class ManipuladorDeArray<T> {
    private array: T[];
  
    constructor(array: T[]) {
      this.array = array;
    }
  
    inverterArray(): T[] {
      return [...this.array].reverse(); 
    }
  
    obterArray(): T[] {
      return this.array;
    }
  }