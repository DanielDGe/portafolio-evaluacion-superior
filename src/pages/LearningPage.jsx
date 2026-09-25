import { ArrowForwardRounded, HourglassEmptyRounded } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { routines } from '../data/portfolio.js'

export default function LearningPage() {
  const navigate = useNavigate()

  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Evidencias de aprendizaje" color="primary" size="small" />
        <Typography variant="h2">Rutinas que hicieron visible mi pensamiento.</Typography>
        <Typography color="text.secondary">
          Cada rutina representa una forma distinta de observar, analizar, relacionar ideas
          y reflexionar sobre mi propio aprendizaje.
        </Typography>
      </Box>

      <Box className="routine-grid">
        {routines.map((routine) => (
          <Card key={routine.number} className="routine-card">
            <CardContent sx={{ p: 3, flex: 1 }}>
              <Typography className="routine-number">{routine.number}</Typography>
              <Typography variant="overline" color="primary.main" fontWeight={800}>
                {routine.subtitle}
              </Typography>
              <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5, mb: 1.5 }}>
                {routine.title}
              </Typography>
              <Typography color="text.secondary" lineHeight={1.7}>
                {routine.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 3, pb: 3 }}>
              <Button
                onClick={() => navigate(routine.path)}
                endIcon={routine.available ? <ArrowForwardRounded /> : <HourglassEmptyRounded />}
              >
                {routine.available ? 'Ver evidencia' : 'Preparar sección'}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export function RoutinePlaceholder({ title, subtitle, description }) {
  const navigate = useNavigate()

  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label={subtitle} color="primary" size="small" />
        <Typography variant="h2">{title}</Typography>
        <Typography color="text.secondary">{description}</Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="h5" fontWeight={800} gutterBottom>
            Evidencia pendiente de incorporar
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 720, lineHeight: 1.8 }}>
            La pantalla ya forma parte de la estructura definitiva del portafolio. Cuando
            incorporemos el documento correspondiente, aquí presentaremos su contexto,
            aprendizaje principal y acceso a la evidencia completa.
          </Typography>
          <Button sx={{ mt: 3 }} onClick={() => navigate('/aprendizaje')}>
            Volver a las rutinas
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}
