import { RecoilRoot } from 'recoil';
import Body from './Body';
import { Loading } from './components/atom/Loading';
import GlobalStyle from './globalStyles';
import { ApiProvider } from './hooks/useApi';
import { AuthProvider } from './hooks/useAuth';
import { ModalProvider } from './hooks/useModal';
import { StyledTheme } from './StyledTheme';


function App() {
  return (<>
    <RecoilRoot>
      <ApiProvider>
        <AuthProvider>
          <ModalProvider>
            <StyledTheme>
              <GlobalStyle />
              <Loading />
              <Body />
            </StyledTheme>
          </ModalProvider>
        </AuthProvider>
      </ApiProvider>
    </RecoilRoot>
  </>
  );
}

export default App;
