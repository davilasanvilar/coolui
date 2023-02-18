import { ModalBase } from '../bases/ModalBase';
import { IconTypeEnum, ModalButton, SizeEnum } from '../../types/types';
import { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { useTranslation } from 'react-i18next';
import { ButtonStyleEnum, CoolButton } from '../atom/CoolButton';


export function SModal() {

    const { t } = useTranslation()
    const { modalProps, setModalProps } = useModal()
    const [modalError, setModalError] = useState<string>('')

    const onConfirm = () => {
    }

    const onClear = () => {
        setModalProps(() => { return { visible: false } })
    }

    const buttons: JSX.Element[] = [
        <CoolButton style={ButtonStyleEnum.OUTLINED} onClick={() => onClear()}>{t('button.cancel')}</CoolButton>,
        <CoolButton style={ButtonStyleEnum.FILLED} onClick={() => onConfirm()}>{t('button.confirm')}</CoolButton>
    ]


    return (
        <ModalBase size={SizeEnum.S} buttons={buttons} onClose={() => { onClear() }} >
        </ModalBase>
    )
}