export abstract class Propulsao {
    abstract getTipo(): string;
  }
  
  export class MotorAJato extends Propulsao {
    getTipo(): string {
      return "Motor a Jato";
    }
  }
  
  export class Plasma extends Propulsao {
    getTipo(): string {
      return "Plasma";
    }
  }
  