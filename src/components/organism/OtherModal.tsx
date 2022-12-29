import { useRecoilState } from 'recoil';
import { ModalBase } from './../bases/ModalBase';
import { ButtonTypeEnum, IconTypeEnum, ModalButton, SizeEnum } from '../../types/types';
import styled from 'styled-components';


const StyledText = styled.p`
    font-size: ${props => props.theme.fontSize.h1};
    color: ${props => props.theme.color.darkFont};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
`;


export function OtherModal() {



    const onClear = () => {
    }

    const buttons: ModalButton[] = [
        { type: IconTypeEnum.CANCEL, onClick: onClear },
        { type: IconTypeEnum.CONFIRM, onClick: onClear },

    ]


    return (
        <ModalBase size={SizeEnum.S} buttons={buttons} onClose={() => { onClear() }}>
            <StyledText>
            </StyledText>
        </ModalBase>
    )
}