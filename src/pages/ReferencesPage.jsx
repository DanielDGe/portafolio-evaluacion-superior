import {
  ArticleOutlined,
  LaunchRounded,
  MenuBookOutlined,
  OndemandVideoOutlined,
  SchoolOutlined,
} from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  Chip,
  Link,
  Stack,
  Typography,
} from '@mui/material'

const academicSources = [
  {
    title: 'Consejo Nacional de Evaluación y Acreditación Universitaria de Panamá',
    detail: 'Leyes y marco normativo relacionado con evaluación y acreditación universitaria.',
    href: 'https://coneaupa.edu.pa/leyes/',
  },
  {
    title: 'Escobar, V. de. (2003)',
    detail:
      'La evaluación de la calidad de la educación superior en Panamá. VIII Congreso Internacional del CLAD sobre la Reforma del Estado y de la Administración Pública.',
  },
  {
    title: 'Jankowski, N. A., Timmer, J. D., Kinzie, J., & Kuh, G. D. (2018)',
    detail:
      'Assessment that matters: Trending toward practices that document authentic student learning. National Institute for Learning Outcomes Assessment.',
    href: 'https://eric.ed.gov/?id=ED590514',
  },
  {
    title: 'Medina, M. S., Smith, W. T., Kolluru, S., Sheaffer, E. A., & DiVall, M. (2019)',
    detail:
      'A review of strategies for designing, administering, and using student ratings of instruction. American Journal of Pharmaceutical Education, 83(5), 7177.',
    href: 'https://doi.org/10.5688/ajpe7177',
  },
  {
    title: 'U.S. Department of Education',
    detail: 'College accreditation.',
    href: 'https://www.ed.gov/laws-and-policy/higher-education-laws-and-policy/college-accreditation',
  },
  {
    title: 'Universidad Tecnológica de Panamá. (2026)',
    detail: 'Proceso de admisión para las carreras de pregrado.',
    href: 'https://utp.ac.pa/proceso-de-admision-para-las-carreras-de-pregrado',
  },
]

const courseMaterials = [
  {
    title: 'Hernández, T. (2015)',
    detail: 'Técnicas e instrumentos de evaluación del aprendizaje. Presentación utilizada en el curso.',
  },
  {
    title: 'González-Rodríguez, G. M. (2025)',
    detail:
      'Técnicas e instrumentos de evaluación de aprendizajes: Una guía sistemática para educadores de todos los niveles (2.ª ed.). Tecnodidáctica.',
  },
  {
    title: 'ISAE Universidad. (2026)',
    detail:
      'Formatos y guías de trabajo utilizados en las rutinas SQA, Compara y Contrasta, Conectar–Extender–Desafiar y Banco de Instrumentos de Evaluación.',
  },
]

const audiovisualSources = [
  {
    title: 'Evaluación en los procesos de Enseñanza y Aprendizaje',
    detail: 'Material audiovisual utilizado en el Foro Temático #1.',
    href: 'https://youtu.be/eZnSXLPtth4',
  },
  {
    title: 'Evaluación de los aprendizajes en la educación superior',
    detail: 'Material audiovisual utilizado en el Foro Temático #1.',
    href: 'https://vimeo.com/1212428428',
  },
  {
    title: 'Técnicas e Instrumentos de Evaluación',
    detail: 'Video del Dr. Gustavo M. González-Rodríguez utilizado para el Banco de Instrumentos.',
    href: 'https://www.youtube.com/watch?v=Tge-WpKIob0',
  },
]

function ReferenceItem({ title, detail, href, icon: Icon }) {
  return (
    <Card className="reference-item-card">
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Stack direction="row" spacing={1.75} alignItems="flex-start">
          <Box className="reference-item-icon">
            <Icon />
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography fontWeight={800} lineHeight={1.45}>
              {title}
            </Typography>
            <Typography color="text.secondary" lineHeight={1.7} sx={{ mt: 0.65 }}>
              {detail}
            </Typography>

            {href && (
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{
                  mt: 1.25,
                  display: 'inline-flex',
                  gap: 0.6,
                  alignItems: 'center',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                }}
              >
                Consultar fuente
                <LaunchRounded sx={{ fontSize: 16 }} />
              </Link>
            )}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default function ReferencesPage() {
  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Referencias · Fuentes consultadas" color="primary" size="small" />
        <Typography variant="h2">Referencias y materiales consultados.</Typography>
        <Typography color="text.secondary">
          Esta sección reúne las principales fuentes académicas, institucionales y
          audiovisuales que apoyaron las actividades presentadas en el portafolio.
          Se consolidan en una sola lista para evitar repeticiones entre evidencias.
        </Typography>
      </Box>

      <Card className="references-intro-card">
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            justifyContent="space-between"
          >
            <Box sx={{ maxWidth: 760 }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                <Box className="routine-section-icon">
                  <MenuBookOutlined />
                </Box>
                <Box>
                  <Typography variant="overline" color="primary.main" fontWeight={800}>
                    Criterio de organización
                  </Typography>
                  <Typography variant="h5" fontWeight={800}>
                    Una bibliografía consolidada
                  </Typography>
                </Box>
              </Stack>

              <Typography color="text.secondary" lineHeight={1.8}>
                Las referencias se presentan de acuerdo con el tipo de fuente y corresponden
                a materiales utilizados en las actividades del curso. Cuando existe un recurso
                público, se incluye un enlace directo para facilitar su consulta.
              </Typography>
            </Box>

            <Box className="reference-metrics">
              <Box>
                <strong>{academicSources.length}</strong>
                <span>académicas y oficiales</span>
              </Box>
              <Box>
                <strong>{courseMaterials.length}</strong>
                <span>materiales del curso</span>
              </Box>
              <Box>
                <strong>{audiovisualSources.length}</strong>
                <span>recursos audiovisuales</span>
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Box className="references-section">
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
          <Box className="routine-section-icon">
            <ArticleOutlined />
          </Box>
          <Box>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Fuentes de apoyo
            </Typography>
            <Typography variant="h5" fontWeight={800}>
              Académicas e institucionales
            </Typography>
          </Box>
        </Stack>

        <Box className="references-grid">
          {academicSources.map((source) => (
            <ReferenceItem key={source.title} {...source} icon={ArticleOutlined} />
          ))}
        </Box>
      </Box>

      <Box className="references-section">
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
          <Box className="routine-section-icon">
            <SchoolOutlined />
          </Box>
          <Box>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Base de las actividades
            </Typography>
            <Typography variant="h5" fontWeight={800}>
              Materiales del curso
            </Typography>
          </Box>
        </Stack>

        <Box className="references-grid references-grid-compact">
          {courseMaterials.map((source) => (
            <ReferenceItem key={source.title} {...source} icon={SchoolOutlined} />
          ))}
        </Box>
      </Box>

      <Box className="references-section">
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
          <Box className="routine-section-icon">
            <OndemandVideoOutlined />
          </Box>
          <Box>
            <Typography variant="overline" color="primary.main" fontWeight={800}>
              Recursos multimedia
            </Typography>
            <Typography variant="h5" fontWeight={800}>
              Materiales audiovisuales
            </Typography>
          </Box>
        </Stack>

        <Box className="references-grid references-grid-compact">
          {audiovisualSources.map((source) => (
            <ReferenceItem key={source.title} {...source} icon={OndemandVideoOutlined} />
          ))}
        </Box>
      </Box>

      <Card className="references-note-card">
        <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
          <Typography variant="overline" color="primary.main" fontWeight={800}>
            Nota
          </Typography>
          <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 0.75 }}>
            Las fuentes se mantienen vinculadas a las actividades en las que fueron utilizadas.
            Los documentos internos del aula virtual se identifican como materiales del curso,
            mientras que los recursos públicos conservan un enlace de consulta.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
