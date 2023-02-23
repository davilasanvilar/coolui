import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CoolLoading } from './components/atom/CoolLoading';
import { Header } from './components/organism/Header';
import { useAuth } from './hooks/useAuth';
import { Inicio } from './screens/Inicio';
import { CoolLoadingScreen } from './components/organism/CoolLoadingScreen';
import styled from 'styled-components';
import { LoginScreen } from './screens/LoginScreen';
import { CoolModal } from './components/organism/CoolModal';
import { ConfirmationModal } from './components/organism/ConfirmationModal';
import { device } from './StyledTheme';
import { CoolSnackbar } from './components/atom/CoolSnackbar';
import { CoolSidebar } from './components/organism/CoolSidebar';
import { CoolSidebarOption } from './components/atom/CoolSidebarOption';
import { IconTypeEnum } from './components/atom/CoolIcon';
import { Ruta2 } from './screens/Ruta2';


const MainBox = styled.div`
  width: 100%;
  height: 100vh;
  @media ${device.tablet} { 
    height: 100%;
  }
  overflow-y: hidden;
  background-color: ${props => props.theme.color.background.n};
  `;


function Body() {

  const authInfo = useAuth()


  return (
    <MainBox>
      <BrowserRouter>
        {authInfo.isCompletedLoad === true ?
          <>
            <CoolSidebar options={[
              <CoolSidebarOption id='opcion1' iconType={IconTypeEnum.CHECK} route={'/ruta2'} />,
              <CoolSidebarOption id='opcion1' iconType={IconTypeEnum.ALERT}>
                <CoolSidebarOption id='opcion1' iconType={IconTypeEnum.CHECK}>
                  <CoolSidebarOption id='opcion1' iconType={IconTypeEnum.CHECK} />
                  <CoolSidebarOption id='opcion1' iconType={IconTypeEnum.CHECK} />
                  <CoolSidebarOption id='opcion1' iconType={IconTypeEnum.CHECK} />
                </CoolSidebarOption>
                <CoolSidebarOption id='opcion1' iconType={IconTypeEnum.CHECK} />
                <CoolSidebarOption id='opcion1' iconType={IconTypeEnum.CHECK} />
              </CoolSidebarOption>,
              <CoolSidebarOption id='opcion1' iconType={IconTypeEnum.CLOSE} />]} />
            <Header />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/ruta2" element={<Ruta2 />} />
            </Routes>
            <CoolLoading />
            <CoolModal />
            <ConfirmationModal />
            <CoolSnackbar />
          </>
          :
          <CoolLoadingScreen />
        }
        <LoginScreen />


      </BrowserRouter>
    </MainBox>

  );
}

export default Body;
