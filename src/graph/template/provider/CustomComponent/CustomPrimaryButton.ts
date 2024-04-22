import { Position, BlockButton, Spacing } from 'graph-navigation-js'
import { Button, BackGround } from "../../../../domain/style/ColorPalette";

export default function CustomPrimaryButton(text: string, actionEvent: any) {
    const buttonComponent = new BlockButton();
    const spacing = new Spacing();
    spacing.bottom = 5;
    spacing.right = 5;
    spacing.left = 5;
    spacing.top = 5;
    buttonComponent.spacing = spacing;
    buttonComponent.onClickEvent = actionEvent;
    buttonComponent.color = Button.MIDDLE;
    buttonComponent.hoverColor = Button.LIGHT;
    buttonComponent.position = Position.BOOTON;
    buttonComponent.text = text;
    buttonComponent.backgroundColor = BackGround.WHITE;

    return buttonComponent
}
