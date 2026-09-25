import { CheckCircleRounded } from '@mui/icons-material'
import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { portfolioCriteria } from '../data/portfolio.js'

export default function ReflectionPage() {
  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Metacognición y autoevaluación" color="primary" size="small" />
        <Typography variant="h2">Mirar hacia atrás para entender cómo aprendí.</Typography>
        <Typography color="text.secondary">
          Este espacio funcionará como cierre explícito del portafolio: qué aprendí, qué
          cambió en mi forma de comprender la evaluación y cómo puedo llevarlo a mi futura
          práctica docente.
        </Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
            Criterios que deben quedar visibles en el portafolio
          </Typography>
          <Stack spacing={1.5}>
            {portfolioCriteria.map((item) => (
              <Stack key={item} direction="row" spacing={1.5} alignItems="center">
                <CheckCircleRounded color="primary" fontSize="small" />
                <Typography color="text.secondary">{item}</Typography>
              </Stack>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}
