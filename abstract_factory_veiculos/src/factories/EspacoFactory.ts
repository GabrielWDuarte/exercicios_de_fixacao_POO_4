import { Nave } from "../vehicles/Nave";
import { Explorador } from "../vehicles/Explorador";
import { Plasma } from "../vehicles/Propulsao";
import { Manual } from "../vehicles/SistemaControle";

export class EspacoFactory {
  criarNave(): Nave {
    return new Nave(new Plasma(), new Manual());
  }

  criarExplorador(): Explorador {
    return new Explorador(new Plasma(), new Manual());
  }
}
