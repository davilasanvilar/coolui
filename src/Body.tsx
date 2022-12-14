import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loading } from './components/atom/Loading';
import { Header } from './components/organism/Header';
import { useAuth } from './hooks/useAuth';
import { Inicio } from './routes/Inicio';
import { LoadingScreen } from './components/organism/LoadingScreen';
import styled from 'styled-components';
import { LoginScreen } from './routes/LoginScreen';
import { CoolModal } from './components/organism/CoolModal';
import { ConfirmationModal } from './components/organism/ConfirmationModal';


const MainBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.color.bgColor};
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
            <CoolModal/>
            <ConfirmationModal/>
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
