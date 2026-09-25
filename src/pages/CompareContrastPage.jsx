import { useState } from 'react'
import {
  CloseRounded,
  CompareArrowsOutlined,
  DescriptionOutlined,
  OpenInFullRounded,
  OpenInNewRounded,
  PlayCircleOutlineRounded,
  PublicOutlined,
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

export default function CompareContrastPage() {
  const [imageOpen, setImageOpen] = useState(false)

  const pdfUrl = import.meta.env.BASE_URL + 'documents/compara-y-contrasta.pdf'
  const forumImage = import.meta.env.BASE_URL + 'images/foro-compara-y-contrasta.png'
  const videoUrl = 'https://youtu.be/m_5MSWUb7XQ'

  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Rutina 03 · Foro Temático #2 · Unidad II" color="primary" size="small" />
        <Typography variant="h2">Compara y contrasta.</Typography>
        <Typography color="text.secondary">
          En esta actividad comparé los modelos de evaluación de la educación superior de
          Panamá y Estados Unidos, identificando relaciones y diferencias mediante la rutina
          de pensamiento Compara y Contrasta.
        </Typography>
      </Box>

      <Alert severity="info" icon={<CompareArrowsOutlined />} sx={{ mb: 3, alignItems: 'center' }}>
        La evidencia principal de esta rutina se presentó mediante un video y un documento PDF.
        Ambos recursos se conservan aquí para mostrar el trabajo tal como fue desarrollado y
        compartido en el foro.
      </Alert>

      <Box className="compare-intro-grid">
        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box className="routine-section-icon" sx={{ mb: 2 }}>
              <PublicOutlined />
            </Box>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Contexto 01
            </Typography>
            <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>
              Panamá
            </Typography>
            <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 1.5 }}>
              Uno de los contextos analizados en la comparación de los modelos de evaluación
              de la educación superior.
            </Typography>
          </CardContent>
        </Card>

        <Card className="compare-center-card">
          <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
            <Box className="compare-symbol">
              <CompareArrowsOutlined />
            </Box>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Rutina de pensamiento
            </Typography>
            <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>
              Comparar para comprender
            </Typography>
            <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 1.5 }}>
              La rutina permitió organizar el análisis alrededor de semejanzas, diferencias
              y relaciones entre ambos contextos.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box className="routine-section-icon" sx={{ mb: 2 }}>
              <PublicOutlined />
            </Box>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Contexto 02
            </Typography>
            <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>
              Estados Unidos
            </Typography>
            <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 1.5 }}>
              El segundo contexto utilizado para contrastar la organización y los enfoques
              de evaluación en la educación superior.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box className="compare-evidence-grid">
        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box className="routine-section-icon" sx={{ mb: 2 }}>
              <DescriptionOutlined />
            </Box>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Documento de apoyo
            </Typography>
            <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>
              Rutina Compara y Contrasta
            </Typography>
            <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 1.5, mb: 3 }}>
              Documento utilizado para organizar el análisis comparativo presentado en la actividad.
            </Typography>
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
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box className="routine-section-icon" sx={{ mb: 2 }}>
              <PlayCircleOutlineRounded />
            </Box>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Presentación audiovisual
            </Typography>
            <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>
              Video de la comparación
            </Typography>
            <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 1.5, mb: 3 }}>
              Presentación en video donde desarrollo la comparación entre Panamá y Estados Unidos.
            </Typography>
            <Button
              component="a"
              href={videoUrl}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              endIcon={<OpenInNewRounded />}
            >
              Ver video en YouTube
            </Button>
          </CardContent>
        </Card>
      </Box>

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
                Evidencia e interacción
              </Typography>
              <Typography variant="h6" fontWeight={800}>
                Publicación original en Canvas
              </Typography>
            </Box>
            <Chip icon={<OpenInFullRounded />} label="Clic para ampliar" size="small" />
          </Stack>

          <Typography color="text.secondary" lineHeight={1.75} sx={{ mb: 2 }}>
            La publicación incluyó el enlace al video y el PDF de la rutina. Además, recibió
            dos respuestas de compañeras, que se conservan en la captura como parte de la
            interacción original del foro.
          </Typography>

          <Box
            component="button"
            type="button"
            onClick={() => setImageOpen(true)}
            aria-label="Ampliar publicación y respuestas del foro Compara y Contrasta"
            className="forum-evidence-button"
          >
            <Box
              component="img"
              src={forumImage}
              alt="Captura de la publicación de Daniel García y dos respuestas en el foro Compara y Contrasta"
              className="forum-evidence-image"
            />
            <Box className="forum-evidence-overlay">
              <OpenInFullRounded />
              <Typography fontWeight={700}>Ampliar evidencia</Typography>
            </Box>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
            Publicación realizada el 17 de septiembre de 2026 en el Foro Temático #2.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mt: 2.25 }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Typography variant="overline" color="primary.main" fontWeight={800}>
            Lo que me aportó la rutina
          </Typography>
          <Typography color="text.secondary" lineHeight={1.82} sx={{ mt: 1.5 }}>
            Comparar ambos contextos me permitió organizar mejor las semejanzas y diferencias,
            evitando observar cada modelo de forma aislada. La rutina ayudó a relacionar la
            información y a comprender que un mismo propósito educativo puede abordarse mediante
            estructuras y prácticas distintas.
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
            alt="Captura ampliada del Foro Temático #2"
            sx={{ display: 'block', width: '100%', height: 'auto', borderRadius: 1 }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  )
}
