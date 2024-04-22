import { BackGround } from "../../../../domain/style/ColorPalette";
import { WithInputDisclaimerBuilder, WithInputDisclaimerBuilderInput } from "../../Builder/WithInputDisclaimerBuilder";
import { ConnectionEvent, DesktopViewStep, LayoutTypes } from 'graph-navigation-js'

export class DummyDisclaimerProvider {
  myInput: WithInputDisclaimerBuilderInput = {
    titleLabel: (context: any) => {
      return "This is a dummy disclaimer";
    },
    buttonLabel: (context: any) => {
      return "Continue"
    },
    buttonAction: (context: any) => {
      return new ConnectionEvent("continue")
    }
  };

  async before (context: any) {
    // TODO before execute
  }

  invoke() {
    const experimental = new DesktopViewStep('dummy_congrats_view_step');
    experimental.backGroundColor = BackGround.WHITE;
    experimental.organizer = LayoutTypes.THREEPART;
    experimental.beforeAction = this.before 
    experimental.builderAction = WithInputDisclaimerBuilder(this.myInput).execute;

    return experimental;
  }
}
