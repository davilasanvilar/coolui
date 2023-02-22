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
            <Header />
            <Routes>
              <Route path="/" element={<Inicio />} />
            </Routes>
            <CoolLoading />
            <CoolModal />
            <ConfirmationModal />
            <CoolSnackbar/>
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
