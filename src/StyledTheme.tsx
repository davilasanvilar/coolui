import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';


const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1700px',
  desktopL: '1950px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};


export const StyledTheme = ({ children }: { children: ReactNode }) => {

  const bgColor = '#fefefe'
  const mainColor = '#0071bc'
  const secondColor = '#94BFBE'
  const highlightColor = '#E1A600'
  const mainColorLowOp = '#0071bc5c'
  const modalBackground = '#3fb1fc21'
  const lightFont = '#fefefe'
  const darkFont = '#040126'
  const lightBackground = '#deedff'
  const button = '#0F9EFB'
  const buttonHover = '#005790'
  const inactive = '#bbe2ff'
  

  const color = { bgColor, mainColor, secondColor, highlightColor, modalBackground,
    mainColorLowOp, lightFont, darkFont, lightBackground, button, buttonHover, inactive
   }

  const regularText = '1.1rem'
  const highText = '1.2rem'
  const buttonLabel = '1.3rem'
  const h1 = '1.8rem'
  const h2 = '1.6rem'

  const fontSize = { regularText, h1, buttonLabel, highText, h2}

  const value: DefaultTheme = {
    color,
    fontSize
  }

  

  return (
    <ThemeProvider theme={value} >
      {children}
    </ThemeProvider>
  )
}
