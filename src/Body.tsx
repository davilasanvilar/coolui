import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loading } from './components/atom/Loading';
import { Header } from './components/organism/Header';
import { useAuth } from './hooks/useAuth';
import { Inicio } from './screens/Inicio';
import { LoadingScreen } from './components/organism/LoadingScreen';
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
            <Loading />
            <CoolModal />
            <ConfirmationModal />
            <CoolSnackbar/>
          </>
          :
          <LoadingScreen />
        }
        <LoginScreen />


      </BrowserRouter>
    </MainBox>

  );
}

export default Body;
