import ThemeWrapper from './context/theme';
import GlobalStyle from './styles/globalStyles';
import Routes from './routes';

function App() {
  return (
    <ThemeWrapper>
      <GlobalStyle />
      <Routes />
    </ThemeWrapper>
  );
}

export default App;
