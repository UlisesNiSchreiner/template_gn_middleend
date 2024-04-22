import { ConnectionEvent, DesktopViewStep, LayoutTypes } from 'graph-navigation-js'
import { disclaimerBuilder, disclaimerBuilderInput } from "../../Builder/DisclaimerBuilder";
import { BackGround } from "../../../../domain/style/ColorPalette";

export class HomeDisclaimerProvider {
  myInput: disclaimerBuilderInput = {
    titleLabel: (context: any) => {
      return "Web Desktop version - Home page";
    },
    firstButtonLabel: (context: any) => {
      return "Continue";
    },
    secondButtonLabel: (context: any) => {
      return "Dummy disclaimer";
    },
    firstButtonAction: (context: any) => {
      return new ConnectionEvent("continue");
    },
    secondButtonAction: (context: any) => {
      return new ConnectionEvent("pokemones");
    }
  };

  async before (context: any) {
   // TODO before execute
  }

  invoke() {
    const experimental = new DesktopViewStep('first_view_step');
    experimental.backGroundColor = BackGround.WHITE;
    experimental.organizer = LayoutTypes.THREEPART;
    experimental.beforeAction = this.before 
    experimental.builderAction = disclaimerBuilder(this.myInput).execute;

    return experimental;
  }
}
