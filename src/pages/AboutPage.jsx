import {
  AutoStoriesOutlined,
  CodeRounded,
  PsychologyAltOutlined,
  SchoolOutlined,
  TerminalRounded,
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material'

const profileAreas = [
  {
    title: 'Perfil profesional',
    icon: CodeRounded,
    text:
      'Mi experiencia profesional se desarrolla en el área de Desarrollo de Software, donde trabajo con análisis, programación y construcción de soluciones tecnológicas. Esa experiencia práctica es una base que quiero trasladar al aula universitaria.',
  },
  {
    title: 'Formación académica',
    icon: SchoolOutlined,
    text:
      'Cuento con una Especialización y una Maestría en Ingeniería de Software, y actualmente curso la Maestría en Docencia Superior. Esta combinación me permite integrar la formación técnica con una preparación pedagógica orientada a la educación universitaria.',
  },
  {
    title: 'Enfoque docente',
    icon: PsychologyAltOutlined,
    text:
      'Me interesa una docencia clara, práctica y reflexiva, donde el estudiante pueda comprender los conceptos, aplicarlos en situaciones reales, recibir retroalimentación y reconocer cómo puede seguir mejorando.',
  },
]

export default function AboutPage() {
  const profilePhoto = import.meta.env.BASE_URL + 'images/daniel-garcia.jpg'

  return (
    <Box className="page-shell">
      <Box className="page-heading">
        <Chip label="Sobre mí · Autor" color="primary" size="small" />
        <Typography variant="h2">Daniel García</Typography>
        <Typography color="text.secondary">
          Desarrollo de Software y Docencia Superior como dos áreas que se complementan
          en mi formación y en la manera en que entiendo el aprendizaje.
        </Typography>
      </Box>

      <Card className="about-profile-card">
        <CardContent sx={{ p: { xs: 3, md: 4.5 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 3, md: 4 }}
            alignItems="flex-start"
          >
            <Avatar
              className="about-avatar"
              src={profilePhoto}
              alt="Daniel García"
              imgProps={{ loading: 'eager' }}
            >
              DG
            </Avatar>

            <Box sx={{ flex: 1 }}>
              <Typography variant="overline" color="primary.main" fontWeight={800}>
                Mi punto de encuentro
              </Typography>
              <Typography variant="h4" fontWeight={800} sx={{ mt: 0.5, lineHeight: 1.25 }}>
                Tecnología para construir. Docencia para acompañar el aprendizaje.
              </Typography>
              <Typography
                color="text.secondary"
                lineHeight={1.85}
                sx={{ mt: 2, maxWidth: 780 }}
              >
                Mi interés por la docencia universitaria nace de la posibilidad de compartir
                conocimientos desde la experiencia profesional, pero también de aprender a
                enseñar de una manera más consciente. No se trata solamente de explicar cómo
                funciona una tecnología, sino de crear condiciones para que el estudiante
                comprenda, practique, cuestione y pueda resolver problemas por sí mismo.
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="wrap"
                sx={{ mt: 2.5 }}
              >
                <Chip icon={<CodeRounded />} label="Desarrollo de Software" />
                <Chip icon={<SchoolOutlined />} label="Docencia Superior" />
                <Chip icon={<AutoStoriesOutlined />} label="Aprendizaje aplicado" />
              </Stack>
            </Box>

            <Box className="about-code-panel">
              <TerminalRounded />
              <span>
                perfil: <b>software + educación</b>
              </span>
              <span>
                enfoque: <b>aprender haciendo</b>
              </span>
              <span>
                objetivo: <b>enseñar con propósito</b>
              </span>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Box className="about-area-grid">
        {profileAreas.map(({ title, icon: Icon, text }) => (
          <Card key={title} className="about-area-card">
            <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
              <Box className="routine-section-icon" sx={{ mb: 2 }}>
                <Icon />
              </Box>
              <Typography variant="h6" fontWeight={800}>
                {title}
              </Typography>
              <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 1.25 }}>
                {text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card className="about-closing-card">
        <CardContent sx={{ p: { xs: 3.5, md: 4.5 } }}>
          <Typography variant="overline" color="primary.main" fontWeight={800}>
            Lo que quiero llevar al aula
          </Typography>
          <Typography variant="h5" fontWeight={800} sx={{ mt: 0.75 }}>
            Una enseñanza conectada con problemas reales y una evaluación que ayude a mejorar.
          </Typography>
          <Typography color="text.secondary" lineHeight={1.85} sx={{ mt: 1.75, maxWidth: 900 }}>
            En un área como Desarrollo de Software, considero importante que el estudiante no
            se limite a memorizar conceptos. Quiero que pueda explicar sus decisiones, construir
            soluciones, cometer errores dentro de un proceso acompañado y utilizar la evaluación
            como una oportunidad para reconocer qué logró y qué necesita seguir fortaleciendo.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
