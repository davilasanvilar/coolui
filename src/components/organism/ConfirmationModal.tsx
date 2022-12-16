import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isLoading, confirmationModal, ConfirmationModalProps, ModalAtomProps, modalAtom } from '../../recoil/mainAtoms';
import { ModalBase } from './ModalBase';
import { AiOutlineSend, AiOutlineClose } from 'react-icons/ai'
import { ButtonType, ModalButton, SizeEnum } from '../../types/types';
import styled from 'styled-components';


const StyledText = styled.p`
    font-size: 1.4rem;
    color: ${props => props.theme.color.darkFont};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
`;


export function ConfirmationModal() {

    const [confirmationModalInfo, setConfirmationModalInfo] = useRecoilState(confirmationModal)

    const [isLoadingState, setIsLoadingState] = useRecoilState<boolean>(isLoading)

    const onConfirm = async () => {
        setIsLoadingState(() => true)
        const onConfirm = confirmationModalInfo.params?.onConfirm
        try {
            if (onConfirm) {
                await onConfirm()
                onClear()
            }
        } catch (e) {
        }
        finally {
            setIsLoadingState(() => false)
        }
    }

    const onClear = () => {
        setConfirmationModalInfo(() => { return { visible: false } })
    }

    const buttons: ModalButton[] = [
        { type: ButtonType.CANCEL, onClick: onClear },
        { type: ButtonType.CONFIRM, onClick: onConfirm },

    ]


    return (
        confirmationModalInfo.visible ?
            <ModalBase title={confirmationModalInfo.title} size={SizeEnum.S} buttons={buttons} onClose={() => { onClear() }}>
                {confirmationModalInfo.params?.body ?
                    <StyledText>
                        {confirmationModalInfo.params.body}
                    </StyledText>
                    : <></>
                }
            </ModalBase>
            : <></>
    )
}