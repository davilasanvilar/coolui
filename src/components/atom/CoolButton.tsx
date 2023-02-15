import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { IconTypeEnum, SizeEnum } from '../../types/types';
import { ButtonBase } from '../bases/ButtonBase';
import { device } from '../../StyledTheme';
import { CoolIcon } from './CoolIcon';
import { ThemeColors } from '../../styled';

export enum ButtonStyleEnum {
    OUTLINED, FILLED,
}

interface SizeProps {
    width: number //UNIT: px
    height: number //UNIT: px
    fontSize: string
}

interface AllProps extends SizeProps {
    style?: ButtonStyleEnum
    isActive?: boolean;
    color?: keyof ThemeColors;
}

const CoolStyledButton = styled(ButtonBase) <AllProps>`
    padding: .5rem;
    font-size: ${props => props.fontSize};
    border-radius: 12px;
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    min-width: ${props => `${props.width}px`};
    min-height: ${props => `${props.height}px`};
    background-color: ${props => props.isActive ? (
        props.style === ButtonStyleEnum.FILLED ?
            props.theme.color[props.color ? props.color : 'main'].l3 :
            'transparent')
        :
        props.theme.color[props.color ? props.color : 'main'].l5};
    outline:none;
    color: ${props => props.style === ButtonStyleEnum.FILLED ? props.theme.color.main.l7 : props.theme.color[props.color ? props.color : 'main'].l3};
    border: ${props => props.style === ButtonStyleEnum.OUTLINED ? `1.5px solid ${props.theme.color[props.color ? props.color : 'main'].l3}}` : '1.5px solid transparent'};
    transition: background .2s;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    @media ${device.desktopL} { 
        width: ${props => `${1.2 * props.width}px`};
        height: ${props => `${1.2 * props.height}px`};
    }

    & svg {
        font-size: 1.2rem;
        width: '20%';
        margin-right: '5%';
        box-sizing: border-box;
    }
    & div {
        overflow: hidden;

        width: 80%;
    }
    transition: background .2s;
    
    &:hover {
        transition: background .2s;
        border-color: ${props => props.style === ButtonStyleEnum.OUTLINED ? props.theme.color[props.color ? props.color : 'main'].d1 : undefined} ;
        color: ${props => props.style === ButtonStyleEnum.OUTLINED ? props.theme.color[props.color ? props.color : 'main'].d1 : undefined} ;
        background: ${props => props.isActive ? (
        props.style === ButtonStyleEnum.FILLED ?
            props.theme.color[props.color ? props.color : 'main'].d1
            :
            props.theme.color.main.lowOp)
        :
        undefined};
    }

    &:active {
        outline:none;
        border: 1.5px solid ${props => props.isActive ? props.theme.color.highlight.n : 'transparent'} !important;
    }
`;

const getSize = (size?: SizeEnum): SizeProps => {
    switch (size) {
        case SizeEnum.L:
            return { width: 250, height: 50, fontSize: '1rem' }
        case SizeEnum.M:
            return { width: 200, height: 50, fontSize: '1rem' }
        case SizeEnum.S:
            return { width: 150, height: 50, fontSize: '1rem' }
        case SizeEnum.XS:
            return { width: 100, height: 50, fontSize: '1rem' }
        default:
            return { width: 200, height: 50, fontSize: '1rem' }
    }
}



export function CoolButton({ clickFun, children, className, iconType, size, style = ButtonStyleEnum.FILLED, isActive = true, color }: {
    clickFun?: MouseEventHandler<HTMLButtonElement>, children?: string | JSX.Element | JSX.Element[], className?: string, iconType?: IconTypeEnum,
    size?: SizeEnum, style?: ButtonStyleEnum, isActive?: boolean, color?: keyof ThemeColors
}) {

    const sizeInfo = getSize(size)

    return (
        <CoolStyledButton isActive={isActive} className={className} height={sizeInfo.height} width={sizeInfo.width}
            fontSize={sizeInfo.fontSize} clickFun={clickFun} style={style} color={color}>
            {iconType !== undefined ? <CoolIcon type={iconType} /> : <></>}
            {children ? <div>{children}</div> : <></>}
        </CoolStyledButton>
    )
}