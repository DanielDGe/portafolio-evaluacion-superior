import { MenuBookOutlined } from '@mui/icons-material'
import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'

export default function ReferencesPage() {
  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Fuentes" color="primary" size="small" />
        <Typography variant="h2">Referencias y materiales consultados.</Typography>
        <Typography color="text.secondary">
          Esta sección reunirá las fuentes académicas y materiales empleados en las
          actividades presentadas dentro del portafolio.
        </Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <MenuBookOutlined color="primary" />
            <Box>
              <Typography variant="h6" fontWeight={800}>Organización pendiente</Typography>
              <Typography color="text.secondary" lineHeight={1.8}>
                Las referencias se incorporarán al completar las evidencias para mantener
                una sola lista coherente, evitando duplicaciones entre las diferentes
                actividades del curso.
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}
