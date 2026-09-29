import {
  CheckCircleOutlineRounded,
  CodeRounded,
  DescriptionOutlined,
  EditNoteOutlined,
  FactCheckOutlined,
  GridViewOutlined,
  OpenInNewRounded,
  QuizOutlined,
  SchoolOutlined,
  TuneOutlined,
} from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material'

const instruments = [
  {
    number: '01',
    title: 'Prueba objetiva',
    icon: QuizOutlined,
    technique: 'Prueba escrita formal',
    focus: 'Dominio conceptual de los fundamentos de POO',
    detail:
      'Integra cuatro tipos de reactivos objetivos: selección simple, verdadero/falso, pareo y jerarquización, con tres ítems por tipo para un total de 12 ítems.',
    tags: ['4 reactivos', '12 ítems', '35 min'],
  },
  {
    number: '02',
    title: 'Prueba tipo ensayo',
    icon: EditNoteOutlined,
    technique: 'Prueba escrita de ensayo',
    focus: 'Análisis, argumentación y criterio propio',
    detail:
      'Propone dos preguntas de ensayo que combinan dominio conceptual, posición personal argumentada, aplicación a situaciones reales y ejemplos técnicos.',
    tags: ['2 preguntas', 'Argumentación', '45 min'],
  },
  {
    number: '03',
    title: 'Lista de cotejo',
    icon: FactCheckOutlined,
    technique: 'Observación sistemática',
    focus: 'Aplicación práctica del encapsulamiento',
    detail:
      'Evalúa el desarrollo de una clase Producto para un sistema de inventario mediante una escala dicotómica Sí/No y criterios verificables durante la práctica.',
    tags: ['Sí / No', '10 criterios', 'Práctica'],
  },
  {
    number: '04',
    title: 'Escala de valoración',
    icon: TuneOutlined,
    technique: 'Observación de demostración práctica',
    focus: 'Grado de logro en una solución orientada a objetos',
    detail:
      'Utiliza una escala común de cuatro niveles para valorar una demostración individual de 5 a 7 minutos, con seis criterios y un máximo de 24 puntos.',
    tags: ['4 niveles', '6 criterios', '24 puntos'],
  },
  {
    number: '05',
    title: 'Rúbrica analítica',
    icon: GridViewOutlined,
    technique: 'Valoración del desempeño y del producto',
    focus: 'Mini proyecto funcional de POO',
    detail:
      'Valora un mini proyecto de inventario mediante cuatro niveles cualitativos y descriptores específicos para orientar la retroalimentación y la mejora.',
    tags: ['4 niveles', '6 criterios', 'Formativa'],
  },
]

export default function InstrumentsPage() {
  const pdfUrl = import.meta.env.BASE_URL + 'documents/banco-instrumentos-evaluacion.pdf'

  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Actividad Individual #2 · Unidad III" color="primary" size="small" />
        <Typography variant="h2">Banco de instrumentos de evaluación.</Typography>
        <Typography color="text.secondary">
          Una propuesta aplicada al área de Desarrollo de Software para valorar distintos
          tipos de aprendizaje mediante instrumentos alineados con objetivos, indicadores
          y evidencias concretas.
        </Typography>
      </Box>

      <Card className="instrument-context-card">
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Box sx={{ maxWidth: 760 }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                <Box className="routine-section-icon">
                  <CodeRounded />
                </Box>
                <Box>
                  <Typography variant="overline" color="primary.main" fontWeight={800}>
                    Contexto de aplicación
                  </Typography>
                  <Typography variant="h5" fontWeight={800}>
                    Programación Orientada a Objetos
                  </Typography>
                </Box>
              </Stack>

              <Typography color="text.secondary" lineHeight={1.8}>
                El banco se construyó alrededor de fundamentos y aplicación de POO, de manera
                que cada instrumento responde a una competencia distinta: reconocer conceptos,
                argumentar decisiones, aplicar principios, demostrar desempeño y desarrollar
                una solución funcional.
              </Typography>
            </Box>

            <Box className="instrument-context-metrics">
              <Box>
                <strong>5</strong>
                <span>instrumentos</span>
              </Box>
              <Box>
                <strong>5</strong>
                <span>fichas didácticas</span>
              </Box>
              <Box>
                <strong>1</strong>
                <span>área integrada</span>
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Box className="instrument-bank-grid">
        {instruments.map(({ number, title, icon: Icon, technique, focus, detail, tags }) => (
          <Card key={title} className="instrument-bank-card">
            <CardContent sx={{ p: { xs: 3, md: 3.5 }, height: '100%' }}>
              <Stack sx={{ height: '100%' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box className="routine-section-icon">
                    <Icon />
                  </Box>
                  <Typography className="routine-number">{number}</Typography>
                </Stack>

                <Typography variant="overline" color="primary.main" fontWeight={800} sx={{ mt: 2.5 }}>
                  {technique}
                </Typography>
                <Typography variant="h5" fontWeight={800} sx={{ mt: 0.25 }}>
                  {title}
                </Typography>

                <Typography fontWeight={700} sx={{ mt: 1.5 }}>
                  {focus}
                </Typography>
                <Typography color="text.secondary" lineHeight={1.75} sx={{ mt: 1 }}>
                  {detail}
                </Typography>

                <Stack
                  direction="row"
                  spacing={0.8}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ mt: 'auto', pt: 2.5 }}
                >
                  {tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card sx={{ mt: 2.25 }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 820 }}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
              <Box className="routine-section-icon">
                <DescriptionOutlined />
              </Box>
              <Box>
                <Typography variant="overline" color="primary.main" fontWeight={800}>
                  Evidencia completa
                </Typography>
                <Typography variant="h5" fontWeight={800}>
                  Banco de instrumentos
                </Typography>
              </Box>
            </Stack>

            <Typography color="text.secondary" lineHeight={1.8}>
              El documento completo reúne las cinco fichas didácticas, sus objetivos e
              indicadores de logro, instrucciones de aplicación, instrumentos desarrollados,
              criterios de valoración y materiales de apoyo.
            </Typography>

            <Button
              component="a"
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              size="small"
              endIcon={<OpenInNewRounded />}
              sx={{ mt: 2.5, px: 2 }}
            >
              Abrir banco completo
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Alert
        severity="info"
        icon={<SchoolOutlined />}
        sx={{ mt: 2.25, alignItems: 'flex-start' }}
      >
        <Typography fontWeight={800} sx={{ mb: 0.5 }}>
          Transparencia sobre el uso de IA
        </Typography>
        ChatGPT se utilizó como herramienta de apoyo para organizar ideas, proponer reactivos
        y revisar la coherencia entre objetivos, indicadores e instrumentos. El contenido final
        fue revisado, contextualizado al área de Desarrollo de Software y validado por mí.
      </Alert>

      <Card sx={{ mt: 2.25 }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
            <Box className="routine-section-icon">
              <CheckCircleOutlineRounded />
            </Box>
            <Box>
              <Typography variant="overline" color="primary.main" fontWeight={800}>
                Aprendizaje aplicado
              </Typography>
              <Typography variant="h5" fontWeight={800}>
                No todos los aprendizajes se evalúan de la misma manera
              </Typography>
            </Box>
          </Stack>

          <Typography color="text.secondary" lineHeight={1.82}>
            La construcción del banco me permitió distinguir con mayor claridad cuándo conviene
            utilizar una prueba, una lista de cotejo, una escala o una rúbrica. Más que elegir un
            instrumento por costumbre, el reto está en relacionarlo con lo que realmente se espera
            que el estudiante demuestre y con la evidencia que permitirá valorar ese aprendizaje.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
