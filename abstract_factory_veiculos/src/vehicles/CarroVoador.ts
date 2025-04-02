import { Propulsao } from "../vehicles/Propulsao";
import { SistemaControle } from "../vehicles/SistemaControle";

export class CarroVoador {
  private propulsao: Propulsao;
  private sistemaControle: SistemaControle;

  constructor(propulsao: Propulsao, sistemaControle: SistemaControle) {
    this.propulsao = propulsao;
    this.sistemaControle = sistemaControle;
  }

  detalhes(): void {
    console.log("Carro Voador:");
    console.log(`  Propulsão: ${this.propulsao.getTipo()}`);
    console.log(`  Sistema de Controle: ${this.sistemaControle.getTipo()}`);
  }
}
