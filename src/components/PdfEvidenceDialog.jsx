import { useState } from 'react'
import {
  CloseRounded,
  DownloadRounded,
  OpenInFullRounded,
  PictureAsPdfRounded,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

export default function PdfEvidenceDialog({
  file,
  title,
  subtitle = 'Evidencia PDF',
  buttonLabel = 'Abrir evidencia',
  buttonVariant = 'text',
  buttonSize = 'medium',
  buttonSx,
}) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const fileUrl = import.meta.env.BASE_URL + 'documents/' + file

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        variant={buttonVariant}
        size={buttonSize}
        endIcon={<OpenInFullRounded />}
        sx={buttonSx}
      >
        {buttonLabel}
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={fullScreen}
        maxWidth={false}
        fullWidth
        aria-labelledby="pdf-evidence-title"
        PaperProps={{
          sx: {
            width: fullScreen ? '100%' : 'min(1500px, calc(100vw - 40px))',
            height: fullScreen ? '100%' : 'min(940px, calc(100vh - 40px))',
            maxHeight: 'none',
            overflow: 'hidden',
            borderRadius: fullScreen ? 0 : 3,
            bgcolor: 'background.paper',
          },
        }}
      >
        <Box className="pdf-modal-toolbar">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            alignItems={{ xs: 'stretch', sm: 'center' }}
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1.25} alignItems="center" sx={{ minWidth: 0 }}>
              <Box className="pdf-modal-icon">
                <PictureAsPdfRounded />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Stack direction="row" spacing={0.75} alignItems="center" useFlexGap flexWrap="wrap">
                  <Chip label="Evidencia PDF" size="small" color="primary" variant="outlined" />
                  {subtitle && (
                    <Typography variant="caption" color="text.secondary">
                      {subtitle}
                    </Typography>
                  )}
                </Stack>
                <Typography
                  id="pdf-evidence-title"
                  variant="h6"
                  fontWeight={800}
                  sx={{ mt: 0.35, lineHeight: 1.25 }}
                >
                  {title}
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <Button
                component="a"
                href={fileUrl}
                download={file}
                variant="outlined"
                startIcon={<DownloadRounded />}
              >
                Descargar
              </Button>
              <IconButton
                onClick={() => setOpen(false)}
                aria-label="Cerrar evidencia PDF"
                sx={{ border: 1, borderColor: 'divider' }}
              >
                <CloseRounded />
              </IconButton>
            </Stack>
          </Stack>
        </Box>

        <DialogContent className="pdf-modal-content">
          <Box
            component="iframe"
            src={fileUrl}
            title={`PDF: ${title}`}
            className="pdf-modal-frame"
          />
        </DialogContent>

        <Box className="pdf-modal-footer">
          <Typography variant="body2" color="text.secondary">
            Cierra esta ventana para continuar exactamente desde la sección donde estabas.
          </Typography>
        </Box>
      </Dialog>
    </>
  )
}
