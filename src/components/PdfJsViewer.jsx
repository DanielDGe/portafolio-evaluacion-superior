import { useEffect, useRef, useState } from 'react'
import {
  FitScreenRounded,
  ZoomInRounded,
  ZoomOutRounded,
} from '@mui/icons-material'
import {
  Alert,
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'

const PDFJS_VERSION = '6.3.289'
const PDFJS_MODULE_URL =
  `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.min.mjs`
const PDFJS_WORKER_URL =
  `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`

let pdfJsPromise

function loadPdfJs() {
  if (!pdfJsPromise) {
    pdfJsPromise = import(/* @vite-ignore */ PDFJS_MODULE_URL).then((pdfjs) => {
      pdfjs.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL
      return pdfjs
    })
  }

  return pdfJsPromise
}

function PdfPageCanvas({ pdf, pageNumber, availableWidth, zoom }) {
  const canvasRef = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let active = true
    let renderTask

    const renderPage = async () => {
      setStatus('loading')

      try {
        const page = await pdf.getPage(pageNumber)
        if (!active) return

        const baseViewport = page.getViewport({ scale: 1 })
        const desiredWidth = Math.max(260, availableWidth * zoom)
        const scale = desiredWidth / baseViewport.width
        const viewport = page.getViewport({ scale })
        const canvas = canvasRef.current

        if (!canvas) return

        const context = canvas.getContext('2d', { alpha: false })
        const outputScale = Math.min(window.devicePixelRatio || 1, 2)

        canvas.width = Math.floor(viewport.width * outputScale)
        canvas.height = Math.floor(viewport.height * outputScale)
        canvas.style.width = `${Math.floor(viewport.width)}px`
        canvas.style.height = `${Math.floor(viewport.height)}px`

        renderTask = page.render({
          canvasContext: context,
          viewport,
          transform:
            outputScale !== 1
              ? [outputScale, 0, 0, outputScale, 0, 0]
              : null,
        })

        await renderTask.promise
        if (active) setStatus('ready')
      } catch (error) {
        if (active && error?.name !== 'RenderingCancelledException') {
          setStatus('error')
        }
      }
    }

    renderPage()

    return () => {
      active = false
      renderTask?.cancel()
    }
  }, [pdf, pageNumber, availableWidth, zoom])

  return (
    <Box className="pdfjs-page-shell">
      <Typography className="pdfjs-page-label">
        Página {pageNumber}
      </Typography>

      <Box className="pdfjs-page-canvas-wrap">
        {status === 'loading' && (
          <Box className="pdfjs-page-loading">
            <CircularProgress size={24} />
          </Box>
        )}

        {status === 'error' && (
          <Typography color="error" variant="body2" sx={{ p: 2 }}>
            No se pudo renderizar esta página.
          </Typography>
        )}

        <canvas
          ref={canvasRef}
          className="pdfjs-page-canvas"
          aria-label={`Página ${pageNumber} del documento PDF`}
        />
      </Box>
    </Box>
  )
}

export default function PdfJsViewer({ fileUrl }) {
  const containerRef = useRef(null)
  const [pdf, setPdf] = useState(null)
  const [numPages, setNumPages] = useState(0)
  const [availableWidth, setAvailableWidth] = useState(900)
  const [zoom, setZoom] = useState(1)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const node = containerRef.current
    if (!node) return undefined

    const updateWidth = () => {
      const width = Math.max(320, node.clientWidth - 32)
      setAvailableWidth(Math.min(width, 1120))
    }

    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let active = true
    let loadingTask
    let loadedPdf

    const loadDocument = async () => {
      setStatus('loading')
      setError('')

      try {
        const pdfjs = await loadPdfJs()
        if (!active) return

        loadingTask = pdfjs.getDocument({ url: fileUrl })
        loadedPdf = await loadingTask.promise

        if (!active) {
          await loadedPdf.destroy()
          return
        }

        setPdf(loadedPdf)
        setNumPages(loadedPdf.numPages)
        setStatus('ready')
      } catch (loadError) {
        if (active) {
          setError(
            'No se pudo cargar el visor PDF. Puedes descargar el documento desde el botón superior.',
          )
          setStatus('error')
        }
      }
    }

    loadDocument()

    return () => {
      active = false
      loadingTask?.destroy()
      loadedPdf?.destroy()
    }
  }, [fileUrl])

  const zoomOut = () => setZoom((value) => Math.max(0.7, Number((value - 0.1).toFixed(1))))
  const zoomIn = () => setZoom((value) => Math.min(1.6, Number((value + 0.1).toFixed(1))))
  const resetZoom = () => setZoom(1)

  return (
    <Box ref={containerRef} className="pdfjs-viewer">
      <Box className="pdfjs-toolbar">
        <Typography variant="body2" fontWeight={700}>
          {status === 'ready' ? `${numPages} ${numPages === 1 ? 'página' : 'páginas'}` : 'Documento PDF'}
        </Typography>

        <Stack direction="row" spacing={0.4} alignItems="center">
          <Tooltip title="Alejar">
            <span>
              <IconButton
                size="small"
                onClick={zoomOut}
                disabled={status !== 'ready' || zoom <= 0.7}
                aria-label="Alejar PDF"
              >
                <ZoomOutRounded fontSize="small" />
              </IconButton>
            </span>
          </Tooltip>

          <Typography className="pdfjs-zoom-value">
            {Math.round(zoom * 100)}%
          </Typography>

          <Tooltip title="Acercar">
            <span>
              <IconButton
                size="small"
                onClick={zoomIn}
                disabled={status !== 'ready' || zoom >= 1.6}
                aria-label="Acercar PDF"
              >
                <ZoomInRounded fontSize="small" />
              </IconButton>
            </span>
          </Tooltip>

          <Tooltip title="Ajustar al ancho">
            <span>
              <IconButton
                size="small"
                onClick={resetZoom}
                disabled={status !== 'ready' || zoom === 1}
                aria-label="Ajustar PDF al ancho"
              >
                <FitScreenRounded fontSize="small" />
              </IconButton>
            </span>
          </Tooltip>
        </Stack>
      </Box>

      <Box className="pdfjs-scroll-area">
        {status === 'loading' && (
          <Box className="pdfjs-document-loading">
            <CircularProgress size={32} />
            <Typography color="text.secondary">
              Cargando documento…
            </Typography>
          </Box>
        )}

        {status === 'error' && (
          <Alert severity="warning" sx={{ m: 2 }}>
            {error}
          </Alert>
        )}

        {status === 'ready' &&
          Array.from({ length: numPages }, (_, index) => (
            <PdfPageCanvas
              key={index + 1}
              pdf={pdf}
              pageNumber={index + 1}
              availableWidth={availableWidth}
              zoom={zoom}
            />
          ))}
      </Box>
    </Box>
  )
}
