import { CarroVoador } from "../vehicles/CarroVoador";
import { MotoAutonoma } from "../vehicles/MotoAutonoma";
import { MotorAJato } from "../vehicles/Propulsao";
import { IA } from "../vehicles/SistemaControle";

export class TerraFactory {
  criarCarroVoador(): CarroVoador {
    return new CarroVoador(new MotorAJato(), new IA());
  }

  criarMotoAutonoma(): MotoAutonoma {
    return new MotoAutonoma(new MotorAJato(), new IA());
  }
}
