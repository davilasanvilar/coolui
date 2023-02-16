import React, { MouseEventHandler, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IconTypeEnum, SizeEnum } from '../../types/types';
import { device } from '../../StyledTheme';
import { ButtonBase } from '../bases/ButtonBase';
import { CoolIcon } from './CoolIcon';
import { ThemeColors } from '../../styled';


interface CoolStyledSnackbarProps {
}

const showSnackAnimation = keyframes`
  0%   {top:110%;}
  10%   {top:85%}
  80%   {top:85%}

  90%   {top:110%}

`
// const CoolStyledSnackbar = styled.div<CoolStyledSnackbarProps>`
// position: absolute;
//     background-color: ${props => props.theme.color.lightBackground};
//     display: flex;
//     align-items: center;
//     gap: 5%;
//     padding: 1vh 2%;
//     width: 25%;
//     height: 10vh;
//     top:110%;
//     z-index: 6;
//     left: 3%;
//     &.fadeIn {
//         animation: ${showSnackAnimation} 2s;
//         animation-timing-function: ease-in-out;
//     }

//     & svg {
//         font-size: 1.5rem;
//         color: ${props => props.color ? props.theme.color[props.color as keyof ThemeColors] : undefined};
//     }

// `;




// export function CoolSnackbar() {

//     const [snackProps, setSnackProps] = useRecoilState<SnackAtomProps>(snackAtom)

//     const [isVisible, setIsVisible] = useState<boolean>(false)



//     useEffect(() => {
//         if (snackProps.visible) {
//             setTimeout(() => {
//                 setSnackProps({ visible: false })
//             }, 2000);
//         }
//     }, [snackProps.visible])


//     return (
//         snackProps.visible ?
//             <CoolStyledSnackbar color={snackProps.color} className={snackProps.visible ? 'fadeIn ' : ''}>
//                 {snackProps.icon ?
//                     <CoolIcon type={snackProps.icon} />
//                     :
//                     undefined
//                 }
//                 <p>{snackProps.text}</p>
//             </CoolStyledSnackbar>
//             :
//             <></>
//     )
// }