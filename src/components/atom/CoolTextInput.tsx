import styled from 'styled-components';
import { SizeEnum } from '../../types/types';
import { device } from '../../StyledTheme';
import { TextInputBase, TextInputTypeEnum } from '../bases/TextInputBase';


interface SizeProps {
    width: number //UNIT: px
    height: number //UNIT: px
}

interface AllProps extends SizeProps {
    disabled?: boolean
}

const MainBox = styled.div<SizeProps>`
    display:flex;
    align-items: center;
    gap: 10px;
    
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
`;

const PrefixBox = styled.div`
`;


const CoolStyledTextInput = styled(TextInputBase) <AllProps>`
    padding: .5rem;
    border-radius: 12px;
    font-size: 1rem;
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    background-color: ${props => props.disabled ? props.theme.color.main.l4 : props.theme.color.main.l5} ;
    color: ${props => props.theme.color.main.d7};
    border: none;
    cursor: ${props => props.disabled ? 'default' : undefined};
    transition: border .2s;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    border: 2px solid transparent;
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
        border: 2px solid ${props => props.disabled ? undefined : props.theme.color.highlight.n};
        background-color: ${props => props.disabled ? undefined : props.theme.color.main.l6} ;
        transition: border .2s;
    }
    transition: background .2s;
    
    &:hover {
        transition: background .2s;
        background-color: ${props => props.disabled ? undefined : props.theme.color.main.l6} ;
    }
    
`;


const getSize = (size?: SizeEnum): SizeProps => {
    switch (size) {
        case SizeEnum.L:
            return { width: 350, height: 50 }
        case SizeEnum.M:
            return { width: 300, height: 50 }
        case SizeEnum.S:
            return { width: 200, height: 50 }
        case SizeEnum.XS:
            return { width: 100, height: 50 }
        default:
            return { width: 300, height: 50 }
    }
}

export function CoolTextInput({ id, value, setValue, size, type = TextInputTypeEnum.TEXT, disabled = false, phonePrefix }: {
    id: string, value: string, setValue: (value: string) => void, size?: SizeEnum, type?: TextInputTypeEnum, disabled?: boolean, phonePrefix?: string
}) {

    const sizeInfo = getSize(size)

    return (
        <MainBox height={sizeInfo.height} width={sizeInfo.width}>
            {phonePrefix ? <PrefixBox>{phonePrefix}</PrefixBox> : <></>}
            <CoolStyledTextInput height={sizeInfo.height} width={sizeInfo.width} setValue={setValue} value={value} type={type} disabled={disabled} />
        </MainBox>
    )
}