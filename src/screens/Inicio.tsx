import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ScreenFrame } from '../components/molecule/ScreenFrame';
import { CoolTable } from '../components/organism/CoolTable';
import { useApi } from '../hooks/useApi';
import { useAuth } from '../hooks/useAuth';
import { confirmationModal, ConfirmationModalProps } from '../recoil/mainAtoms';
import { Test } from '../types/entities';
import { ContextOption, ContextOptionEnum, Page } from '../types/types';


const MainBox = styled.div`
    display: flex;
    justify-content: center;
`;



export function Inicio() {

    const headers = ['name', 'lastname', 'date']


    const { getTestData } = useApi();

    const [page, setPage] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<Page<Test> | undefined>(undefined)

    const setConfirmationModalInfo = useSetRecoilState<ConfirmationModalProps>(confirmationModal)


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
        type: ContextOptionEnum.EDIT,
        onClick: (ids: string[]) => {
            if (ids.length === 1) {
                console.log(`Editando el ${ids[0]}`)
            }
        }
    }, {
        type: ContextOptionEnum.DELETE,
        onClick: (ids: string[]) => {
            ids.forEach((id) =>
                setConfirmationModalInfo({ visible: true, params: { body: '¿Desea borrar el elemento?', onConfirm: () => console.log(`Borrando el ${id}`) }, title: 'Borrado' })
            )
        }
    }]

    return (
        <ScreenFrame title='Pantalla de inicio'>
            <MainBox>
                <CoolTable width={50} height={50} headers={headers} data={data} setPage={setPage} contextOptions={contextOptions} isLoading={isLoading}></CoolTable>
            </MainBox>
        </ScreenFrame >
    )
}
