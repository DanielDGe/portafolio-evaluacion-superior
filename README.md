# Portafolio Digital — Sistemas de Evaluación aplicados a la Educación Superior

Proyecto final académico de **Daniel García**, desarrollado como una aplicación web para presentar evidencias, reflexión y aprendizaje de la asignatura.

## Stack

- React + Vite
- Material UI (MUI)
- React Router
- Framer Motion
- GitHub Pages

## Desarrollo local

```bash
git pull
npm install
npm run dev
```

Después de esta refactorización es necesario ejecutar `npm install` porque se incorporaron nuevas dependencias.

## Arquitectura

El portafolio utiliza navegación lateral y pantallas independientes:

- Inicio
- Propósito
- Aprendizaje
  - SQA
  - Veo, pienso, me pregunto
  - Compara y contrasta
  - Conectar, extender, desafiar
- Banco de instrumentos
- Metacognición / Autoevaluación
- Sobre mí
- Referencias

La navegación usa `HashRouter` para ser compatible con GitHub Pages sin configuración adicional de rutas.

## Tema visual

- Modo claro académico por defecto.
- Modo oscuro opcional.
- El tema seleccionado se conserva en `localStorage`.
- La identidad queda preparada para incorporar posteriormente el logo institucional de ISAE Universidad.

## Evidencias

Los documentos se publican en `public/documents/` usando nombres seguros para web. Actualmente:

- `sqa-parte-1.pdf`
- `sqa-parte-2-metacognicion.pdf`
