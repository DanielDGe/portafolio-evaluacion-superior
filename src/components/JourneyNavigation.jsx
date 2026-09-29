import {
  ArrowBackRounded,
  ArrowForwardRounded,
} from '@mui/icons-material'
import {
  Box,
  ButtonBase,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const journeySteps = [
  { label: 'Inicio', path: '/' },
  { label: 'Propósito', path: '/proposito' },
  { label: 'Resumen', path: '/aprendizaje' },
  { label: 'SQA', path: '/aprendizaje/sqa' },
  {
    label: 'Observo, pienso, me pregunto',
    path: '/aprendizaje/observo-pienso-me-pregunto',
  },
  {
    label: 'Compara y contrasta',
    path: '/aprendizaje/compara-contrasta',
  },
  {
    label: 'Conectar, extender, desafiar',
    path: '/aprendizaje/conectar-extender-desafiar',
  },
  { label: 'Banco de instrumentos', path: '/instrumentos' },
  { label: 'Metacognición', path: '/metacognicion' },
  { label: 'Sobre mí', path: '/autor' },
  { label: 'Referencias', path: '/referencias' },
]

function JourneyButton({ item, direction, onNavigate }) {
  if (!item) {
    return <Box aria-hidden="true" />
  }

  const previous = direction === 'previous'
  const Icon = previous ? ArrowBackRounded : ArrowForwardRounded

  return (
    <ButtonBase
      onClick={() => onNavigate(item.path)}
      aria-label={`${previous ? 'Ir a la sección anterior' : 'Ir a la sección siguiente'}: ${item.label}`}
      sx={{
        width: '100%',
        minHeight: 68,
        px: { xs: 1.25, sm: 1.75 },
        py: 1.25,
        borderRadius: 2,
        justifyContent: previous ? 'flex-start' : 'flex-end',
        textAlign: previous ? 'left' : 'right',
        transition: 'background-color 160ms ease, transform 160ms ease',
        '&:hover': {
          bgcolor: 'action.hover',
          transform: previous ? 'translateX(-2px)' : 'translateX(2px)',
        },
        '&:focus-visible': {
          outline: '3px solid',
          outlineColor: 'primary.main',
          outlineOffset: 2,
        },
      }}
    >
      <Stack
        direction="row"
        spacing={1.25}
        alignItems="center"
        sx={{ minWidth: 0 }}
      >
        {previous && (
          <Box
            sx={{
              width: 34,
              height: 34,
              flex: '0 0 auto',
              display: 'grid',
              placeItems: 'center',
              borderRadius: 1.5,
              color: 'primary.main',
              bgcolor: 'action.hover',
            }}
          >
            <Icon fontSize="small" />
          </Box>
        )}

        <Box sx={{ minWidth: 0 }}>
          <Typography
            component="span"
            sx={{
              display: 'block',
              color: 'text.secondary',
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: '.06em',
              textTransform: 'uppercase',
            }}
          >
            {previous ? 'Anterior' : 'Siguiente'}
          </Typography>
          <Typography
            component="span"
            sx={{
              display: 'block',
              mt: 0.2,
              fontSize: { xs: 11.5, sm: 13 },
              fontWeight: 750,
              lineHeight: 1.25,
            }}
          >
            {item.label}
          </Typography>
        </Box>

        {!previous && (
          <Box
            sx={{
              width: 34,
              height: 34,
              flex: '0 0 auto',
              display: 'grid',
              placeItems: 'center',
              borderRadius: 1.5,
              color: 'primary.main',
              bgcolor: 'action.hover',
            }}
          >
            <Icon fontSize="small" />
          </Box>
        )}
      </Stack>
    </ButtonBase>
  )
}

export default function JourneyNavigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const currentIndex = journeySteps.findIndex(({ path }) => path === location.pathname)

  if (currentIndex === -1) {
    return null
  }

  const previous = journeySteps[currentIndex - 1]
  const next = journeySteps[currentIndex + 1]
  const progress = ((currentIndex + 1) / journeySteps.length) * 100

  return (
    <Box
      component="nav"
      aria-label="Recorrido del portafolio"
      sx={{
        width: 'min(1180px, calc(100% - 48px))',
        mx: 'auto',
        mt: { xs: -3, md: -4.5 },
        pb: { xs: 4, md: 5 },
        '@media (max-width: 760px)': {
          width: 'min(100% - 28px, 1180px)',
        },
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          p: { xs: 1, sm: 1.25 },
          borderRadius: 3,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          borderColor: 'divider',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr) minmax(0, 1fr)',
              md: 'minmax(0, 1fr) 190px minmax(0, 1fr)',
            },
            gridTemplateAreas: {
              xs: `"progress progress" "previous next"`,
              md: `"previous progress next"`,
            },
            gap: { xs: 0.75, md: 1 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ gridArea: 'previous', minWidth: 0 }}>
            <JourneyButton
              item={previous}
              direction="previous"
              onNavigate={navigate}
            />
          </Box>

          <Box
            sx={{
              gridArea: 'progress',
              px: { xs: 1.25, md: 1 },
              py: { xs: 1, md: 0 },
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: 10.5,
                fontWeight: 800,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
              }}
            >
              Recorrido
            </Typography>
            <Typography sx={{ mt: 0.25, mb: 0.8, fontSize: 12.5, fontWeight: 750 }}>
              {currentIndex + 1} de {journeySteps.length}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              aria-label={`Progreso del recorrido: ${currentIndex + 1} de ${journeySteps.length}`}
              sx={{
                height: 5,
                borderRadius: 999,
                bgcolor: 'action.hover',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 999,
                },
              }}
            />
          </Box>

          <Box sx={{ gridArea: 'next', minWidth: 0 }}>
            <JourneyButton
              item={next}
              direction="next"
              onNavigate={navigate}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
