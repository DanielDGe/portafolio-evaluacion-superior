const learningItems = [
  {
    number: '01',
    title: 'SQA',
    subtitle: 'Sé · Quiero saber · Aprendí',
    description:
      'Una mirada inicial y final a lo que sabía, lo que quería comprender y lo que realmente aprendí.',
    available: true,
    target: 'sqa-evidence',
  },
  {
    number: '02',
    title: 'Veo, pienso, me pregunto',
    subtitle: 'Observar antes de concluir',
    description:
      'Una rutina para separar la observación, la interpretación y las preguntas que nacen del análisis.',
  },
  {
    number: '03',
    title: 'Compara y contrasta',
    subtitle: 'Encontrar relaciones',
    description:
      'Análisis de semejanzas y diferencias para comprender mejor los sistemas de evaluación.',
  },
  {
    number: '04',
    title: 'Conectar, extender, desafiar',
    subtitle: 'Construir sobre lo aprendido',
    description:
      'Conexiones con conocimientos previos, nuevas ideas y preguntas que todavía invitan a seguir aprendiendo.',
  },
]

const sqaDocuments = [
  {
    phase: 'Parte I',
    title: 'Punto de partida',
    description:
      'La primera parte de la rutina SQA recoge lo que sabía sobre la evaluación y aquello que quería comprender al iniciar la asignatura.',
    file: 'Actividad No. 1 - Rutina SQA Parte 1.pdf',
  },
  {
    phase: 'Parte II',
    title: 'Aprendizaje y reflexión',
    description:
      'La segunda parte completa la rutina con lo aprendido e incorpora la reflexión metacognitiva desarrollada al cierre del proceso.',
    file: 'Actividad No. 3 - SQA Parte II + Metacognición.pdf',
  },
]

const criteria = [
  'Presentación y propósito',
  'Identificación del autor',
  'Rutinas de pensamiento',
  'Banco de instrumentos',
  'Metacognición y autoevaluación',
]

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('inicio')} aria-label="Ir al inicio">
          <span className="brand-mark">DG</span>
          <span className="brand-copy">
            <strong>Portafolio Digital</strong>
            <small>Docencia Superior · 2026</small>
          </span>
        </button>

        <nav className="nav" aria-label="Navegación principal">
          <button onClick={() => scrollTo('proposito')}>Propósito</button>
          <button onClick={() => scrollTo('aprendizaje')}>Aprendizaje</button>
          <button onClick={() => scrollTo('instrumentos')}>Instrumentos</button>
          <button onClick={() => scrollTo('cierre')}>Cierre</button>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Sistemas de Evaluación aplicados a la Educación Superior
            </div>

            <h1>
              Evaluar no es solo
              <span> medir un resultado.</span>
            </h1>

            <p className="hero-lead">
              Este portafolio reúne las evidencias, reflexiones y aprendizajes construidos
              durante la asignatura, integrando mi experiencia en desarrollo de software
              con mi formación como futuro docente universitario.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo('aprendizaje')}>
                Explorar mi aprendizaje
                <span aria-hidden="true">→</span>
              </button>
              <button className="secondary-button" onClick={() => scrollTo('autor')}>
                Conocer al autor
              </button>
            </div>

            <div className="hero-metrics" aria-label="Resumen del portafolio">
              <div>
                <strong>4</strong>
                <span>Rutinas de pensamiento</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Banco de instrumentos</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Aprendizaje reflexivo</span>
              </div>
            </div>
          </div>

          <aside className="hero-card" aria-label="Resumen académico">
            <div className="terminal-head">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              <p><span className="terminal-key">estudiante</span>: Daniel García</p>
              <p><span className="terminal-key">área</span>: Desarrollo de Software</p>
              <p><span className="terminal-key">enfoque</span>: Docencia Superior</p>
              <p><span className="terminal-key">modalidad</span>: Portafolio Digital</p>
              <div className="terminal-status">
                <span className="status-dot" />
                <span>Aprendizaje en construcción</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section section-grid" id="proposito">
          <div>
            <span className="section-kicker">01 · Propósito</span>
            <h2>Una evidencia de proceso, no una simple colección de tareas.</h2>
          </div>
          <div className="section-copy">
            <p>
              Mi propósito con este portafolio es organizar y hacer visible el recorrido de
              aprendizaje desarrollado durante la asignatura. Más que cumplir con un
              requisito académico, busco conservar una evidencia de cómo ha evolucionado
              mi manera de comprender la evaluación en educación superior.
            </p>
            <p>
              También representa un punto de encuentro entre dos áreas que forman parte de
              mi desarrollo profesional: la tecnología y la docencia.
            </p>
          </div>
        </section>

        <section className="section" id="aprendizaje">
          <div className="section-heading">
            <div>
              <span className="section-kicker">02 · Evidencias de aprendizaje</span>
              <h2>Rutinas que hicieron visible mi pensamiento.</h2>
            </div>
            <p>
              Cada rutina documenta una forma distinta de observar, analizar, relacionar
              ideas y reflexionar sobre mi propio aprendizaje.
            </p>
          </div>

          <div className="learning-grid">
            {learningItems.map((item) => (
              <article className="learning-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <div>
                  <small>{item.subtitle}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                {item.available ? (
                  <button
                    className="card-link card-link-button"
                    type="button"
                    onClick={() => scrollTo(item.target)}
                  >
                    Ver evidencia <span>→</span>
                  </button>
                ) : (
                  <span className="card-link">Próximamente <span>↗</span></span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section sqa-section" id="sqa-evidence">
          <div className="sqa-heading">
            <div>
              <span className="section-kicker">Rutina 01 · SQA</span>
              <h2>Del punto de partida a lo que realmente aprendí.</h2>
            </div>
            <p>
              La rutina SQA me permitió hacer visible el proceso completo: reconocer mis
              conocimientos iniciales, formular lo que quería aprender y volver al final
              para identificar los aprendizajes construidos.
            </p>
          </div>

          <div className="sqa-flow" aria-hidden="true">
            <span><strong>S</strong> ¿Qué sé?</span>
            <i>→</i>
            <span><strong>Q</strong> ¿Qué quiero saber?</span>
            <i>→</i>
            <span><strong>A</strong> ¿Qué aprendí?</span>
          </div>

          <div className="document-grid">
            {sqaDocuments.map((document) => {
              const documentUrl = `${import.meta.env.BASE_URL}documents/${encodeURIComponent(document.file)}`

              return (
                <article className="document-card" key={document.phase}>
                  <div className="document-card-top">
                    <span className="document-phase">{document.phase}</span>
                    <span className="pdf-badge">PDF</span>
                  </div>
                  <div>
                    <h3>{document.title}</h3>
                    <p>{document.description}</p>
                  </div>
                  <a
                    className="document-link"
                    href={documentUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir evidencia
                    <span>↗</span>
                  </a>
                </article>
              )
            })}
          </div>

          <div className="sqa-note">
            <span className="note-icon">✓</span>
            <p>
              Ambas evidencias están publicadas en formato PDF para conservar el formato
              original del trabajo y permitir su consulta directa desde el portafolio.
            </p>
          </div>
        </section>

        <section className="section feature-section" id="instrumentos">
          <div className="feature-card">
            <div className="feature-copy">
              <span className="section-kicker">03 · Aplicación profesional</span>
              <h2>Banco de instrumentos de evaluación</h2>
              <p>
                Una propuesta construida desde mi área de conocimiento, Desarrollo de
                Software, para trasladar los principios de evaluación estudiados a un
                contexto profesional y educativo concreto.
              </p>
              <button className="text-button" type="button">
                Ver evidencia próximamente <span>→</span>
              </button>
            </div>

            <div className="feature-visual" aria-hidden="true">
              <div className="code-line w-80" />
              <div className="code-line w-55" />
              <div className="code-line w-70" />
              <div className="code-block">
                <span>criterio</span>
                <strong>+</strong>
                <span>evidencia</span>
                <strong>+</strong>
                <span>retroalimentación</span>
              </div>
              <div className="code-line w-45" />
            </div>
          </div>
        </section>

        <section className="section section-grid" id="cierre">
          <div>
            <span className="section-kicker">04 · Metacognición</span>
            <h2>Mirar hacia atrás para entender cómo aprendí.</h2>
          </div>
          <div className="reflection-card">
            <p>
              El cierre del portafolio estará dedicado a valorar qué aprendí, qué cambió en
              mi forma de comprender la evaluación y cómo puedo aplicar estos aprendizajes
              en mi futura práctica docente.
            </p>
            <div className="criteria-list">
              {criteria.map((item) => (
                <span key={item}>
                  <i>✓</i>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section author-section" id="autor">
          <div className="author-avatar">DG</div>
          <div>
            <span className="section-kicker">Autor</span>
            <h2>Daniel García</h2>
            <p>
              Profesional del área de Desarrollo de Software y estudiante de Maestría en
              Docencia Superior, interesado en conectar la experiencia tecnológica con una
              práctica docente clara, reflexiva y orientada al aprendizaje.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>Daniel García · Portafolio Digital · 2026</p>
        <p>Construido con React + Vite</p>
      </footer>
    </div>
  )
}

export default App
