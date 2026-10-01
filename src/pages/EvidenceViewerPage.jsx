import { useEffect } from 'react'
import {
  ArrowBackRounded,
  DownloadRounded,
  PictureAsPdfRounded,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import { Link as RouterLink, Navigate, useParams } from 'react-router-dom'
import { evidenceDocuments } from '../data/evidenceDocuments.js'

export default function EvidenceViewerPage() {
  const { evidenceId } = useParams()
  const evidence = evidenceDocuments[evidenceId]

  useEffect(() => {
    if (!evidence) return undefined

    const previousTitle = document.title
    document.title = `${evidence.title} | Portafolio Digital`

    return () => {
      document.title = previousTitle
    }
  }, [evidence])

  if (!evidence) {
    return <Navigate to="/" replace />
  }

  const fileUrl = import.meta.env.BASE_URL + 'documents/' + evidence.file

  return (
    <Box className="page-shell evidence-viewer-page">
      <Card className="evidence-viewer-card">
        <Box className="evidence-viewer-toolbar">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            alignItems={{ xs: 'stretch', md: 'center' }}
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ minWidth: 0 }}>
              <Box className="evidence-viewer-icon">
                <PictureAsPdfRounded />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Stack direction="row" spacing={1} alignItems="center" useFlexGap flexWrap="wrap">
                  <Chip label="Evidencia PDF" size="small" color="primary" variant="outlined" />
                  <Typography variant="caption" color="text.secondary">
                    {evidence.subtitle}
                  </Typography>
                </Stack>
                <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>
                  {evidence.title}
                </Typography>
              </Box>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Button
                component={RouterLink}
                to={evidence.backPath}
                variant="outlined"
                startIcon={<ArrowBackRounded />}
              >
                {evidence.backLabel}
              </Button>
              <Button
                component="a"
                href={fileUrl}
                download={evidence.file}
                variant="contained"
                startIcon={<DownloadRounded />}
              >
                Descargar PDF
              </Button>
            </Stack>
          </Stack>
        </Box>

        <Box className="evidence-viewer-frame-wrap">
          <Box
            component="iframe"
            src={fileUrl}
            title={`PDF: ${evidence.title}`}
            className="evidence-viewer-frame"
          />
        </Box>

        <Box className="evidence-viewer-fallback">
          <Typography variant="body2" color="text.secondary">
            Si tu navegador no muestra el PDF integrado, puedes descargarlo con el botón superior.
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}
