import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';



export const StyledTheme = ({ children }: { children: ReactNode }) => {

  const bgColor = '#fefefe'
  const mainColor = '#0071bc'
  const secondColor = '#00067A'
  const mainColorLowOp = '#3fb1fc21'
  const lightFont = '#fefefe'
  const darkFont = '#040126'
  const lightBackground = '#deedff'
  const button = '#0F9EFB'
  const buttonHover = '#005790'
  

  const color = { bgColor, mainColor, secondColor, 
    mainColorLowOp,
    lightFont, darkFont, lightBackground, button, buttonHover
   }

  const regularText = '1.1rem'
  const highText = '1.2rem'
  const buttonLabel = '1.3rem'
  const h1 = '1.4rem'

  const fontSize = { regularText, h1, buttonLabel, highText }

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
