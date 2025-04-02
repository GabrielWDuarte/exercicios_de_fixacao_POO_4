import { Carrinho } from "../components/Carrinho";
import { Boneca } from "../components/Boneca";

export class MadeiraFactory {
  criarCarrinho(): Carrinho {
    return new Carrinho();
  }

  criarBoneca(): Boneca {
    return new Boneca();
  }
}
