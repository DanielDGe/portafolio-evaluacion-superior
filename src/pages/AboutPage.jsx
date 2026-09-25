import { CodeRounded, SchoolOutlined } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'

export default function AboutPage() {
  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Autor" color="primary" size="small" />
        <Typography variant="h2">Daniel García</Typography>
        <Typography color="text.secondary">
          Profesional del área de Desarrollo de Software y estudiante de Maestría en
          Docencia Superior.
        </Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ sm: 'center' }}>
            <Avatar sx={{ width: 88, height: 88, bgcolor: 'primary.main', fontSize: 28, fontWeight: 800 }}>
              DG
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight={800} gutterBottom>
                Tecnología y docencia como áreas que se complementan
              </Typography>
              <Typography color="text.secondary" lineHeight={1.8} sx={{ maxWidth: 760 }}>
                Mi interés es conectar la experiencia profesional en desarrollo de software
                con una práctica docente clara, reflexiva y orientada al aprendizaje,
                aprovechando la tecnología como medio y no como fin.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
                <Chip icon={<CodeRounded />} label="Desarrollo de Software" />
                <Chip icon={<SchoolOutlined />} label="Docencia Superior" />
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}
