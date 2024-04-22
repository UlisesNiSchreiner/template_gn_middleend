import { BackGround } from "../../../../domain/style/ColorPalette";
import { congratsBuilder, congratsBuilderInput } from "../../Builder/CongratsBuilder";
import { WebRedirectionEvent, DesktopViewStep, LayoutTypes } from 'graph-navigation-js'

export class DummyCongratsRightProvider {
  myInput: congratsBuilderInput = {
    titleLabel: (context: any) => {
      return "Dummy congrats RIGHT";
    },
    buttonLabel: (context: any) => {
      return "Go home"
    },
    buttonAction: (context: any): any => {
      return new WebRedirectionEvent("/home")
    }
  };

  invoke() {
    const experimental = new DesktopViewStep('dummy_congrats_right_view_step');
    experimental.backGroundColor = BackGround.WHITE;
    experimental.organizer = LayoutTypes.THREEPART; 
    experimental.builderAction = congratsBuilder(this.myInput).execute;

    return experimental;
  }
}
