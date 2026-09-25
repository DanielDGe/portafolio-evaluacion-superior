import { useState } from 'react'
import {
  AppBar,
  Box,
  Chip,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  AccountCircleOutlined,
  AutoStoriesOutlined,
  BalanceOutlined,
  Brightness4Outlined,
  Brightness7Outlined,
  ChevronRightRounded,
  CompareArrowsOutlined,
  FactCheckOutlined,
  HomeOutlined,
  InfoOutlined,
  MenuRounded,
  PsychologyAltOutlined,
  QuestionAnswerOutlined,
  SchoolOutlined,
} from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { usePortfolioColorMode } from '../theme/PortfolioThemeProvider.jsx'

const drawerWidth = 292

const mainItems = [
  { label: 'Inicio', path: '/', icon: HomeOutlined },
  { label: 'Propósito', path: '/proposito', icon: InfoOutlined },
]

const learningItems = [
  { label: 'Resumen', path: '/aprendizaje', icon: AutoStoriesOutlined },
  { label: 'SQA', path: '/aprendizaje/sqa', icon: QuestionAnswerOutlined },
  {
    label: 'Observo, pienso, me pregunto',
    path: '/aprendizaje/observo-pienso-me-pregunto',
    icon: PsychologyAltOutlined,
  },
  {
    label: 'Compara y contrasta',
    path: '/aprendizaje/compara-contrasta',
    icon: CompareArrowsOutlined,
  },
  {
    label: 'Conectar, extender, desafiar',
    path: '/aprendizaje/conectar-extender-desafiar',
    icon: ChevronRightRounded,
  },
]

const closingItems = [
  { label: 'Banco de instrumentos', path: '/instrumentos', icon: FactCheckOutlined },
  { label: 'Metacognición', path: '/metacognicion', icon: BalanceOutlined },
  { label: 'Sobre mí', path: '/autor', icon: AccountCircleOutlined },
  { label: 'Referencias', path: '/referencias', icon: SchoolOutlined },
]

function NavigationList({ onNavigate }) {
  const location = useLocation()
  const navigate = useNavigate()

  const openPage = (path) => {
    navigate(path)
    onNavigate?.()
  }

  const renderItem = ({ label, path, icon: Icon }) => (
    <ListItemButton
      key={path}
      selected={location.pathname === path}
      onClick={() => openPage(path)}
      sx={{
        mx: 1.25,
        my: 0.35,
        borderRadius: 2,
        minHeight: 42,
        '&.Mui-selected': {
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          '&:hover': { bgcolor: 'primary.main' },
          '& .MuiListItemIcon-root': { color: 'inherit' },
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 38, color: 'text.secondary' }}>
        <Icon fontSize="small" />
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          fontSize: 13.5,
          fontWeight: location.pathname === path ? 700 : 550,
        }}
      />
    </ListItemButton>
  )

  return (
    <>
      <List disablePadding>{mainItems.map(renderItem)}</List>
      <List
        disablePadding
        subheader={
          <ListSubheader
            disableSticky
            sx={{
              bgcolor: 'transparent',
              color: 'text.secondary',
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: '.12em',
              lineHeight: '34px',
              mt: 1.5,
            }}
          >
            APRENDIZAJE
          </ListSubheader>
        }
      >
        {learningItems.map(renderItem)}
      </List>
      <Divider sx={{ my: 1.5, mx: 2 }} />
      <List disablePadding>{closingItems.map(renderItem)}</List>
    </>
  )
}

function Sidebar({ onNavigate }) {
  const { mode, toggleColorMode } = usePortfolioColorMode()

  return (
    <Stack sx={{ height: '100%', py: 2 }}>
      <Box sx={{ px: 2.5, pb: 1.5 }}>
        <Stack direction="row" spacing={1.4} alignItems="center">
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 2.25,
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              fontWeight: 900,
              letterSpacing: '-0.04em',
            }}
          >
            DG
          </Box>
          <Box>
            <Typography fontSize={14.5} fontWeight={800}>
              Portafolio Digital
            </Typography>
            <Typography fontSize={11.5} color="text.secondary">
              Docencia Superior · 2026
            </Typography>
          </Box>
        </Stack>

        <Box
          component="a"
          href="https://www.isaeuniversidad.ac.pa/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar el sitio oficial de ISAE Universidad"
          sx={{
            mt: 1.25,
            p: 0.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 42,
            border: 1,
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: mode === 'light' ? '#FFFFFF' : '#F8FAFC',
            textDecoration: 'none',
            transition: 'border-color 160ms ease, transform 160ms ease',
            '&:hover': {
              borderColor: 'primary.main',
              transform: 'translateY(-1px)',
            },
          }}
        >
          <Box
            component="img"
            src="https://www.isaeuniversidad.ac.pa/wp-content/uploads/2023/06/Group-80.png"
            alt="ISAE Universidad"
            sx={{
              display: 'block',
              width: '100%',
              maxWidth: 188,
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>

      <Divider />
      <Box className="sidebar-scroll" sx={{ flex: 1, overflowY: 'auto', py: 1.25 }}>
        <NavigationList onNavigate={onNavigate} />
      </Box>
      <Divider />

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2.5, pt: 2 }}>
        <Box>
          <Typography fontSize={11.5} fontWeight={700}>
            Daniel García
          </Typography>
          <Typography fontSize={10.5} color="text.secondary">
            Desarrollo de Software
          </Typography>
        </Box>
        <Tooltip title={mode === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}>
          <IconButton onClick={toggleColorMode} size="small" aria-label="Cambiar tema">
            {mode === 'light' ? <Brightness4Outlined /> : <Brightness7Outlined />}
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  )
}

export default function PortfolioLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))
  const location = useLocation()

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {!desktop && (
        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
        >
          <Toolbar>
            <IconButton edge="start" onClick={() => setMobileOpen(true)} aria-label="Abrir menú">
              <MenuRounded />
            </IconButton>
            <Typography sx={{ ml: 1.5, fontWeight: 800, flex: 1 }}>
              Portafolio Digital
            </Typography>
            <SchoolOutlined color="primary" />
          </Toolbar>
        </AppBar>
      )}

      <Drawer
        variant={desktop ? 'permanent' : 'temporary'}
        open={desktop || mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRightColor: 'divider',
            bgcolor: 'background.paper',
          },
        }}
      >
        <Sidebar onNavigate={() => !desktop && setMobileOpen(false)} />
      </Drawer>

      <Box
        component="main"
        sx={{
          ml: { xs: 0, md: drawerWidth + 'px' },
          pt: { xs: 8, md: 0 },
          minHeight: '100vh',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  )
}
