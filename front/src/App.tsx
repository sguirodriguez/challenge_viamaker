import ThemeWrapper from './context/theme';
import GlobalStyle from './styles/globalStyles';
import Routes from './routes';
import { ModalProvider } from './context/modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <ThemeWrapper>
      <GlobalStyle />
      <ModalProvider>
        <Routes />
      </ModalProvider>
      <ToastContainer />
    </ThemeWrapper>
  );
}

export default App;
