import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">Design · Strategy · Vision</p>
          <h1 className="hero-title">
            We craft <em>beautiful</em><br />digital worlds
          </h1>
          <p className="hero-body">
            A boutique creative studio specialising in brand identity, web design,
            and visual storytelling — built for brands that refuse to be ordinary.
          </p>
          <div className="btn-group">
            <Link href="/services">
              <button className="btn-primary">Our Services</button>
            </Link>
            <button className="btn-outline">View Portfolio</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-visual">
            <div className="abstract-shape shape-1" />
            <div className="abstract-shape shape-2" />
            <div className="floating-card">
              <div className="card-number">12+</div>
              <div className="card-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-row">
        <div className="stat">
          <div className="stat-num">340+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat">
          <div className="stat-num">98%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
        <div className="stat">
          <div className="stat-num">48</div>
          <div className="stat-label">Countries Served</div>
        </div>
      </div>

      <div className="about-strip">
        <div className="about-text">
          <span className="section-label">About the Studio</span>
          <h2>Where craft meets intention</h2>
          <p>
            We believe great design is never accidental. Every pixel, every word,
            every interaction is a deliberate choice — made with care, curiosity,
            and an obsession with quality that borders on the unreasonable.
          </p>
        </div>
        <div className="about-visual">
          <div className="about-pattern" />
          <div className="about-circle" />
        </div>
      </div>

      <footer>
        <span>© 2026 Studio Lumière — All rights reserved</span>
        <span>Marrakesh · Paris · New York</span>
      </footer>
    </>
  )
}
