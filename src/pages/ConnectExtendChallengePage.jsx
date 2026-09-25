import { useState } from 'react'
import {
  AutoAwesomeOutlined,
  CloseRounded,
  DescriptionOutlined,
  ExtensionOutlined,
  HubOutlined,
  OpenInFullRounded,
  OpenInNewRounded,
  PsychologyAltOutlined,
} from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'

const stages = [
  {
    title: 'Conectar',
    subtitle: 'Relacionar con lo que ya sabía',
    icon: HubOutlined,
    text:
      'Partí de una idea de calidad educativa relacionada con el cumplimiento de objetivos y con la evaluación como un medio para conocer resultados y orientar mejoras.',
  },
  {
    title: 'Extender',
    subtitle: 'Ampliar la perspectiva',
    icon: ExtensionOutlined,
    text:
      'La actividad amplió mi comprensión de la calidad como un proceso que involucra distintos factores, la evaluación institucional y la mejora continua.',
  },
  {
    title: 'Desafiar',
    subtitle: 'Reconocer nuevos retos',
    icon: PsychologyAltOutlined,
    text:
      'El análisis me llevó a pensar en el reto de revisar y ajustar de forma permanente la práctica docente para responder mejor a las necesidades de los estudiantes.',
  },
]

export default function ConnectExtendChallengePage() {
  const [imageOpen, setImageOpen] = useState(false)

  const pdfUrl = import.meta.env.BASE_URL + 'documents/conectar-extender-desafiar.pdf'
  const forumImage = import.meta.env.BASE_URL + 'images/foro-conectar-extender-desafiar.png'

  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Rutina 04 · Foro Temático #3 · Unidad IV" color="primary" size="small" />
        <Typography variant="h2">Conectar, extender, desafiar.</Typography>
        <Typography color="text.secondary">
          Esta rutina me permitió relacionar lo que ya sabía sobre calidad educativa,
          ampliar esa visión a partir de nuevos elementos y reconocer los desafíos que
          permanecen abiertos dentro de la evaluación y la mejora continua.
        </Typography>
      </Box>

      <Alert severity="info" icon={<AutoAwesomeOutlined />} sx={{ mb: 3, alignItems: 'center' }}>
        La evidencia completa de la rutina se conserva en PDF. La publicación del foro también
        se incluye como respaldo visual de la participación realizada.
      </Alert>

      <Box className="ced-stage-grid">
        {stages.map(({ title, subtitle, icon: Icon, text }, index) => (
          <Card key={title} className="ced-stage-card">
            <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
              <Box className="routine-section-icon" sx={{ mb: 2 }}>
                <Icon />
              </Box>
              <Typography variant="overline" color="primary.main" fontWeight={800}>
                Momento 0{index + 1}
              </Typography>
              <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>
                {title}
              </Typography>
              <Typography fontWeight={700} sx={{ mt: 1, mb: 1.5 }}>
                {subtitle}
              </Typography>
              <Typography color="text.secondary" lineHeight={1.8}>
                {text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card sx={{ mt: 2.25 }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Box sx={{ maxWidth: 760 }}>
              <Box className="routine-section-icon" sx={{ mb: 2 }}>
                <DescriptionOutlined />
              </Box>
              <Typography variant="overline" color="primary.main" fontWeight={800}>
                Evidencia principal
              </Typography>
              <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>
                Rutina desarrollada
              </Typography>
              <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 1.5 }}>
                El documento contiene el desarrollo completo de los apartados Conectar,
                Extender y Desafiar utilizados para organizar la reflexión sobre calidad
                educativa, evaluación y mejora continua.
              </Typography>
            </Box>

            <Button
              component="a"
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              endIcon={<OpenInNewRounded />}
            >
              Abrir evidencia PDF
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 2.25 }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Typography variant="overline" color="primary.main" fontWeight={800}>
            Lo que consolidé
          </Typography>
          <Typography color="text.secondary" lineHeight={1.82} sx={{ mt: 1.5 }}>
            A partir de los materiales revisados, pude ampliar mi perspectiva sobre la calidad
            educativa y comprender mejor cómo la evaluación no solo permite conocer resultados,
            sino también identificar oportunidades de mejora tanto en el aprendizaje como a
            nivel institucional.
          </Typography>
          <Typography color="text.secondary" lineHeight={1.82} sx={{ mt: 1.5 }}>
            Considero especialmente importante entender la calidad como un proceso continuo
            de evaluación, reflexión y mejora.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mt: 2.25 }}>
        <CardContent sx={{ p: { xs: 2.25, md: 3 } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            spacing={1}
            sx={{ mb: 2 }}
          >
            <Box>
              <Typography variant="overline" color="primary.main" fontWeight={800}>
                Interacción registrada hasta la fecha
              </Typography>
              <Typography variant="h6" fontWeight={800}>
                Publicación e interacción en Canvas
              </Typography>
            </Box>
            <Chip icon={<OpenInFullRounded />} label="Clic para ampliar" size="small" />
          </Stack>

          <Typography color="text.secondary" lineHeight={1.75} sx={{ mb: 2 }}>
            La captura conserva la publicación original y la respuesta recibida hasta el momento.
            Como el foro permanece abierto hasta el 4 de octubre de 2026, esta evidencia podrá
            actualizarse si se incorporan nuevas intervenciones.
          </Typography>

          <Box
            component="button"
            type="button"
            onClick={() => setImageOpen(true)}
            aria-label="Ampliar evidencia del Foro Temático #3"
            className="forum-evidence-button"
          >
            <Box
              component="img"
              src={forumImage}
              alt="Captura de la publicación de Daniel García y una respuesta en el Foro Temático #3"
              className="forum-evidence-image"
            />
            <Box className="forum-evidence-overlay">
              <OpenInFullRounded />
              <Typography fontWeight={700}>Ampliar evidencia</Typography>
            </Box>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
            Evidencia registrada el 23 de septiembre de 2026.
          </Typography>
        </CardContent>
      </Card>

      <Dialog
        open={imageOpen}
        onClose={() => setImageOpen(false)}
        maxWidth="xl"
        fullWidth
        PaperProps={{ sx: { bgcolor: 'background.paper' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setImageOpen(false)} aria-label="Cerrar evidencia ampliada">
            <CloseRounded />
          </IconButton>
        </Box>
        <DialogContent sx={{ pt: 0, pb: 3 }}>
          <Box
            component="img"
            src={forumImage}
            alt="Captura ampliada del Foro Temático #3"
            sx={{ display: 'block', width: '100%', height: 'auto', borderRadius: 1 }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  )
}
