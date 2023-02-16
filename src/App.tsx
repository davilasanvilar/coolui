import Body from './Body';
import { Loading } from './components/atom/Loading';
import GlobalStyle from './globalStyles';
import { ApiProvider } from './hooks/useApi';
import { AuthProvider } from './hooks/useAuth';
import { MiscProvider } from './hooks/useMisc';
import { ModalProvider } from './hooks/useModal';
import { StyledTheme } from './StyledTheme';


function App() {
  return (<>
      <MiscProvider>
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
      </MiscProvider>
  </>
  );
}

export default App;
