import {ThemeProvider, DefaultTheme} from 'styled-components';

import {Header} from './components/Header/index';

import {usePersistedState} from './utils/usePersistedState';

import {GlobalStyles} from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  function handleToggleTheme () {
    setTheme(theme.title === "light" ? dark : light);
  }

  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={handleToggleTheme} />
    </ThemeProvider>
  );
}