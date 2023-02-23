import { useNavigate } from 'react-router-dom';
import headerImg from './../../../public/headerImg.png';
import styled from 'styled-components'
import { HeaderUser } from '../molecule/HeaderUser';
import { CoolIconButton } from '../atom/CoolIconButon';
import { useMisc } from '../../hooks/useMisc';
import { IconTypeEnum } from '../atom/CoolIcon';
import { SizeEnum } from '../../types/types';
import { ButtonStyleEnum } from '../atom/CoolButton';




const MainBox = styled.div`
    display: flex;
    background: ${props => props.theme.color.main.n};
    box-sizing: border-box;
    padding: 1% 2%;
    width: 100%;
    height: 10vh;
    gap: 40px;
    max-height: 110px;
    align-items: center;
    & img {
        height: 100%;
    }
`;

export function Header() {
    const navigate = useNavigate()
    const { setOpenSidebar, blockedSidebar, setBlockedSidebar } = useMisc()

    const onOpenSidebar = ()=> {
        if (!blockedSidebar) {
            setBlockedSidebar(true)
            setOpenSidebar(true)
        }
    }

    return (
        <MainBox>
            <CoolIconButton style={ButtonStyleEnum.TRANSPARENT} size={SizeEnum.M} onClick={onOpenSidebar} type={IconTypeEnum.MENU} />
            <img src={headerImg} alt='Logo header' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}></img>
            <div id='menuBox'>

            </div>
            <HeaderUser />
        </MainBox>
    )
}