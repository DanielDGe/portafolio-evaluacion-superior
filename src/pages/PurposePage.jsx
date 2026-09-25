import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { AutoAwesomeOutlined, HubOutlined, TimelineOutlined } from '@mui/icons-material'

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
