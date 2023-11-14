export interface GeneralStyleProps {
  display?: string;
  flex?: number;
  alignItems?: string;
  justifyContent?: string;
  width?: number | string;
  height?: number | string;
  padding?: number;
  backgroundColor?: string;
  backgroundColorHover?: string;
  alignSelf?: string;
  justifySelf?: string;
  textAlign?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  letterSpacing?: number;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  borderRadius?: number;
  bold?: boolean;
  borderLeftWidth?: string;
  borderLeftColor?: string;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  opacity?: number;
  position?: string;
  flexDirection?: string;
  lineHeight?: number;
  minWidth?: string | number;
  maxWidth?: string | number;
  borderBottom?: string | number;
  noBorderBottom?: boolean;
  noBorderTop?: boolean;
  disabled?: boolean;
  cursor?: string;
  fitContent?: boolean;
}

export type ColorsProps = {
  white: string;
  black: string;

  grayLight: string;
  gray: string;
  graySemiMedium: string;
  grayMedium: string;
  grayDark: string;
  graySemiDarker: string;
  grayDarker: string;
  grayAlternative: string;

  primaryDefault: string;
  secondaryDefault: string;

  redLight: string;
  red: string;
  redDark: string;

  blueLight: string;
  blue: string;

  greenLight: string;
  green: string;
  [key:string]: string;
};
