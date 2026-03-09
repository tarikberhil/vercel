export default function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>
            What we <em>do</em><br />exceptionally well
          </h1>
          <p>
            From brand identity to full digital ecosystems, our services are
            crafted to make your brand impossible to ignore.
          </p>
        </div>
      </section>

      <div className="services-grid">
        <div className="service-card">
          <span className="service-icon">✦</span>
          <div className="service-num">01</div>
          <h3 className="service-name">Brand Identity</h3>
          <p className="service-desc">
            We build visual identities that feel inevitable — logos, colour systems,
            and brand guidelines that hold their shape across every touchpoint.
          </p>
          <div className="service-tags">
            <span className="tag">Logo Design</span>
            <span className="tag">Brand Guidelines</span>
            <span className="tag">Visual Identity</span>
          </div>
        </div>
        <div className="service-card">
          <span className="service-icon">◈</span>
          <div className="service-num">02</div>
          <h3 className="service-name">Web Design</h3>
          <p className="service-desc">
            Websites that move people — literally and emotionally. We design and
            build digital experiences that convert visitors into devotees.
          </p>
          <div className="service-tags">
            <span className="tag">UI / UX Design</span>
            <span className="tag">Interaction</span>
            <span className="tag">Development</span>
          </div>
        </div>
        <div className="service-card">
          <span className="service-icon">◉</span>
          <div className="service-num">03</div>
          <h3 className="service-name">Art Direction</h3>
          <p className="service-desc">
            Strategic visual storytelling for campaigns, editorial content, and
            social media — ensuring every image communicates with precision.
          </p>
          <div className="service-tags">
            <span className="tag">Photography</span>
            <span className="tag">Campaign Design</span>
            <span className="tag">Editorial</span>
          </div>
        </div>
      </div>

      <section className="process">
        <p className="process-label">How we work</p>
        <div className="process-steps">
          <div className="step">
            <div className="step-num">01</div>
            <h4 className="step-title">Discover</h4>
            <p className="step-desc">
              Deep immersion into your world — understanding your audience,
              competitors, and the opportunity that exists.
            </p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h4 className="step-title">Define</h4>
            <p className="step-desc">
              Crystallising the strategy: what you stand for, how you speak,
              and where you want to go.
            </p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h4 className="step-title">Design</h4>
            <p className="step-desc">
              Translating strategy into stunning visuals, layouts, and
              experiences — refined until they&apos;re exactly right.
            </p>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <h4 className="step-title">Deliver</h4>
            <p className="step-desc">
              Seamless handoff with everything you need to launch with
              confidence and maintain with ease.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>
          Ready to build something <em>remarkable?</em>
        </h2>
        <p>
          Let&apos;s start a conversation about your project. We take on a limited
          number of clients each year to ensure every engagement gets our full attention.
        </p>
        <button className="btn-gold">Get In Touch</button>
      </section>

      <footer>
        <span>© 2026 Studio Lumière — All rights reserved</span>
        <span>Marrakesh · Paris · New York</span>
      </footer>
    </>
  )
}
