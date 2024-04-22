import { TextInput, Spacing, Position } from 'graph-navigation-js'
import { BackGround } from '../../../../domain/style/ColorPalette';

export default function CustomInput() {
    const inputComponent = new TextInput();
    const spacing = new Spacing();
    spacing.bottom = 5;
    spacing.right = 5;
    spacing.left = 5;
    spacing.top = 5;
    inputComponent.output = 'text_one'
    inputComponent.spacing = spacing;
    inputComponent.position = Position.CENTER;
    inputComponent.backgroundColor = BackGround.WHITE;

    return inputComponent;
}
