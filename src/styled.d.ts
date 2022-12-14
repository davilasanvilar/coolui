// import original module declarations
import "styled-components";

// and extend them!
interface ThemeColors {
  bgColor: string;
  mainColor: string;
  secondColor: string;
  mainColorLowOp: string;
  lightBackground: string;
  lightFont: string;
  darkFont: string;
  button: string;
  buttonHover: string;
}

interface ThemeFontSizes {
  regularText: string;
  highText: string;
  buttonLabel: string;
  h1: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: ThemeColors;
    fontSize: ThemeFontSizes;
  }
}
