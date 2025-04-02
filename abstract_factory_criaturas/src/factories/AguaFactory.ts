import { SerpenteMarinha } from "../creatures/SerpenteMarinha";
import { Tritao } from "../creatures/Tritao";

export class AguaFactory {
  criarSerpenteMarinha(): SerpenteMarinha {
    return new SerpenteMarinha();
  }

  criarTritao(): Tritao {
    return new Tritao();
  }
}
