import { useModal } from '../../hooks/useModal';
import { SModal } from '../modals/SModal';
import { MModal } from '../modals/MModal';
import { LModal } from '../modals/LModal';

export enum ModalType {
    S_MODAL,
    M_MODAL,
    L_MODAL,
  }  

const getModalComponent = (modalType?: ModalType): JSX.Element => {
    switch (modalType) {
        case ModalType.S_MODAL:
            return <SModal/>
        case ModalType.M_MODAL:
            return <MModal />
        case ModalType.L_MODAL:
            return <LModal />
        default:
            return <></>
    }
}


export function CoolModal() {

    const { modalProps } = useModal()

    return (
        modalProps.visible ?
            getModalComponent(modalProps.type)
            : <></>
    )
}