import {
  ArrowForwardRounded,
  FactCheckOutlined,
  HourglassEmptyRounded,
  InsightsOutlined,
  MenuBookOutlined,
  PsychologyAltOutlined,
} from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { routines } from '../data/portfolio.js'

const courseUnits = [
  {
    unit: 'Unidad I',
    title: 'Marco conceptual de la evaluación',
    evidence: 'SQA Parte I + Observo, pienso, me pregunto',
    icon: MenuBookOutlined,
  },
  {
    unit: 'Unidad II',
    title: 'Naturaleza de la evaluación en educación superior',
    evidence: 'Compara y contrasta',
    icon: InsightsOutlined,
  },
  {
    unit: 'Unidad III',
    title: 'Diseño de programas de evaluación',
    evidence: 'Banco de instrumentos',
    icon: FactCheckOutlined,
  },
  {
    unit: 'Unidad IV',
    title: 'Calidad, autoevaluación y acreditación',
    evidence: 'Conectar, extender, desafiar + SQA Parte II + Metacognición',
    icon: PsychologyAltOutlined,
  },
]

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

      <Card className="course-path-card">
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Typography variant="overline" color="primary.main" fontWeight={800}>
            Recorrido de la asignatura
          </Typography>
          <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5, mb: 1 }}>
            Cuatro unidades, un mismo proceso de aprendizaje
          </Typography>
          <Typography color="text.secondary" lineHeight={1.75} sx={{ maxWidth: 820, mb: 3 }}>
            Las evidencias del portafolio siguen la secuencia curricular del curso, desde
            los fundamentos de la evaluación hasta su aplicación en instrumentos, calidad
            educativa y reflexión sobre el propio aprendizaje.
          </Typography>

          <Box className="course-unit-grid">
            {courseUnits.map(({ unit, title, evidence, icon: Icon }) => (
              <Box key={unit} className="course-unit-item">
                <Box className="course-unit-icon"><Icon /></Box>
                <Box>
                  <Typography variant="overline" color="primary.main" fontWeight={800}>
                    {unit}
                  </Typography>
                  <Typography fontWeight={800} lineHeight={1.4}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.65 }}>
                    Evidencias: {evidence}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>

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
                {routine.available ? 'Ver evidencia' : 'Evidencia en preparación'}
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
            Evidencia en preparación
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
