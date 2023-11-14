import { createContext, ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ColorsProps } from '../styles/types';
import { theme } from '../styles/theme/colors';

type CreateContextInterface = {
  theme: {
    colors: ColorsProps;
  };
  colors: ColorsProps;
};

type ThemeContextProps = {
  children: ReactNode;
};

const ThemeContext = createContext<CreateContextInterface | null>(null);

export function ThemeWrapper({ children }: ThemeContextProps) {
  return (
    <ThemeContext.Provider
      value={{ theme, colors: theme?.colors as ColorsProps }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => useContext(ThemeContext);

export default ThemeWrapper;
