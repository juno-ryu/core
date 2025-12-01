'use client';

import { createContext, useMemo, useState } from 'react';

import { getTheme } from '@/core/design-systems';
import { ThemeProviderProps } from '@/core/design-systems/providers/providers.type';
import { globalFontFace } from '@/core/shared/styles/font';
import { globalStyles } from '@/core/shared/styles/global';
import createCache from '@emotion/cache';
import { Global } from '@emotion/react';
import { CssBaseline, PaletteMode } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const MUI_CACHE = createCache({ key: 'css', prepend: true });

export const ThemeContext = createContext({ toggleColorMode: () => {} });

const ThemeProvider = (props: ThemeProviderProps) => {
  const { lang, children } = props;
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <AppRouterCacheProvider options={MUI_CACHE}>
      <ThemeContext.Provider value={colorMode}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Global styles={[globalStyles(lang), globalFontFace(lang)]} />
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </AppRouterCacheProvider>
  );
};

export default ThemeProvider;
