import Body from './Body';
import { CoolLoading } from './components/atom/Loading';
import GlobalStyle from './globalStyles';
import { ApiProvider } from './hooks/useApi';
import { AuthProvider } from './hooks/useAuth';
import { MiscProvider } from './hooks/useMisc';
import { ModalProvider } from './hooks/useModal';
import { SnackbarProvider } from './hooks/useSnackbar';
import { StyledTheme } from './StyledTheme';


function App() {
  return (<>
    <MiscProvider>
      <SnackbarProvider>
        <ApiProvider>
          <AuthProvider>
            <ModalProvider>
              <StyledTheme>
                <GlobalStyle />
                <Body />
              </StyledTheme>
            </ModalProvider>
          </AuthProvider>
        </ApiProvider>
      </SnackbarProvider>
    </MiscProvider>
  </>
  );
}

export default App;
