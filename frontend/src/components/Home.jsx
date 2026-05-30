import React, { useEffect, useState } from 'react';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // init visuals similar to static page
    applyThemeVisuals(theme);
    // click outside handlers
    const onDoc = (e) => {
      if (!e.target.closest('#hero-diagram') && !e.target.closest('.hero-diagram-wrap')) {
        const tt = document.getElementById('flow-tooltip');
        if (tt) tt.classList.remove('visible');
        setActiveNode(null);
        resetNodeStyles();
      }
      if (!e.target.closest('nav') && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, menuOpen]);

  const nodes = {
    raw: { title: 'Raw Data Sources', techs: ['S3 / GCS / ADLS', 'REST APIs', 'Databases', 'Files & Streams'], hint: 'Multiple source types supported' },
    ingest: { title: 'Data Ingestion', techs: ['Kafka', 'Airflow', 'Python', 'Debezium'], hint: 'Event-driven & batch ingestion patterns' },
    lake: { title: 'Databricks Lakehouse', techs: ['Apache Spark', 'Delta Lake', 'Unity Catalog', 'Photon Engine'], hint: 'Unified analytics & AI platform' },
    analytics: { title: 'Analytics', techs: ['SQL Warehouse', 'dbt Models', 'BI Connectors', 'Metrics Layer'], hint: 'Business intelligence and reporting' },
    aiml: { title: 'AI / ML', techs: ['MLflow', 'Feature Store', 'Model Serving', 'AutoML'], hint: 'End-to-end ML lifecycle' },
    impact: { title: 'Business Impact', techs: ['Dashboards', 'Alerts', 'Reports', 'APIs'], hint: 'Data-driven decisions at scale' }
  };

  function applyThemeVisuals(t) {
    const isLight = t === 'light';
    const ri = document.getElementById('rect-ingest');
    if (ri) {
      ri.setAttribute('fill', isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.04)');
      ri.setAttribute('stroke', isLight ? 'rgba(0,0,0,0.22)' : 'rgba(255,255,255,0.22)');
    }
    const ingestTxt = document.getElementById('txt-ingest'); if (ingestTxt) ingestTxt.setAttribute('fill', isLight ? '#475569' : '#9CA3AF');
    const lakeTxt = document.getElementById('txt-lake'); if (lakeTxt) lakeTxt.setAttribute('fill', isLight ? '#D42D1E' : '#FF3621');
    const rawTxt = document.getElementById('txt-raw'); if (rawTxt) rawTxt.setAttribute('fill', isLight ? '#D42D1E' : '#FF3621');
    const impTxt = document.getElementById('txt-impact'); if (impTxt) impTxt.setAttribute('fill', isLight ? '#D42D1E' : '#FF3621');
    const analyticsTxt = document.getElementById('txt-analytics'); if (analyticsTxt) analyticsTxt.setAttribute('fill', isLight ? '#1D6FCA' : '#60A5FA');
    const aimlTxt = document.getElementById('txt-aiml'); if (aimlTxt) aimlTxt.setAttribute('fill', isLight ? '#0F7B57' : '#34D399');
  }

  function resetNodeStyles() {
    ['raw', 'ingest', 'lake', 'analytics', 'aiml', 'impact'].forEach((k) => {
      const el = document.getElementById('node-' + k);
      if (el) {
        const r = el.querySelector('rect');
        if (r) r.setAttribute('stroke-width', k === 'lake' ? '1.5' : '1');
      }
    });
  }

  function highlightNode(key) {
    resetNodeStyles();
    const nodeEl = document.getElementById('node-' + key);
    if (!nodeEl) return;
    const rect = nodeEl.querySelector('rect');
    if (rect) rect.setAttribute('stroke-width', '2');
  }

  function selectNode(key) {
    const tooltip = document.getElementById('flow-tooltip');
    const n = nodes[key];
    if (!n) return;
    if (activeNode === key) {
      setActiveNode(null);
      if (tooltip) tooltip.classList.remove('visible');
      resetNodeStyles();
      return;
    }
    setActiveNode(key);
    const tt = document.getElementById('flow-tooltip');
    if (tt) {
      document.getElementById('tip-title').textContent = n.title;
      document.getElementById('tip-techs').innerHTML = n.techs.map((t) => `<span class="tip-tech">${t}</span>`).join('');
      document.getElementById('tip-hint').textContent = n.hint;
      tt.classList.add('visible');
    }
    highlightNode(key);
  }

  function toggleTheme() {
    setTheme((p) => (p === 'dark' ? 'light' : 'dark'));
  }

  function toggleMenu() {
    setMenuOpen((p) => !p);
  }

  return (
    <div>
      {/* NAV */}
      <nav>
        <span className="nav-logo">ankus.dev</span>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#build">Work</a>
            <a href="#journey">Journey</a>
            <a href="#architectures">Architecture</a>
            <a href="#notes">Notes</a>
            <a href="#open">Contact</a>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <i className="ti ti-sun toggle-icon sun" aria-hidden="true"></i>
            <div className="toggle-track"><div className="toggle-thumb"></div></div>
            <i className="ti ti-moon toggle-icon moon" aria-hidden="true"></i>
          </button>
          <button className="nav-hamburger" onClick={toggleMenu} aria-label="Menu">
            <i className={menuOpen ? 'ti ti-x' : 'ti ti-menu-2'} id="hamburger-icon" aria-hidden="true"></i>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        <a href="#build" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
        <a href="#architectures" onClick={() => setMenuOpen(false)}>Architecture</a>
        <a href="#notes" onClick={() => setMenuOpen(false)}>Notes</a>
        <a href="#focus" onClick={() => setMenuOpen(false)}>Focus</a>
        <a href="#open" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* Rest of page sections (hero, diagram, trust, build, journey, architectures, notes, focus, vision, open, footer) */}
      <div className="page">
        <div className="hero">
          <div className="hero-text">
            <div className="hero-label">Data & AI Platform Engineer</div>
            <h1 className="hero-name">Aditya Kumar</h1>
            <p className="hero-title">// Building Modern Data & AI Platforms</p>
            <p className="hero-sub">Designing scalable data pipelines, lakehouse architectures, and AI-powered workflows using Databricks, Spark, Python, SQL, and Cloud technologies.</p>
            <div className="hero-btns">
              <a className="btn btn-primary" href="#architectures"><i className="ti ti-layout-grid" aria-hidden="true"></i> Explore Projects</a>
              <a className="btn btn-outline" href="#notes"><i className="ti ti-notebook" aria-hidden="true"></i> Architecture Notes</a>
              <a className="btn btn-outline" href="#"><i className="ti ti-file-cv" aria-hidden="true"></i> Resume</a>
            </div>
          </div>

          <div className="hero-diagram-wrap">
            <div className="arch-diagram" id="hero-diagram">
              <div className="arch-top">
                <div className="arch-dots">
                  <span className="arch-dot r"></span>
                  <span className="arch-dot y"></span>
                  <span className="arch-dot g"></span>
                </div>
                <span>platform_architecture.py</span>
              </div>

              <svg className="flow-canvas" viewBox="0 0 300 330" xmlns="http://www.w3.org/2000/svg" id="flow-svg">
                <defs>
                  <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="#FF3621" strokeWidth="1.5" strokeLinecap="round"/>
                  </marker>
                  <marker id="ah-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
                  </marker>
                  <marker id="ah-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round"/>
                  </marker>
                </defs>

                <g className="flow-node" id="node-raw" onClick={() => selectNode('raw')}>
                  <rect x="65" y="8" width="170" height="36" rx="7" fill="rgba(255,54,33,0.10)" stroke="rgba(255,54,33,0.45)" strokeWidth="1"/>
                  <text x="150" y="30" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="11" fontWeight="500" id="txt-raw" fill="#FF3621">Raw Data Sources</text>
                </g>
                <line className="flow-line" x1="150" y1="44" x2="150" y2="64" stroke="rgba(255,54,33,0.5)" strokeWidth="1" markerEnd="url(#ah)" />

                <g className="flow-node" id="node-ingest" onClick={() => selectNode('ingest')}>
                  <rect id="rect-ingest" x="65" y="68" width="170" height="36" rx="7" fill="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  <text x="150" y="90" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="11" id="txt-ingest">Data Ingestion</text>
                </g>

                <line className="flow-line" x1="150" y1="104" x2="150" y2="124" stroke="rgba(255,54,33,0.4)" strokeWidth="1" markerEnd="url(#ah)" />

                <g className="flow-node" id="node-lake" onClick={() => selectNode('lake')}>
                  <rect x="30" y="128" width="240" height="40" rx="7" fill="rgba(255,54,33,0.12)" stroke="rgba(255,54,33,0.55)" strokeWidth="1.5"/>
                  <text x="150" y="152" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="11" fontWeight="500" id="txt-lake" fill="#FF3621">Databricks Lakehouse</text>
                </g>

                <path className="flow-line" d="M115 168 L115 192 L80 192 L80 212" stroke="rgba(96,165,250,0.55)" strokeWidth="1" fill="none" markerEnd="url(#ah-blue)" />
                <path className="flow-line" d="M185 168 L185 192 L220 192 L220 212" stroke="rgba(52,211,153,0.55)" strokeWidth="1" fill="none" markerEnd="url(#ah-green)" />

                <g className="flow-node" id="node-analytics" onClick={() => selectNode('analytics')}>
                  <rect x="22" y="216" width="120" height="36" rx="7" fill="rgba(96,165,250,0.10)" stroke="rgba(96,165,250,0.40)" strokeWidth="1"/>
                  <text x="82" y="238" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="11" id="txt-analytics" fill="#60A5FA">Analytics</text>
                </g>

                <g className="flow-node" id="node-aiml" onClick={() => selectNode('aiml')}>
                  <rect x="158" y="216" width="120" height="36" rx="7" fill="rgba(52,211,153,0.10)" stroke="rgba(52,211,153,0.40)" strokeWidth="1"/>
                  <text x="218" y="238" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="11" id="txt-aiml" fill="#34D399">AI / ML</text>
                </g>

                <path className="flow-line" d="M82 252 L82 272 L150 272 L150 290" stroke="rgba(255,54,33,0.35)" strokeWidth="1" fill="none" markerEnd="url(#ah)" />
                <path className="flow-line" d="M218 252 L218 272 L150 272 L150 290" stroke="rgba(255,54,33,0.35)" strokeWidth="1" fill="none" markerEnd="url(#ah)" />

                <g className="flow-node" id="node-impact" onClick={() => selectNode('impact')}>
                  <rect x="65" y="294" width="170" height="36" rx="7" fill="rgba(255,54,33,0.08)" stroke="rgba(255,54,33,0.40)" strokeWidth="1"/>
                  <text x="150" y="316" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="11" fontWeight="500" id="txt-impact" fill="#FF3621">Business Impact</text>
                </g>
              </svg>

              <div className="flow-tooltip" id="flow-tooltip">
                <div className="tip-title" id="tip-title">select a node</div>
                <div className="tip-techs" id="tip-techs"></div>
                <div className="tip-hint" id="tip-hint"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar and remaining sections are already present in index.html's CSS so keep structure simple */}
      <div className="trust">
        <div className="trust-track">
          {['Databricks','Apache Spark','Kafka','Airflow','dbt','Snowflake','AWS','Azure','Docker','PostgreSQL','Delta Lake','Python','PySpark','SQL','MLflow','Terraform'].map((t,i)=> (
            <div key={i} className="trust-pill">{t}</div>
          ))}
          {['Databricks','Apache Spark','Kafka','Airflow','dbt','Snowflake','AWS','Azure','Docker','PostgreSQL','Delta Lake','Python','PySpark','SQL','MLflow','Terraform'].map((t,i)=> (
            <div key={`r${i}`} className="trust-pill">{t}</div>
          ))}
        </div>
      </div>

      <section id="build">
        <div className="page">
          <div className="section-label">What I Build</div>
          <h2 className="section-title">Engineering <span>Capabilities</span></h2>
          <div className="build-grid">
            <div className="build-card">
              <div className="build-card-icon"><i className="ti ti-database-cog" aria-hidden="true"></i></div>
              <h3>Data Engineering</h3>
              <p>Building robust pipelines that transform raw data into reliable, queryable assets at scale.</p>
              <div className="build-tags"><span className="tag">Batch ETL</span><span className="tag">Streaming</span><span className="tag">Orchestration</span><span className="tag">Data Quality</span></div>
              <div className="arch-flow"><div className="step"><span>Source</span><span className="arrow">→</span><span>ETL</span><span className="arrow">→</span><span style={{color:'var(--blue)'}}>Warehouse</span></div></div>
            </div>
            <div className="build-card">
              <div className="build-card-icon" style={{background:'var(--blue-dim)',color:'var(--blue)'}}><i className="ti ti-chart-histogram" aria-hidden="true"></i></div>
              <h3>Analytics Platforms</h3>
              <p>Designing lakehouse-native data models that power business metrics and executive dashboards.</p>
              <div className="build-tags"><span className="tag">Warehousing</span><span className="tag">Data Modeling</span><span className="tag">Metrics</span><span className="tag">BI</span></div>
            </div>
            <div className="build-card">
              <div className="build-card-icon" style={{background:'var(--green-dim)',color:'var(--green)'}}><i className="ti ti-brain" aria-hidden="true"></i></div>
              <h3>AI Platforms</h3>
              <p>Operationalizing machine learning from feature engineering to production model serving.</p>
              <div className="build-tags"><span className="tag">Feature Pipelines</span><span className="tag">ML Workflows</span><span className="tag">Model Deploy</span><span className="tag">MLOps</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* A few sections omitted for brevity — main structure implemented */}

      <footer>
        <div className="page">
          <div className="footer-inner">
            <div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'11px',color:'var(--red)',marginBottom:14,letterSpacing:'.08em'}}>ADITYA KUMAR</div>
              <p className="footer-tagline">Engineering <span>Data Systems</span>, Analytics Platforms, and AI Workflows.</p>
            </div>
            <div className="footer-links">
              <a href="#">ankus.dev/projects</a>
              <a href="#">ankus.dev/architectures</a>
              <a href="#">ankus.dev/notes</a>
              <a href="#">ankus.dev/resume</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">BUILT WITH PRECISION — DATA & AI PLATFORM ENGINEER</div>
            <div className="footer-copy">© 2026 Aditya Kumar</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
