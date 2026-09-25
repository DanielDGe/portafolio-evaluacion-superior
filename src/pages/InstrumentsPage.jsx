import { CodeRounded, FactCheckOutlined } from '@mui/icons-material'
import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'

export default function InstrumentsPage() {
  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Aplicación profesional" color="primary" size="small" />
        <Typography variant="h2">Banco de instrumentos de evaluación.</Typography>
        <Typography color="text.secondary">
          Una propuesta construida desde mi área de conocimiento, Desarrollo de Software,
          para trasladar los principios de evaluación estudiados a un contexto profesional
          y educativo concreto.
        </Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems={{ md: 'center' }}>
            <Box className="instrument-visual">
              <CodeRounded />
              <span>criterio</span>
              <strong>+</strong>
              <span>evidencia</span>
              <strong>+</strong>
              <span>retroalimentación</span>
            </Box>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                <FactCheckOutlined color="primary" />
                <Typography variant="h5" fontWeight={800}>Evidencia por incorporar</Typography>
              </Stack>
              <Typography color="text.secondary" lineHeight={1.8}>
                Esta pantalla queda preparada para publicar el banco completo y contextualizar
                cómo cada instrumento responde a objetivos, indicadores y evidencias del área
                de Desarrollo de Software.
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}
