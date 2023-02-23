import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonStyleEnum, CoolButton } from '../components/atom/CoolButton';
import { CoolCheckbox } from '../components/atom/CoolCheckbox';
import { CoolChip } from '../components/atom/CoolChip';
import { ContextOption } from '../components/atom/CoolContextOption';
import { CoolIcon, IconTypeEnum } from '../components/atom/CoolIcon';
import { CoolIconButton } from '../components/atom/CoolIconButon';
import { CoolSelect } from '../components/atom/CoolSelect';
import { CoolTextArea } from '../components/atom/CoolTextArea';
import { CoolTextInput } from '../components/atom/CoolTextInput';
import { CoolToogle } from '../components/atom/CoolToogle';
import { TextInputTypeEnum } from '../components/bases/TextInputBase';
import { ScreenFrame } from '../components/molecule/ScreenFrame';
import { ModalType } from '../components/organism/CoolModal';
import { CoolTable, HeaderData } from '../components/organism/CoolTable';
import { useApi } from '../hooks/useApi';
import { useModal } from '../hooks/useModal';
import { useSnackbar } from '../hooks/useSnackbar';
import { Test } from '../types/entities';
import { Page, SelectOption, SizeEnum } from '../types/types';


const MainBox = styled.div`
    display: flex;
    overflow-y: scroll;
    align-items: center;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
`;



export function Ruta2() {

    const headers: HeaderData[] = [{ name: 'name', width: '30%' }, { name: 'lastname', width: '40%' }, { name: 'date', width: '30%' }]


    const { getTestData } = useApi();

    const [page, setPage] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<Page<Test> | undefined>(undefined)
    const [checkbox, setCheckbox] = useState<boolean>(false)
    const { snackbarProps, setSnackbarProps } = useSnackbar()

    const { setConfirmationModalProps, setModalProps } = useModal()


    const [selectVal, setSelectVal] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [searchKey, setSearchKey] = useState<string>('')

    useEffect(() => {
        onGetData()
    }, [page])

    const onGetData = async () => {
        setIsLoading(() => true)
        const data = await getTestData(page)
        setData(data)
        setIsLoading(() => false)
    }

    const contextOptions: ContextOption[] = [{
        type: IconTypeEnum.EDIT,
        label: 'Editar',
        onClick: (ids: string[]) => {
            setConfirmationModalProps({ visible: true, params: { body: '¿Desea editar el elemento?', onConfirm: () => console.log(`Borrando el ${ids[0]}`) }, title: 'Edición' })
        }
    }, {
        type: IconTypeEnum.DELETE,
        label: 'Eliminar',
        multi: true,
        onClick: (ids: string[]) => {
            setConfirmationModalProps({ visible: true, params: { body: '¿Desea borrar el elemento?', onConfirm: () => console.log(`Borrando el ${ids.concat()}`) }, title: 'Borrado' })
        }
    }]

    const optionsArray: SelectOption[] = [
        { label: "Iniciativas", value: "iniciativas" },
        { label: "Quejas", value: "quejas" },
        { label: "Sugerencias", value: "sugerencias" }
    ]

    return (
        <ScreenFrame title='Pantalla de inicio'>
            <CoolToogle value={checkbox} setValue={setCheckbox} size={SizeEnum.L} leftElement={<CoolIcon type={IconTypeEnum.MAIL} />} rightElement={<CoolIcon type={IconTypeEnum.PHONE} />} disabled />
            <CoolToogle value={checkbox} setValue={setCheckbox} leftElement={<CoolIcon type={IconTypeEnum.MAIL} />} rightElement={<CoolIcon type={IconTypeEnum.PHONE} />} disabled />
            <CoolToogle value={checkbox} setValue={setCheckbox} leftElement={<CoolIcon type={IconTypeEnum.MAIL} />} rightElement={<CoolIcon type={IconTypeEnum.PHONE} />} />
            <CoolToogle value={checkbox} setValue={setCheckbox} size={SizeEnum.S} leftElement={<CoolIcon type={IconTypeEnum.MAIL} />} rightElement={<CoolIcon type={IconTypeEnum.PHONE} />} />
            <CoolToogle value={checkbox} setValue={setCheckbox} size={SizeEnum.S} leftElement={<CoolIcon type={IconTypeEnum.MAIL} />} rightElement={<CoolIcon type={IconTypeEnum.PHONE} />} disabled />
            <CoolToogle value={checkbox} setValue={setCheckbox} size={SizeEnum.XS} leftElement={<CoolIcon type={IconTypeEnum.MAIL} />} rightElement={<CoolIcon type={IconTypeEnum.PHONE} />} />
        </ScreenFrame >
    )
}
