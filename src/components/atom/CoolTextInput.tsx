import styled from 'styled-components';
import { SizeEnum } from '../../types/types';
import { device } from '../../StyledTheme';
import { TextInputBase, TextInputTypeEnum } from '../bases/TextInputBase';


interface AllProps {
    disabled?: boolean
}

const MainBox = styled.div`
    display:flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 50px;
`;

const PrefixBox = styled.div`
`;


const CoolStyledTextInput = styled(TextInputBase) <AllProps>`
    padding: 14px 24px;
    border-radius: 14px;
    font-size: ${props => props.theme.fontSize.regularText};
    width: 100%;
    min-height: 52px;
    height: 52px;
    background-color: ${props => props.disabled ? props.theme.color.main.l4 : props.theme.color.main.l6} ;
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
    
    &:focus {
        border: 2px solid ${props => props.disabled ? undefined : props.theme.color.highlight.n};
        background-color: ${props => props.disabled ? undefined : props.theme.color.main.l5} ;
        transition: border .2s;
    }
    transition: background .2s;
    
    &:hover {
        transition: background .2s;
        background-color: ${props => props.disabled ? undefined : props.theme.color.main.l5} ;
    }
    
`;

export function CoolTextInput({ id, value, setValue, size, type = TextInputTypeEnum.TEXT, disabled = false, phonePrefix }: {
    id: string, value: string, setValue: (value: string) => void, size?: SizeEnum, type?: TextInputTypeEnum, disabled?: boolean, phonePrefix?: string
}) {

    return (
        <MainBox>
            {phonePrefix ? <PrefixBox>{phonePrefix}</PrefixBox> : <></>}
            <CoolStyledTextInput setValue={setValue} value={value} type={type} disabled={disabled} />
        </MainBox>
    )
}