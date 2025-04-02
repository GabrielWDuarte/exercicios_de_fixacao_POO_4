import { Dragao } from "../creatures/Dragao";
import { Salamandra } from "../creatures/Salamandra";

export class FogoFactory {
  criarDragao(): Dragao {
    return new Dragao();
  }

  criarSalamandra(): Salamandra {
    return new Salamandra();
  }
}
