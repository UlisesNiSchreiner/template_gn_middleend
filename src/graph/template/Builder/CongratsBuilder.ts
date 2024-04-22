import CustomTitle from "../provider/CustomComponent/CustomTitle";
import CustomPrimaryButton from "../provider/CustomComponent/CustomPrimaryButton";

export interface congratsBuilderInput {
  titleLabel: (context: any) => string;
  buttonLabel: (context: any) => string;
  buttonAction: (context: any) => any;
}

export const congratsBuilder = function (input: congratsBuilderInput) {
  function setupTitle(context: any) {
    context.stepProxy.addComponent(CustomTitle(input.titleLabel(context)));
  }

  function setupButon(context: any) {
    context.stepProxy.addComponent(CustomPrimaryButton(input.buttonLabel(context), input.buttonAction(context)));
  }

  async function execute(context: any) {
    setupTitle(context);
    setupButon(context);
  }

  return {
    execute,
  };
};
