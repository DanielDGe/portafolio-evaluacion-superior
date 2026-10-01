import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

export const portfolioPalettes = {
  academic: {
    label: 'Académico',
    swatches: ['#173B67', '#6F8FB4'],
    light: {
      primary: '#173B67',
      primaryDark: '#102B4C',
      primaryContrast: '#FFFFFF',
      secondary: '#8A6236',
      background: '#F4F7FB',
      paper: '#FFFFFF',
      textPrimary: '#192435',
      textSecondary: '#5F6F82',
      divider: '#E1E7EF',
    },
    dark: {
      primary: '#8EB6E2',
      primaryDark: '#B8D3EF',
      primaryContrast: '#0D1722',
      secondary: '#D9B77A',
      background: '#0E1620',
      paper: '#151F2B',
      textPrimary: '#E9EFF6',
      textSecondary: '#A9B8C8',
      divider: 'rgba(255,255,255,0.09)',
    },
  },
  tech: {
    label: 'Tech Turquesa',
    swatches: ['#155E75', '#14B8A6'],
    light: {
      primary: '#155E75',
      primaryDark: '#0E4758',
      primaryContrast: '#FFFFFF',
      secondary: '#0F9F94',
      background: '#F1F8F7',
      paper: '#FCFEFD',
      textPrimary: '#173137',
      textSecondary: '#5D7478',
      divider: '#DCE9E7',
    },
    dark: {
      primary: '#5CCFC2',
      primaryDark: '#8DE4DA',
      primaryContrast: '#09282A',
      secondary: '#7DD3FC',
      background: '#0D1C20',
      paper: '#13272B',
      textPrimary: '#E8F5F3',
      textSecondary: '#A8C5C1',
      divider: 'rgba(184,235,228,0.11)',
    },
  },
  violet: {
    label: 'Violeta Educativo',
    swatches: ['#5B4B8A', '#8B7CF6'],
    light: {
      primary: '#5B4B8A',
      primaryDark: '#44376D',
      primaryContrast: '#FFFFFF',
      secondary: '#7B6CE8',
      background: '#F7F5FB',
      paper: '#FEFDFF',
      textPrimary: '#252036',
      textSecondary: '#6B647B',
      divider: '#E7E1F0',
    },
    dark: {
      primary: '#B7A7F4',
      primaryDark: '#D0C5FA',
      primaryContrast: '#211936',
      secondary: '#9E8CFF',
      background: '#191622',
      paper: '#211C2D',
      textPrimary: '#F0ECF7',
      textSecondary: '#BDB4CC',
      divider: 'rgba(222,211,245,0.11)',
    },
  },
}

const ColorModeContext = createContext({
  mode: 'light',
  paletteKey: 'academic',
  toggleColorMode: () => {},
  setPaletteKey: () => {},
})

const getStoredValue = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

const buildTheme = (mode, paletteKey) => {
  const palette = portfolioPalettes[paletteKey] || portfolioPalettes.academic
  const colors = palette[mode]

  return createTheme({
    cssVariables: true,
    palette: {
      mode,
      primary: {
        main: colors.primary,
        dark: colors.primaryDark,
        contrastText: colors.primaryContrast,
      },
      secondary: {
        main: colors.secondary,
      },
      background: {
        default: colors.background,
        paper: colors.paper,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
      divider: colors.divider,
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
            transition:
              'background-color 180ms ease, color 180ms ease',
          },
          '::selection': {
            backgroundColor: colors.secondary,
            color: colors.primaryContrast,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: '1px solid',
            borderColor: colors.divider,
            boxShadow:
              mode === 'light'
                ? '0 12px 35px rgba(28, 43, 61, 0.06)'
                : '0 14px 42px rgba(0, 0, 0, 0.2)',
            transition:
              'background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
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
}

export function PortfolioThemeProvider({ children }) {
  const [mode, setMode] = useState(() =>
    getStoredValue('portfolio-theme', 'light') === 'dark' ? 'dark' : 'light',
  )
  const [paletteKey, setPalette] = useState(() => {
    const stored = getStoredValue('portfolio-palette', 'academic')
    return portfolioPalettes[stored] ? stored : 'academic'
  })

  const setPaletteKey = (nextPalette) => {
    if (!portfolioPalettes[nextPalette]) return

    try {
      localStorage.setItem('portfolio-palette', nextPalette)
    } catch {
      // The theme still updates for the current session if storage is unavailable.
    }

    setPalette(nextPalette)
  }

  const value = useMemo(
    () => ({
      mode,
      paletteKey,
      setPaletteKey,
      toggleColorMode: () =>
        setMode((current) => {
          const next = current === 'light' ? 'dark' : 'light'
          try {
            localStorage.setItem('portfolio-theme', next)
          } catch {
            // The mode still updates for the current session if storage is unavailable.
          }

          return next
        }),
    }),
    [mode, paletteKey],
  )

  const theme = useMemo(() => buildTheme(mode, paletteKey), [mode, paletteKey])

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme.palette.primary.main)
    }

    document.documentElement.dataset.portfolioPalette = paletteKey
  }, [paletteKey, theme.palette.primary.main])

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
