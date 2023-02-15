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

export interface ColorShades {
  d7?: string;
  d6?: string;
  d5?: string;
  d4?: string;
  d3?: string;
  d2?: string;
  d1?: string;
  n?: string;
  l1?: string;
  l2?: string;
  l3?: string;
  l4?: string;
  l5?: string;
  l6?: string;
  l7?: string;
  lowOp?: string;
}


export const StyledTheme = ({ children }: { children: ReactNode }) => {


  const background: ColorShades = {
    l5: '',
    l4: '',
    l3: '',
    l2: '',
    l1: '#EDF3F3',
    n: '#EBF1F1',
    d1: '#D3D3D3',
    d2: '',
    d3: '',
    d4: '',
    d5: '',

  }

  const main: ColorShades = {
    l7: '#E6EBF7',
    l6: '#CED8EF',
    l5: '#B7C5E7',
    l4: '#7A92D0',
    l3: '#6783C8',
    l2: '#5674C0',
    l1: '#4666B8',
    n: '#3658b0',
    d1: '#31509E',
    d2: '#2C478D',
    d3: '#263E7B',
    d4: '',
    d5: '',
    d6: '',
    d7: '#0B1223',
  }

  const second: ColorShades = {
    l5: '#CED8EF',
    l4: '',
    l3: '#6783C8',
    l2: '#5674C0',
    l1: '#4666B8',
    n: '#387B95',
    d1: '',
    d2: '',
    d3: '',
    d4: '',
    d5: '',
  }

  const danger: ColorShades = {
    l5: '#E38E8E',
    l4: '#DD7A7A',
    l3: '#D86666',
    l2: '#D25454',
    l1: '#CD4242',
    n: '#C83232',
    d1: '#B32D2D',
    d2: '#9F2828',
    d3: '#8B2323',
    d4: '#771E1E',
    d5: '#631919',
  }

  const highlight: ColorShades = {
    l5: '#E38E8E',
    l4: '#DD7A7A',
    l3: '#D86666',
    l2: '#D25454',
    l1: '#CD4242',
    n: '#C83232',
    d1: '#B32D2D',
    d2: '#9F2828',
    d3: '#8B2323',
    d4: '#771E1E',
    d5: '#631919',
  }


  const color = {
    background, main, second, highlight, danger
  }

  const regularText = '.9rem'
  const highText = '1rem'
  const title = '1.4rem'
  const buttonLabel = '1.3rem'
  const h1 = '1.8rem'
  const h2 = '1.2rem'

  const fontSize = { regularText, h1, buttonLabel, highText, h2, title }

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
