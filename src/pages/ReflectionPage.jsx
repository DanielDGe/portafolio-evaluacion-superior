import {
  AutoAwesomeOutlined,
  BalanceOutlined,
  CheckCircleOutlineRounded,
  DescriptionOutlined,
  InsightsOutlined,
  LightbulbOutlined,
  OpenInNewRounded,
  PsychologyAltOutlined,
  RouteOutlined,
  SchoolOutlined,
  TrendingUpOutlined,
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
import PdfEvidenceDialog from '../components/PdfEvidenceDialog.jsx'

const metacognitionSteps = [
  {
    number: '01',
    title: '¿Qué aprendí?',
    icon: LightbulbOutlined,
    text:
      'Comprendí con mayor claridad que la evaluación no es solo una calificación final, sino un proceso continuo que puede diagnosticar, acompañar y comprobar el aprendizaje. También fortalecí mi comprensión sobre la relación entre objetivos, competencias, indicadores, técnicas e instrumentos de evaluación.',
  },
  {
    number: '02',
    title: '¿Cómo lo aprendí?',
    icon: RouteOutlined,
    text:
      'El aprendizaje se construyó a través de los materiales y videos del curso, las rutinas de pensamiento, la comparación de sistemas de evaluación, la participación en foros y, especialmente, la elaboración práctica del banco de instrumentos aplicado al área de Desarrollo de Software.',
  },
  {
    number: '03',
    title: '¿Qué fue más desafiante?',
    icon: PsychologyAltOutlined,
    text:
      'Lo más exigente fue pasar de conocer conceptos por separado a relacionarlos de manera coherente: definir qué se espera que aprenda el estudiante, cómo se evidenciará ese aprendizaje y qué instrumento permitirá valorarlo con criterios claros y pertinentes.',
  },
  {
    number: '04',
    title: '¿Cómo puedo aplicarlo?',
    icon: TrendingUpOutlined,
    text:
      'Puedo trasladar estos aprendizajes a una futura práctica docente universitaria diseñando evaluaciones más coherentes, transparentes y orientadas a la mejora. En Desarrollo de Software, esto significa combinar conocimiento técnico con proyectos, prácticas, resolución de problemas y evidencias de desempeño.',
  },
]

const selfAssessment = [
  {
    title: 'Fortaleza que consolidé',
    icon: CheckCircleOutlineRounded,
    text:
      'Ahora tengo una visión más amplia de la evaluación y puedo distinguir mejor qué instrumento utilizar según el tipo de aprendizaje que se desea valorar.',
  },
  {
    title: 'Aspecto que seguiré fortaleciendo',
    icon: InsightsOutlined,
    text:
      'Quiero continuar mejorando la formulación de indicadores, criterios y niveles de desempeño para lograr evaluaciones cada vez más claras, justas y útiles para el estudiante.',
  },
  {
    title: 'Compromiso con mi práctica docente',
    icon: SchoolOutlined,
    text:
      'Me propongo utilizar la evaluación como una herramienta para acompañar el aprendizaje, brindar retroalimentación oportuna y tomar decisiones de mejora, no únicamente como un mecanismo para asignar una nota.',
  },
]

export default function ReflectionPage() {
  const pdfFile = 'sqa-parte-2-metacognicion.pdf'

  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Metacognición · Autoevaluación · Cierre" color="primary" size="small" />
        <Typography variant="h2">Mirar hacia atrás para entender cómo aprendí.</Typography>
        <Typography color="text.secondary">
          Esta reflexión recupera la metacognición desarrollada en la SQA Parte II y la
          presenta como cierre del proceso: qué aprendí, cómo construí ese aprendizaje,
          qué me resultó más desafiante y cómo puedo llevarlo a mi futura práctica docente.
        </Typography>
      </Box>

      <Alert severity="info" icon={<AutoAwesomeOutlined />} sx={{ mb: 3, alignItems: 'center' }}>
        La autoevaluación forma parte de la actividad SQA y se integra aquí de manera explícita
        como conclusión del portafolio.
      </Alert>

      <Box className="metacognition-ladder">
        {metacognitionSteps.map(({ number, title, icon: Icon, text }) => (
          <Card key={title} className="metacognition-step">
            <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Box className="metacognition-step-icon">
                  <Icon />
                </Box>

                <Box>
                  <Typography variant="overline" color="primary.main" fontWeight={800}>
                    Nivel {number}
                  </Typography>
                  <Typography variant="h5" fontWeight={800} sx={{ mt: 0.25 }}>
                    {title}
                  </Typography>
                  <Typography color="text.secondary" lineHeight={1.82} sx={{ mt: 1.5 }}>
                    {text}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card className="reflection-evidence-card">
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
            <Box className="routine-section-icon">
              <DescriptionOutlined />
            </Box>
            <Box>
              <Typography variant="overline" color="primary.main" fontWeight={800}>
                Evidencia de origen
              </Typography>
              <Typography variant="h5" fontWeight={800}>
                SQA Parte II + Metacognición
              </Typography>
            </Box>
          </Stack>

          <Typography color="text.secondary" lineHeight={1.8} sx={{ maxWidth: 820 }}>
            El documento conserva la rutina SQA completa y la autoevaluación metacognitiva
            desarrollada como parte de la actividad de aprendizaje.
          </Typography>

          <PdfEvidenceDialog
            file={pdfFile}
            title="SQA Parte II + Metacognición"
            subtitle="Evidencia de origen"
            buttonLabel="Abrir evidencia original"
            buttonVariant="contained"
            buttonSize="small"
            buttonSx={{ mt: 2.5, px: 2 }}
          />
        </CardContent>
      </Card>

      <Box sx={{ mt: 2.25 }}>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
          <Box className="routine-section-icon">
            <BalanceOutlined />
          </Box>
          <Box>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Autoevaluación final
            </Typography>
            <Typography variant="h5" fontWeight={800}>
              Lo que reconozco en mi propio proceso
            </Typography>
          </Box>
        </Stack>

        <Box className="self-assessment-grid">
          {selfAssessment.map(({ title, icon: Icon, text }) => (
            <Card key={title} className="self-assessment-card">
              <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                <Box className="routine-section-icon" sx={{ mb: 2 }}>
                  <Icon />
                </Box>
                <Typography variant="h6" fontWeight={800}>
                  {title}
                </Typography>
                <Typography color="text.secondary" lineHeight={1.78} sx={{ mt: 1.25 }}>
                  {text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Card className="reflection-closing-card">
        <CardContent sx={{ p: { xs: 3.5, md: 5 } }}>
          <Typography variant="overline" color="primary.main" fontWeight={800}>
            Cierre personal
          </Typography>
          <Typography variant="h4" fontWeight={800} sx={{ mt: 1, maxWidth: 900, lineHeight: 1.3 }}>
            Evaluar también es aprender a tomar mejores decisiones sobre la enseñanza.
          </Typography>
          <Typography color="text.secondary" lineHeight={1.88} sx={{ mt: 2, maxWidth: 900 }}>
            Al iniciar la asignatura ya comprendía que evaluar debía ir más allá de colocar una
            nota, pero el proceso me permitió profundizar en cómo convertir esa idea en decisiones
            concretas. Hoy entiendo mejor la importancia de alinear lo que se espera aprender con
            las actividades, las evidencias y los instrumentos utilizados para valorar ese
            aprendizaje.
          </Typography>
          <Typography color="text.secondary" lineHeight={1.88} sx={{ mt: 1.5, maxWidth: 900 }}>
            Me llevo una visión de la evaluación más formativa, práctica y consciente. Como futuro
            docente universitario, quiero que la evaluación permita al estudiante demostrar lo que
            sabe, lo que puede hacer y cómo puede seguir mejorando, especialmente en un área tan
            aplicada y cambiante como el Desarrollo de Software.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
