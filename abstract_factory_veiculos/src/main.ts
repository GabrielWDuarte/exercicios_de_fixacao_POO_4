import { TerraFactory } from "./factories/TerraFactory";
import { EspacoFactory } from "./factories/EspacoFactory";

const terraFactory = new TerraFactory();
const carroVoador = terraFactory.criarCarroVoador();
carroVoador.detalhes(); // Detalhes do Carro Voador

const espacoFactory = new EspacoFactory();
const nave = espacoFactory.criarNave();
nave.detalhes(); // Detalhes da Nave
