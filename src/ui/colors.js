import { TinyColor } from '@ctrl/tinycolor';

const defaultColor = '#595959';
const primary = '#0a3d62';
const secondary = defaultColor;
const success = '#78e08f';
const info = '#60a3bc';
const warning = '#fa983a';
const danger = '#eb2f06';

const generateColor = (color) => ({
  extraLight: new TinyColor(color).setAlpha(0.2),
  lighter: new TinyColor(color).lighten(20),
  light: new TinyColor(color).lighten(),
  base: color,
  dark: new TinyColor(color).darken(),
  darker: new TinyColor(color).darken(20),
});

export default {
  white: generateColor('white'),
  black: generateColor('black'),
  default: generateColor(defaultColor),
  primary: generateColor(primary),
  secondary: generateColor(secondary),
  success: generateColor(success),
  info: generateColor(info),
  warning: generateColor(warning),
  danger: generateColor(danger),
};
