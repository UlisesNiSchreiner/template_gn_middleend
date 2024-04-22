import CustomPrimaryButton from "../provider/CustomComponent/CustomPrimaryButton";
import CustomTitle from "../provider/CustomComponent/CustomTitle";
import CustomSecondaryButton from "../provider/CustomComponent/CustomSecondaryButton";

export interface disclaimerBuilderInput {
  titleLabel: (context: any) => string;
  firstButtonLabel: (context: any) => string;
  secondButtonLabel: (context: any) => string;
  firstButtonAction: (context: any) => any;
  secondButtonAction: (context: any) => any;
}

export const disclaimerBuilder = function (input: disclaimerBuilderInput) {

  function setupTitle(context: any) {
    context.stepProxy.addComponent(CustomTitle(input.titleLabel(context)));
  }

  function setupFirstButon(context: any) {
    context.stepProxy.addComponent(CustomPrimaryButton(input.firstButtonLabel(context), input.firstButtonAction(context)));
  }

  function setupSecondButon(context: any) {
    context.stepProxy.addComponent(CustomSecondaryButton(input.secondButtonLabel(context), input.secondButtonAction(context)));
  }

  async function execute(context: any) {
    setupTitle(context);
    setupFirstButon(context);
    setupSecondButon(context)
  }

  return {execute};
};
