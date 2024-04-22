import { HomeDisclaimerProvider } from './provider/desktop/HomeDisclaimerProvider';
import { PokemonesCongratsProvider } from './provider/desktop/PokemonesCongratsProvider';
import { GetPokemonsProvider } from './provider/GetPokemonsProvider';
import { DummyDisclaimerProvider } from './provider/desktop/DummyDisclaimerProvider';
import { DummyCongratsRightProvider } from './provider/desktop/DummyCongratsRightProvider';
import { DummyCongratsLeftProvider } from './provider/desktop/DummyCongratsLeftProvider';
import { Template, LogicStep } from 'graph-navigation-js'

const edgeStep = new LogicStep('first_template_start_id');

const homePage = new HomeDisclaimerProvider().invoke()
const getPokemones = new GetPokemonsProvider().invoke()
const pokemonesCongrats = new PokemonesCongratsProvider().invoke()
const dummyDisclaimer = new DummyDisclaimerProvider().invoke()
const dummyCongratsRigth = new DummyCongratsRightProvider().invoke()
const dummyCongratsLeft = new DummyCongratsLeftProvider().invoke()
const inputBifurcation = new LogicStep('input_bifurcation'); 

const template = new Template(edgeStep);

const inputCheckCondition = (context: any) => {
    return context.request.data.output.text_one == "right"
}

// logic navigation
template.nexFrom(edgeStep, homePage);
template.nexFrom(homePage, getPokemones);
template.nexFrom(getPokemones, pokemonesCongrats);
template.linkFrom(homePage, dummyDisclaimer, "pokemones", true)
template.nexFrom(dummyDisclaimer, inputBifurcation, true)
template.bifurcationFrom(inputBifurcation, dummyCongratsRigth, dummyCongratsLeft, inputCheckCondition)

export default template;
