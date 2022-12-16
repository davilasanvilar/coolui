import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import headerImg from './../../../public/headerImg.png';
import styled from 'styled-components'
import { useApi } from '../../hooks/useApi';
import { HeaderUser } from '../molecule/HeaderUser';
import { useRecoilState } from 'recoil';
import { confirmationModal, modalAtom } from '../../recoil/mainAtoms';
import { ModalType } from '../../types/types';




const MainBox = styled.div`
    display: flex;
    background: ${props => props.theme.color.mainColor};
    box-sizing: border-box;
    padding: 1% 2%;
    width: 100%;
    height: 10vh;
    max-height: 110px;
    align-items: center;
    & img {
        height: 100%;
    }
`;

export function Header() {
    const navigate = useNavigate()
    const [modalInfo, setModalInfo] = useRecoilState(modalAtom)

    return (
        <MainBox>
            <img src={headerImg} alt='Logo header' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}></img>
            <div id='menuBox'>

            </div>
            <HeaderUser />
        </MainBox>
    )
}