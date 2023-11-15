import ThemeWrapper from './context/theme';
import GlobalStyle from './styles/globalStyles';
import Routes from './routes';
import { ModalProvider } from './context/modal';

function App() {
  return (
    <ThemeWrapper>
      <GlobalStyle />
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </ThemeWrapper>
  );
}

export default App;
