import { FogoFactory } from "./factories/FogoFactory";
import { AguaFactory } from "./factories/AguaFactory";

const fabricaFogo = new FogoFactory();
const dragao = fabricaFogo.criarDragao();
dragao.attack();  // Deve exibir "O Dragão ataca com fogo!"

const fabricaAgua = new AguaFactory();
const serpenteMarinha = fabricaAgua.criarSerpenteMarinha();
serpenteMarinha.attack();  // Deve exibir "A Serpente Marinha ataca com força subaquática!"
