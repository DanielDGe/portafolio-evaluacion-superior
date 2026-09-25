import {
  ArrowForwardRounded,
  CheckCircleOutlineRounded,
  OpenInNewRounded,
} from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import { sqaDocuments } from '../data/portfolio.js'

const stages = [
  ['S', '¿Qué sé?', 'Reconocer los conocimientos y experiencias que ya tenía.'],
  ['Q', '¿Qué quiero saber?', 'Definir preguntas y aspectos que quería comprender mejor.'],
  ['A', '¿Qué aprendí?', 'Volver al final para identificar los aprendizajes construidos.'],
]

export default function SqaPage() {
  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Rutina 01 · SQA" color="primary" size="small" />
        <Typography variant="h2">Del punto de partida a lo que realmente aprendí.</Typography>
        <Typography color="text.secondary">
          La rutina SQA me permitió hacer visible el proceso completo: reconocer mis
          conocimientos iniciales, formular lo que quería aprender y volver al final para
          identificar los aprendizajes construidos.
        </Typography>
      </Box>

      <Box className="sqa-stage-grid">
        {stages.map(([letter, title, text], index) => (
          <Box className="sqa-stage" key={letter}>
            <Box className="sqa-letter">{letter}</Box>
            <Box>
              <Typography fontWeight={800}>{title}</Typography>
              <Typography variant="body2" color="text.secondary">{text}</Typography>
            </Box>
            {index < stages.length - 1 && <ArrowForwardRounded className="stage-arrow" />}
          </Box>
        ))}
      </Box>

      <Box className="document-grid-new">
        {sqaDocuments.map((document) => {
          const documentUrl = import.meta.env.BASE_URL + 'documents/' + document.file

          return (
            <Card key={document.phase} className="document-card-new">
              <CardContent sx={{ p: 3.5, flex: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                  <Chip label={document.phase} size="small" color="primary" variant="outlined" />
                  <Chip label="PDF" size="small" />
                </Stack>
                <Typography variant="h5" fontWeight={800} gutterBottom>
                  {document.title}
                </Typography>
                <Typography color="text.secondary" lineHeight={1.75}>
                  {document.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 3.5, pb: 3.5 }}>
                <Button
                  component="a"
                  href={documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  endIcon={<OpenInNewRounded />}
                >
                  Abrir evidencia
                </Button>
              </CardActions>
            </Card>
          )
        })}
      </Box>

      <Alert
        icon={<CheckCircleOutlineRounded />}
        severity="info"
        sx={{ mt: 2.5, alignItems: 'center' }}
      >
        Las evidencias se publican en PDF para conservar el formato original y permitir su
        consulta directa sin exponer versiones editables.
      </Alert>
    </Box>
  )
}
