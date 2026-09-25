import {
  ArrowForwardRounded,
  AutoStoriesOutlined,
  CodeRounded,
  FactCheckOutlined,
  SchoolOutlined,
} from '@mui/icons-material'
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const metrics = [
  { value: '4', label: 'Rutinas de pensamiento', icon: AutoStoriesOutlined },
  { value: '1', label: 'Banco de instrumentos', icon: FactCheckOutlined },
  { value: '40%', label: 'Valor del proyecto final', icon: SchoolOutlined },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Box className="page-shell">
      <Box className="home-hero">
        <Box>
          <Chip
            label="Sistemas de Evaluación aplicados a la Educación Superior"
            color="primary"
            variant="outlined"
            size="small"
            sx={{ mb: 3, fontWeight: 700 }}
          />
          <Typography component="h1" variant="h1" className="home-title">
            Aprender a evaluar también significa aprender a mirar el proceso.
          </Typography>
          <Typography className="home-lead" color="text.secondary">
            Este portafolio reúne evidencias, reflexiones y aprendizajes construidos durante
            la asignatura, conectando mi experiencia en desarrollo de software con mi
            formación como futuro docente universitario.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardRounded />}
              onClick={() => navigate('/aprendizaje')}
            >
              Explorar mi aprendizaje
            </Button>
            <Button variant="outlined" size="large" onClick={() => navigate('/proposito')}>
              Conocer el propósito
            </Button>
          </Stack>
        </Box>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
        >
          <Card className="profile-card">
            <CardContent sx={{ p: 3.5 }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
                <Box className="profile-code-icon">
                  <CodeRounded />
                </Box>
                <Box>
                  <Typography fontWeight={800}>Daniel García</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Desarrollo de Software + Docencia Superior
                  </Typography>
                </Box>
              </Stack>
              <Box className="code-panel">
                <span><b>estudiante</b>: Daniel García</span>
                <span><b>área</b>: Desarrollo de Software</span>
                <span><b>formación</b>: Docencia Superior</span>
                <span><b>modalidad</b>: Portafolio Digital</span>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2.5 }}>
                Una propuesta académica con identidad tecnológica, organizada para mostrar
                evidencias y reflexión, no solo productos terminados.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Box>

      <Box className="metrics-grid">
        {metrics.map(({ value, label, icon: Icon }) => (
          <Card key={label}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4" fontWeight={800}>{value}</Typography>
                  <Typography variant="body2" color="text.secondary">{label}</Typography>
                </Box>
                <Box className="metric-icon"><Icon /></Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
