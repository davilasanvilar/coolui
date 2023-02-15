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
    fullWidth?: boolean;
    height: number //UNIT: px
}

interface AllProps extends SizeProps {
    style?: ButtonStyleEnum
    disabled?: boolean;
    color?: keyof ThemeColors;
}

const CoolStyledButton = styled(ButtonBase) <AllProps>`
    padding: 12px 16px;
    font-size: 1rem;
    height: 12px;
    border-radius: 12px;
    width: ${props => props.fullWidth ? '100%' : `${props.width}px`};
    min-width: ${props => `${props.width}px`};
    min-height: ${props => `${props.height}px`};
    background-color: ${props => props.disabled ?
        props.theme.color[props.color ? props.color : 'main'].l5
        :
        (
            props.style === ButtonStyleEnum.FILLED ?
                props.theme.color[props.color ? props.color : 'main'].l3 :
                'transparent')};
    outline:none;
    color: ${props => props.style === ButtonStyleEnum.FILLED ? props.theme.color.main.l7 : props.theme.color[props.color ? props.color : 'main'].l3};
    border: ${props => props.style === ButtonStyleEnum.OUTLINED ? `2px solid ${props.theme.color[props.color ? props.color : 'main'].l3}}` : '2px solid transparent'};
    transition: background .2s;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    @media ${device.desktopL} { 
        width: ${props => `${1.2 * props.width}px`};
        height: ${props => `${1.2 * props.height}px`};
    }

    & svg {
        font-size: 1.2rem;
        box-sizing: border-box;
    }
    & div {
        overflow: hidden;

        width: 80%;
    }
    transition: background .2s;
    
    &:hover {
        transition: background .2s;
        border-color: ${props => props.disabled ? undefined : (props.style === ButtonStyleEnum.OUTLINED ? props.theme.color[props.color ? props.color : 'main'].d1 : undefined)} !important ;
        color: ${props => props.disabled ? undefined : (props.style === ButtonStyleEnum.OUTLINED ? props.theme.color[props.color ? props.color : 'main'].d1 : undefined)} !important;
        background: ${props => props.disabled ?
        undefined
        :
        (
            props.style === ButtonStyleEnum.FILLED ?
                props.theme.color[props.color ? props.color : 'main'].d1
                :
                props.theme.color.main.lowOp)};
    }

    &:active {
        outline:none;
        border: 2px solid ${props => props.disabled ? (props.style === ButtonStyleEnum.OUTLINED ? undefined : 'transparent') : props.theme.color.highlight.n} !important;
    }
`;

const getSize = (size?: SizeEnum): SizeProps => {
    switch (size) {
        case SizeEnum.L:
            return { width: 250, height: 50 }
        case SizeEnum.M:
            return { width: 200, height: 50 }
        case SizeEnum.S:
            return { width: 150, height: 50 }
        case SizeEnum.XS:
            return { width: 100, height: 50 }
        default:
            return { width: 200, height: 50 }
    }
}



export function CoolButton({ onClick, children, className, iconType, size, style = ButtonStyleEnum.FILLED, disabled = false, color, fullWidth }: {
    onClick?: MouseEventHandler<HTMLButtonElement>, children?: string | JSX.Element | JSX.Element[], className?: string, iconType?: IconTypeEnum,
    size?: SizeEnum, style?: ButtonStyleEnum, disabled?: boolean, color?: keyof ThemeColors, fullWidth?:boolean
}) {

    const sizeInfo = getSize(size)

    return (
        <CoolStyledButton disabled={disabled} className={className} height={sizeInfo.height} width={sizeInfo.width}
            onClick={onClick} style={style} color={color} fullWidth={fullWidth}>
            {iconType !== undefined ? <CoolIcon type={iconType} /> : <></>}
            {children ? <div>{children}</div> : <></>}
        </CoolStyledButton>
    )
}