import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { ButtonType, SizeEnum } from '../../types/types';
import { ButtonBase } from './ButtonBase';
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'


interface CoolStyledButtonProps {
    width: number //UNIT: px
    height: number //UNIT: px
    fontSize: string
}

const CoolStyledButton = styled(ButtonBase) <CoolStyledButtonProps>`
    padding: 5px;
    font-size: ${props => props.fontSize};
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    background: ${props => props.theme.color.button};
    color: ${props => props.theme.color.lightFont};
    border: none;
    transition: background .2s;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;

    & svg {
        font-size: 2rem;
        width: 20%;
        margin-right: 5%;
        box-sizing: border-box;
    }
    & div {
        overflow: hidden;

        width: 80%;
    }
    &:hover {
        transition: background .2s;
        background: ${props => props.theme.color.buttonHover};
    }
    
`;


export function CoolButton({ clickFun, className, type, size }: {
    clickFun: MouseEventHandler<HTMLButtonElement>, className?: string, type?: ButtonType, size?: SizeEnum
}) {

    interface ButtonProperties {
        icon: JSX.Element
        label: string
    }

    const getProperties = (): ButtonProperties => {
        switch (type) {
            case ButtonType.SAVE:
                return { icon: <></>, label: 'Guardar' }
            case ButtonType.CANCEL:
                return { icon: <MdOutlineCancel/>, label: 'Cancelar' }
            case ButtonType.DELETE:
                return { icon: <></>, label: 'Borrar' }
            case ButtonType.EDIT:
                return { icon: <></>, label: 'Editar' }
            case ButtonType.CONFIRM:
                return { icon: <BsCheck/>, label: 'Confirmar' }
            default:
                return { icon: <></>, label: 'Guardar' }
        }
    }

    const getSize = (): CoolStyledButtonProps => {
        switch (size) {
            case SizeEnum.L:
                return { width: 160, height: 70, fontSize: '1.2rem' }
            case SizeEnum.M:
                return { width: 140, height: 60, fontSize: '1.2rem' }
            case SizeEnum.S:
                return { width: 120, height: 50, fontSize: '1.2rem' }
            case SizeEnum.XS:
                return { width: 110, height: 40, fontSize: '1rem' }
            default:
                return { width: 120, height: 50, fontSize: '1.2rem' }
        }
    }



    const properties = getProperties()
    const sizeInfo = getSize()

    return (
        <CoolStyledButton height={sizeInfo.height} width={sizeInfo.width} fontSize={sizeInfo.fontSize} clickFun={clickFun}>
            {properties.icon}
            <div>{properties.label}</div>
        </CoolStyledButton>
    )
}