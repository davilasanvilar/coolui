import React, { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { ModalType, SizeEnum } from '../../types/types';
import { ModalButton } from '../../types/types'
import { CoolButton } from '../atom/CoolButton';
import { CgCloseR } from 'react-icons/cg';
import { ModalBase } from './ModalBase';
import { useRecoilState } from 'recoil';
import { modalAtom } from '../../recoil/mainAtoms';
import { OtherModal } from './OtherModal';


const getModalComponent = (modalType?: ModalType): JSX.Element => {
    switch (modalType) {
        case ModalType.CONFIRMATION:
            return <OtherModal />
        default:
            return <></>
    }
}


export function CoolModal() {

    const [modalInfo, setModalInfo] = useRecoilState(modalAtom)

    return (
        modalInfo.visible ?
            getModalComponent(modalInfo.type)
            : <></>
    )
}