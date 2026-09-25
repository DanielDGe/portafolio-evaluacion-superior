import { useState } from 'react'
import {
  CloseRounded,
  ForumOutlined,
  HelpOutlineRounded,
  OpenInFullRounded,
  PsychologyAltOutlined,
  VisibilityOutlined,
} from '@mui/icons-material'
import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'

const sections = [
  {
    id: 'observo',
    title: 'Observo',
    icon: VisibilityOutlined,
    paragraphs: [
      'En los videos observo que evaluar no consiste solamente en colocar una nota. Es un proceso que permite recoger información sobre lo que el estudiante sabe, analizar sus avances y tomar decisiones para mejorar su aprendizaje. Por eso, medir, calificar y evaluar no significan exactamente lo mismo: la calificación muestra un resultado, mientras que la evaluación ayuda a comprenderlo.',
      'También se explican varios tipos de evaluación. La diagnóstica se realiza al inicio para conocer los saberes, experiencias y habilidades del estudiante; la formativa se aplica durante el proceso para identificar avances y dificultades; y la sumativa se utiliza al final para comprobar los resultados alcanzados. Además, la evaluación alternativa busca adaptarse a las necesidades y capacidades de los estudiantes mediante proyectos, portafolios u otras actividades prácticas.',
      'Otro punto importante es que en la educación superior se deben evaluar los conocimientos, las habilidades y las actitudes. Es decir, no basta con saber la teoría; también es necesario demostrar cómo se aplica y actuar con responsabilidad, ética y disposición para trabajar con otras personas.',
    ],
  },
  {
    id: 'pienso',
    title: 'Pienso',
    icon: PsychologyAltOutlined,
    paragraphs: [
      'Pienso que muchas veces relacionamos la evaluación únicamente con un examen o una calificación final, cuando realmente debería acompañar todo el aprendizaje. La evaluación diagnóstica permite conocer desde dónde comienza el estudiante, la formativa ayuda a corregir dificultades a tiempo y la sumativa permite verificar los resultados obtenidos.',
      'También considero que la forma de evaluar debe relacionarse con lo que se espera que el estudiante aprenda. Por ejemplo, en el área de desarrollo de software no sería suficiente responder preguntas teóricas; también sería necesario resolver un problema, desarrollar una solución o trabajar en un proyecto. Esto permitiría demostrar no solo lo que se sabe, sino lo que se puede hacer con ese conocimiento.',
      'Me llamó especialmente la atención el reto que representa la inteligencia artificial. Considero que las evaluaciones deben enfocarse más en el proceso, la explicación de las decisiones y la aplicación práctica. De esta manera, la tecnología puede utilizarse como apoyo sin reemplazar el razonamiento del estudiante.',
    ],
  },
]

const questions = [
  '¿Cómo podemos evaluar los conocimientos, las habilidades y las actitudes de una manera justa y equilibrada?',
  '¿Qué estrategias puede utilizar el docente para dar una retroalimentación oportuna cuando tiene muchos estudiantes?',
  '¿Cómo deberían adaptarse las evaluaciones ante el uso cada vez mayor de la inteligencia artificial?',
]

export default function ObserveThinkWonderPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const evidenceImage = import.meta.env.BASE_URL + 'images/foro-observo-pienso-me-pregunto.png'
  const peerResponsesImage = import.meta.env.BASE_URL + 'images/respuestas-companeros-foro-ia.png'

  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Rutina 02 · Foro Temático #1 · Unidad I" color="primary" size="small" />
        <Typography variant="h2">Observo, pienso, me pregunto.</Typography>
        <Typography color="text.secondary">
          Esta rutina me permitió pasar de la observación de los materiales a la interpretación
          de sus ideas principales y, finalmente, formular preguntas que abren nuevas posibilidades
          de reflexión sobre la evaluación en educación superior.
        </Typography>
      </Box>

      <Alert severity="info" icon={<ForumOutlined />} sx={{ mb: 3, alignItems: 'center' }}>
        Esta actividad fue desarrollada y publicada directamente en el Foro Temático #1 de Canvas,
        tal como indicaban las instrucciones de la asignatura. El formato descargable se utilizó
        únicamente para organizar las ideas y no debía adjuntarse como archivo.
      </Alert>

      <Stack spacing={2.25}>
        {sections.map(({ id, title, icon: Icon, paragraphs }) => (
          <Card key={id}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
                <Box className="routine-section-icon">
                  <Icon />
                </Box>
                <Box>
                  <Typography variant="overline" color="primary.main" fontWeight={800}>
                    Rutina de pensamiento
                  </Typography>
                  <Typography variant="h5" fontWeight={800}>
                    {title}
                  </Typography>
                </Box>
              </Stack>

              <Stack spacing={1.8}>
                {paragraphs.map((paragraph) => (
                  <Typography key={paragraph} color="text.secondary" lineHeight={1.82}>
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
              <Box className="routine-section-icon">
                <HelpOutlineRounded />
              </Box>
              <Box>
                <Typography variant="overline" color="primary.main" fontWeight={800}>
                  Profundizar y cuestionar
                </Typography>
                <Typography variant="h5" fontWeight={800}>
                  Me pregunto
                </Typography>
              </Box>
            </Stack>

            <Stack component="ol" spacing={1.5} sx={{ m: 0, pl: 2.5 }}>
              {questions.map((question) => (
                <Typography component="li" key={question} color="text.secondary" lineHeight={1.75}>
                  {question}
                </Typography>
              ))}
            </Stack>
          </CardContent>
        </Card>

        <Card
          sx={{
            borderColor: 'primary.main',
            background:
              'linear-gradient(135deg, color-mix(in srgb, var(--mui-palette-primary-main) 8%, transparent), var(--mui-palette-background-paper))',
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Pregunta compartida con mis compañeros
            </Typography>
            <Typography
              variant="h5"
              fontWeight={800}
              sx={{ mt: 1, maxWidth: 900, lineHeight: 1.45 }}
            >
              ¿Cómo deberían adaptarse las evaluaciones ante el uso cada vez mayor de la
              inteligencia artificial, para valorar realmente el aprendizaje y no solamente
              el resultado final?
            </Typography>
          </CardContent>
        </Card>

        <Card>
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
                  Interacción con mis compañeros
                </Typography>
                <Typography variant="h6" fontWeight={800}>
                  Respuestas a la pregunta compartida
                </Typography>
              </Box>
              <Chip icon={<OpenInFullRounded />} label="Clic para ampliar" size="small" />
            </Stack>

            <Typography color="text.secondary" lineHeight={1.75} sx={{ mb: 2 }}>
              La pregunta generó tres respuestas dentro del foro. Para conservar la evidencia
              tal como fue publicada, presento las intervenciones originales en la siguiente captura.
            </Typography>

            <Box
              component="button"
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: peerResponsesImage,
                  alt: 'Respuestas de compañeras a la pregunta sobre inteligencia artificial y evaluación',
                })
              }
              aria-label="Ampliar respuestas de compañeros"
              className="forum-evidence-button"
            >
              <Box
                component="img"
                src={peerResponsesImage}
                alt="Respuestas de compañeras a la pregunta sobre inteligencia artificial y evaluación"
                className="forum-evidence-image"
              />
              <Box className="forum-evidence-overlay">
                <OpenInFullRounded />
                <Typography fontWeight={700}>Ampliar respuestas</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Lo que me dejó el intercambio
            </Typography>
            <Typography color="text.secondary" lineHeight={1.82} sx={{ mt: 1.5 }}>
              Las respuestas de mis compañeros reforzaron una idea que considero fundamental:
              ante el uso de la inteligencia artificial, la evaluación debe centrarse cada vez
              más en el proceso y no únicamente en el producto final. Surgieron propuestas como
              la explicación oral, la resolución de problemas, los proyectos contextualizados,
              las bitácoras y la argumentación de las decisiones tomadas.
            </Typography>
            <Typography color="text.secondary" lineHeight={1.82} sx={{ mt: 1.5 }}>
              También me pareció interesante la posibilidad de incorporar la inteligencia
              artificial dentro de algunas actividades de evaluación, siempre que exista
              transparencia sobre su uso y que el estudiante pueda demostrar qué aportó
              personalmente, cómo tomó sus decisiones y qué aprendió durante el proceso.
            </Typography>
          </CardContent>
        </Card>

        <Card>
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
                  Evidencia visual
                </Typography>
                <Typography variant="h6" fontWeight={800}>
                  Publicación original en Canvas
                </Typography>
              </Box>
              <Chip icon={<OpenInFullRounded />} label="Clic para ampliar" size="small" />
            </Stack>

            <Box
              component="button"
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: evidenceImage,
                  alt: 'Captura de la participación de Daniel García en el foro Observo, Pienso, Me pregunto',
                })
              }
              aria-label="Ampliar captura del foro"
              className="forum-evidence-button"
            >
              <Box
                component="img"
                src={evidenceImage}
                alt="Captura de la participación de Daniel García en el foro Observo, Pienso, Me pregunto"
                className="forum-evidence-image"
              />
              <Box className="forum-evidence-overlay">
                <OpenInFullRounded />
                <Typography fontWeight={700}>Ampliar evidencia</Typography>
              </Box>
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              Captura de la participación publicada el 9 de septiembre de 2026 en el Foro Temático #1.
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        maxWidth="xl"
        fullWidth
        PaperProps={{ sx: { bgcolor: 'background.paper' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar evidencia ampliada"
          >
            <CloseRounded />
          </IconButton>
        </Box>
        <DialogContent sx={{ pt: 0, pb: 3 }}>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage.src}
              alt={selectedImage.alt}
              sx={{ display: 'block', width: '100%', height: 'auto', borderRadius: 1 }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  )
}
