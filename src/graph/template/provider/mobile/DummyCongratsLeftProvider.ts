import { BackGround } from "../../../../domain/style/ColorPalette";
import { congratsBuilder, congratsBuilderInput } from "../../Builder/CongratsBuilder";
import { WebRedirectionEvent, MobileViewStep, LayoutTypes } from 'graph-navigation-js'

export class DummyCongratsLeftProvider {
  myInput: congratsBuilderInput = {
    titleLabel: (context: any) => {
      return "Dummy congrats LEFT";
    },
    buttonLabel: (context: any) => {
      return "Go home"
    },
    buttonAction: (context: any): any => {
      return new WebRedirectionEvent("/home")
    }
  };

  invoke() {
    const experimental = new MobileViewStep('dummy_congrats_left_view_step');
    experimental.backGroundColor = BackGround.WHITE;
    experimental.organizer = LayoutTypes.THREEPART; 
    experimental.builderAction = congratsBuilder(this.myInput).execute;

    return experimental;
  }
}
