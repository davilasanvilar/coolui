// import original module declarations
import "styled-components";

// and extend them!
interface ThemeColors {
  bgColor: string;
  mainColor: string;
  secondColor: string;
  highlightColor: string;
  mainColorLowOp: string;
  modalBackground: string;
  lightBackground: string;
  lightFont: string;
  darkFont: string;
  button: string;
  buttonHover: string;
  inactive:string;
}

interface ThemeFontSizes {
  regularText: string;
  highText: string;
  buttonLabel: string;
  h1: string;
  h2: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: ThemeColors;
    fontSize: ThemeFontSizes;
  }
}
