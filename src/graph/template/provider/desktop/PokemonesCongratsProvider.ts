import { BackGround } from "../../../../domain/style/ColorPalette";
import { congratsBuilder, congratsBuilderInput } from "../../Builder/CongratsBuilder";
import { WebRedirectionEvent, DesktopViewStep, LayoutTypes } from 'graph-navigation-js'

export class PokemonesCongratsProvider {
  myInput: congratsBuilderInput = {
    titleLabel: (context: any) => {
      return "We got " + String("Abomasnow") + " from pokemones api";
    },
    buttonLabel: (context: any) => {
      return "OK"
    },
    buttonAction: (context: any): any => {
      return new WebRedirectionEvent("/home")
    }
  };

  async before (context: any) {
    const logicStepResult = context.dataProxy.getData("pokemones")
    console.log("### --> logic step result ", logicStepResult)
    console.log("### --> request del contecto en provider ", context.request.data.output.text_uno)
  }

  invoke() {
    const experimental = new DesktopViewStep('second_view_step');
    experimental.backGroundColor = BackGround.WHITE;
    experimental.organizer = LayoutTypes.THREEPART;
    experimental.beforeAction = this.before 
    experimental.builderAction = congratsBuilder(this.myInput).execute;

    return experimental;
  }
}
