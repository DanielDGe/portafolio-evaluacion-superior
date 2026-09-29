import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import {
  AutoAwesomeOutlined,
  HubOutlined,
  SchoolOutlined,
  TimelineOutlined,
} from '@mui/icons-material'

const ideas = [
  {
    title: 'Mostrar el proceso',
    text: 'Organizar evidencias que permitan reconocer cómo evolucionó mi comprensión de la evaluación.',
    icon: TimelineOutlined,
  },
  {
    title: 'Reflexionar sobre el aprendizaje',
    text: 'Volver sobre las actividades para identificar qué aprendí, cómo lo aprendí y cómo puedo aplicarlo.',
    icon: AutoAwesomeOutlined,
  },
  {
    title: 'Conectar dos áreas',
    text: 'Integrar mi experiencia profesional en tecnología con mi formación para la docencia universitaria.',
    icon: HubOutlined,
  },
]

export default function PurposePage() {
  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Propósito" color="primary" size="small" />
        <Typography variant="h2">Más que reunir tareas, documentar un recorrido.</Typography>
        <Typography color="text.secondary">
          Mi propósito con este portafolio es organizar y hacer visible el aprendizaje
          desarrollado durante la asignatura. No lo concibo únicamente como un requisito
          académico, sino como una evidencia de cómo ha cambiado mi manera de comprender la
          evaluación en educación superior.
        </Typography>
      </Box>

      <Card className="course-context-card">
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', md: 'center' }}>
            <Box className="routine-section-icon">
              <SchoolOutlined />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="overline" color="primary.main" fontWeight={800}>
                Contexto académico
              </Typography>
              <Typography variant="h5" fontWeight={800} sx={{ mt: 0.35 }}>
                Sistema de Evaluación Aplicada a la Educación Superior
              </Typography>
              <Typography color="text.secondary" lineHeight={1.75} sx={{ mt: 1 }}>
                Asignatura de la Maestría en Docencia Superior orientada a comprender la
                evaluación como parte del proceso de enseñanza-aprendizaje, la gestión de
                la calidad y la acreditación en educación superior.
              </Typography>
            </Box>

            <Box className="course-context-meta">
              <span><b>Código</b>MDSVAC23407</span>
              <span><b>Facilitador</b>Dr. Gustavo M. González-Rodríguez</span>
              <span><b>Institución</b>ISAE Universidad · 2026</span>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Box className="three-card-grid">
        {ideas.map(({ title, text, icon: Icon }) => (
          <Card key={title}>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2}>
                <Box className="soft-icon"><Icon /></Box>
                <Typography variant="h6" fontWeight={800}>{title}</Typography>
                <Typography color="text.secondary" lineHeight={1.75}>{text}</Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
