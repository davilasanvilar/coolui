import { ModalBase } from '../bases/ModalBase';
import { IconTypeEnum, ModalButton, SizeEnum } from '../../types/types';
import { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { useTranslation } from 'react-i18next';
import { CoolButton, ButtonStyleEnum } from '../atom/CoolButton';


export function MModal() {

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
        <ModalBase size={SizeEnum.M} buttons={buttons} onClose={() => { onClear() }} >
        </ModalBase>
    )
}