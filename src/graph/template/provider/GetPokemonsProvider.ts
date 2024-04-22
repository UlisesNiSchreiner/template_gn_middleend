import { LogicStep } from 'graph-navigation-js'

import { getPokemonesInput, GetPokemones } from "../../../usecase/GetPokemones";

export class GetPokemonsProvider {
  myInput: getPokemonesInput = {
    label: (context: any) => {
      return "any dato"
    },
  };

  async before (context: any) {
   // TODO before execute
  }

  invoke() {
    const experimental = new LogicStep('get_pokemons_step');
    experimental.builderAction = GetPokemones(this.myInput).execute;

    return experimental;
  }
}
