import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { SelectOption, SizeEnum } from '../../types/types';
import { SelectBase } from '../bases/SelectBase';
import { device } from '../../StyledTheme';
import { TextInputBase, TextInputTypeEnum } from '../bases/TextInputBase';


interface SizeProps {
    width: number //UNIT: px
    height: number //UNIT: px
    fontSize: string
}

interface AllProps extends SizeProps {
    isDark?: boolean
}



const CoolStyledTextInput = styled(TextInputBase) <AllProps>`
    padding: 5px;
    font-size: ${props => props.fontSize};
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    background: ${props => props.isDark ? props.theme.color.mainColor : props.theme.color.lightBackground};
    color: ${props => props.isDark ? props.theme.color.lightFont : props.theme.color.darkFont};
    border: none;
    transition: border .2s;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    border: 3px solid transparent;
    outline:none;
    @media ${device.desktopL} { 
        width: ${props => `${1.2 * props.width}px`};
        height: ${props => `${1.2 * props.height}px`};
    }

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
    &:focus {
        border: 3px solid ${props => props.theme.color.highlightColor};
        transition: border .2s;
    }
    transition: background .2s;
    
    &:hover {
        transition: background .2s;
        background-color: ${props => props.theme.color.hoverInputLight} ;
    }
    
`;


const getSize = (size?: SizeEnum): SizeProps => {
    switch (size) {
        case SizeEnum.L:
            return { width: 300, height: 40, fontSize: '1rem' }
        case SizeEnum.M:
            return { width: 250, height: 40, fontSize: '1rem' }
        case SizeEnum.S:
            return { width: 200, height: 40, fontSize: '1rem' }
        case SizeEnum.XS:
            return { width: 100, height: 40, fontSize: '1rem' }
        default:
            return { width: 250, height: 40, fontSize: '1rem' }
    }
}

export function CoolTextInput({ id, value, setValue, size, isDark, type = TextInputTypeEnum.TEXT }: {
    id: string, value: string, setValue: (value: string) => void, size?: SizeEnum, isDark?: boolean, type?: TextInputTypeEnum
}) {

    const sizeInfo = getSize(size)

    return (
        <CoolStyledTextInput height={sizeInfo.height} width={sizeInfo.width} fontSize={sizeInfo.fontSize} setValue={setValue} value={value} isDark={isDark} type={type} />
    )
}