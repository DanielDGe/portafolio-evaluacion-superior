import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'

const drawerWidth = 292

export default function ReadingProgressBar() {
  const location = useLocation()
  const [progress, setProgress] = useState(0)
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    let frame

    const updateProgress = () => {
      frame = window.requestAnimationFrame(() => {
        const doc = document.documentElement
        const scrollRange = doc.scrollHeight - window.innerHeight
        const canScroll = scrollRange > 24

        setScrollable(canScroll)

        if (!canScroll) {
          setProgress(0)
          return
        }

        const value = Math.min(100, Math.max(0, (window.scrollY / scrollRange) * 100))
        setProgress(value)
      })
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [location.pathname])

  if (!scrollable) {
    return null
  }

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'fixed',
        top: { xs: 64, md: 0 },
        left: { xs: 0, md: `${drawerWidth}px` },
        right: 0,
        height: 3,
        zIndex: (theme) => theme.zIndex.drawer + 2,
        pointerEvents: 'none',
        bgcolor: 'transparent',
      }}
    >
      <Box
        sx={{
          width: `${progress}%`,
          height: '100%',
          bgcolor: 'primary.main',
          boxShadow: progress > 0 ? '0 0 8px color-mix(in srgb, var(--mui-palette-primary-main) 35%, transparent)' : 'none',
          transition: 'width 80ms linear',
        }}
      />
    </Box>
  )
}
