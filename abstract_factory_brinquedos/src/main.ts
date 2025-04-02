import { PlasticoFactory } from "./factories/PlasticoFactory";
import { MadeiraFactory } from "./factories/MadeiraFactory";

const fabricaPlastico = new PlasticoFactory();
const brinquedoPlastico = fabricaPlastico.criarCarrinho();
brinquedoPlastico.play(); // Deve exibir "Brincando com o carrinho."

const fabricaMadeira = new MadeiraFactory();
const brinquedoMadeira = fabricaMadeira.criarBoneca();
brinquedoMadeira.play(); // Deve exibir "Brincando com a boneca."
