import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isLoading, confirmationModal, ConfirmationModalProps, ModalAtomProps, modalAtom } from '../../recoil/mainAtoms';
import { ModalBase } from './ModalBase';
import { AiOutlineSend, AiOutlineClose } from 'react-icons/ai'
import { ButtonType, ModalButton, SizeEnum } from '../../types/types';
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


export function ConfirmationModal() {

    const [modalInfo, setModalInfo] = useRecoilState<ModalAtomProps>(modalAtom)
    const [confirmationModalInfo, setConfirmationModalInfo] = useRecoilState(confirmationModal)

    const [confirmationText, setConfirmationText] = useState<string | undefined>(undefined)
    const [isLoadingState, setIsLoadingState] = useRecoilState<boolean>(isLoading)

    const onConfirm = async () => {
        setIsLoadingState(() => true)
        const onConfirm = modalInfo.params?.onConfirm
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
        { type: ButtonType.CONFIRM, onClick: onClear },

    ]


    return (
        confirmationModalInfo.visible ?
            <ModalBase size={SizeEnum.XS} buttons={buttons} onClose={() => { onClear() }}>
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