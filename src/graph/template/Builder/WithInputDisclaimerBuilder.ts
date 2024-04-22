import CustomTitle from "../provider/CustomComponent/CustomTitle";
import CustomPrimaryButton from "../provider/CustomComponent/CustomPrimaryButton";
import CustomInput from "../provider/CustomComponent/CustomInput";
import { Position } from 'graph-navigation-js'

export interface WithInputDisclaimerBuilderInput {
  titleLabel: (context: any) => string;
  buttonLabel: (context: any) => string;
  buttonAction: (context: any) => any;
}

export const WithInputDisclaimerBuilder = function (input: WithInputDisclaimerBuilderInput) {

  function setupTitle(context: any) {
    context.stepProxy.addComponent(CustomTitle(input.titleLabel(context), Position.TOP));
  }

  function setupFirstButon(context: any) {
    context.stepProxy.addComponent(CustomPrimaryButton(input.buttonLabel(context), input.buttonAction(context)));
  }

  function setupInput(context: any) {
    context.stepProxy.addComponent(CustomInput());
  }

  async function execute(context: any) {
    setupTitle(context);
    setupFirstButon(context);
    setupInput(context);
  }

  return {execute};
};
