import { createContext, useContext, useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const ColorModeContext = createContext({
  mode: 'light',
  toggleColorMode: () => {},
})

const buildTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#173B67' : '#8EB6E2',
        dark: mode === 'light' ? '#102B4C' : '#B8D3EF',
        contrastText: mode === 'light' ? '#FFFFFF' : '#0D1722',
      },
      secondary: {
        main: mode === 'light' ? '#9A6A2F' : '#D9B77A',
      },
      background: {
        default: mode === 'light' ? '#F5F7FA' : '#0E1620',
        paper: mode === 'light' ? '#FFFFFF' : '#151F2B',
      },
      text: {
        primary: mode === 'light' ? '#192435' : '#E9EFF6',
        secondary: mode === 'light' ? '#5F6F82' : '#A9B8C8',
      },
      divider: mode === 'light' ? '#E3E8EF' : 'rgba(255,255,255,0.09)',
    },
    typography: {
      fontFamily: '"Manrope", "Segoe UI", sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-0.045em' },
      h2: { fontWeight: 800, letterSpacing: '-0.04em' },
      h3: { fontWeight: 750, letterSpacing: '-0.025em' },
      button: { fontWeight: 700, textTransform: 'none' },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: 'background-color 180ms ease, color 180ms ease',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: '1px solid',
            borderColor: mode === 'light' ? '#E3E8EF' : 'rgba(255,255,255,0.09)',
            boxShadow:
              mode === 'light'
                ? '0 12px 35px rgba(28, 43, 61, 0.06)'
                : '0 14px 42px rgba(0, 0, 0, 0.2)',
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 10,
            paddingInline: 18,
          },
        },
      },
    },
  })

export function PortfolioThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem('portfolio-theme') || 'light')

  const value = useMemo(
    () => ({
      mode,
      toggleColorMode: () =>
        setMode((current) => {
          const next = current === 'light' ? 'dark' : 'light'
          localStorage.setItem('portfolio-theme', next)
          return next
        }),
    }),
    [mode],
  )

  const theme = useMemo(() => buildTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export const usePortfolioColorMode = () => useContext(ColorModeContext)
