import { Text, GravityValue, TextType, TextSize, Position } from 'graph-navigation-js'
import { BackGround, Black } from "../../../../domain/style/ColorPalette";

export default function CustomTitle(text: string, position: any = Position.CENTER) {
    const title = new Text();
    title.text = text;
    title.backgroundColor = BackGround.WHITE;
    title.color = Black.STRONG;
    title.truncate = false;
    title.gravity = GravityValue.CENTER;
    title.textType = TextType.BOLD;
    title.size = TextSize.MEDIUM;
    title.position = position
    return title;
}
