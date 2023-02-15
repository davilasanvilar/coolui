// import original module declarations
import "styled-components";
import { ColorShades } from "./StyledTheme";

// and extend them!
export interface ThemeColors {
  background: ColorShades;
  main: ColorShades;
  second: ColorShades;
  danger: ColorShades;
  highlight: ColorShades;
}

interface ThemeFontSizes {
  regularText: string;
  highText: string;
  buttonLabel: string;
  h1: string;
  h2: string;
  title: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: ThemeColors;
    fontSize: ThemeFontSizes;
  }
}
