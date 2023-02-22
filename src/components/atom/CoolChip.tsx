import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { SizeEnum } from '../../types/types';
import { ButtonBase } from '../bases/ButtonBase';
import { device } from '../../StyledTheme';
import { CoolIcon, IconTypeEnum } from './CoolIcon';
import { ThemeColors } from '../../styled';

export enum ButtonStyleEnum {
    OUTLINED, FILLED,
}

interface AllProps {
    style?: ButtonStyleEnum
    disabled?: boolean;
    color?: keyof ThemeColors;
}

const CoolStyledButton = styled(ButtonBase) <AllProps>`
    padding: 10px 20px;
    font-size: ${props => props.theme.fontSize.buttonText};
    min-height: 40px;
    height: 40px;
    width: fit-content;
    flex-shrink: 0;
    box-sizing: border-box;
    cursor: ${props => props.onClick ? 'pointer' : 'default'};
    border-radius: 50px;
    background-color: ${props => props.disabled ?
        props.theme.color[props.color ? props.color : 'main'].l5
        :
        (
            props.style === ButtonStyleEnum.FILLED ?
                props.theme.color[props.color ? props.color : 'main'].l3 :
                'transparent')};
    outline:none;
    color: ${props => props.style === ButtonStyleEnum.FILLED ?
        props.theme.color.main.l7 : props.theme.color[props.color ? props.color : 'main'].l2};
    border: ${props => props.style === ButtonStyleEnum.OUTLINED ? `2px solid ${props.theme.color[props.color ? props.color : 'main'].l3}}` : '2px solid transparent'};
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    & svg {
        font-size: 1.2rem;
    }
    transition: background .2s;
    
    &:hover {
        transition: background .2s;
        border-color: ${props => props.onClick ?
        props.disabled ? undefined : (props.style === ButtonStyleEnum.OUTLINED ? props.theme.color[props.color ? props.color : 'main'].d1 : undefined) : undefined} !important ;
        color: ${props => props.onClick ?
        props.disabled ? undefined : (props.style === ButtonStyleEnum.OUTLINED ? props.theme.color[props.color ? props.color : 'main'].d1 : undefined) : undefined} !important;
        background: ${props => props.onClick ?
        props.disabled ?
            undefined
            :
            (
                props.style === ButtonStyleEnum.FILLED ?
                    props.theme.color[props.color ? props.color : 'main'].d1
                    :
                    undefined) : undefined};
    }
    &:enabled:active {
        outline:none;
        transform: ${props => props.onClick ? 'scale(0.95)' : undefined }
    }
`;

export function CoolChip({ onClick, children, className, iconType, style = ButtonStyleEnum.FILLED, disabled = false, color }: {
    onClick?: MouseEventHandler<HTMLButtonElement>, children?: string | JSX.Element | JSX.Element[] | null, className?: string, iconType?: IconTypeEnum,
    style?: ButtonStyleEnum, disabled?: boolean, color?: keyof ThemeColors
}) {

    return (
        <CoolStyledButton disabled={disabled} className={className} onClick={onClick} style={style} color={color}>
            {iconType !== undefined ? <CoolIcon type={iconType} /> : <></>}
            <>
                {children}
            </>
        </CoolStyledButton>
    )
}