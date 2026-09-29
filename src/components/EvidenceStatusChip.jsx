import { CheckCircleRounded } from '@mui/icons-material'
import { Chip } from '@mui/material'

export default function EvidenceStatusChip({ label = 'Evidencia disponible' }) {
  return (
    <Chip
      className="evidence-status-chip"
      icon={<CheckCircleRounded />}
      label={label}
      size="small"
      color="success"
      variant="outlined"
    />
  )
}
