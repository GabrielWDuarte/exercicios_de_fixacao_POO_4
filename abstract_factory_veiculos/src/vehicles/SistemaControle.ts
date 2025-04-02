export abstract class SistemaControle {
    abstract getTipo(): string;
  }
  
  export class IA extends SistemaControle {
    getTipo(): string {
      return "Inteligência Artificial";
    }
  }
  
  export class Manual extends SistemaControle {
    getTipo(): string {
      return "Controle Manual";
    }
  }
  