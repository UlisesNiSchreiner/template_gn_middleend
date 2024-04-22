import { BackGround, Button } from "../../../../domain/style/ColorPalette";
import { BlockButton, Spacing, Position } from 'graph-navigation-js'

export default function CustomSecondaryButton(text: string, action: any) {
    const buttonComponent = new BlockButton();
    const spacing = new Spacing();
    spacing.bottom = 5;
    spacing.right = 5;
    spacing.left = 5;
    spacing.top = 5;
    buttonComponent.spacing = spacing;
    buttonComponent.onClickEvent = action;
    buttonComponent.color = Button.STRONG;
    buttonComponent.hoverColor = Button.LIGHT;
    buttonComponent.position = Position.BOOTON;
    buttonComponent.text = text;
    buttonComponent.backgroundColor = BackGround.WHITE;

    return buttonComponent;
}
