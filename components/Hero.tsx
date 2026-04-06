import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Now in Public Beta — Join 50,000+ teams
        </div>

        <h1 className={styles.heading}>
          Build Products
          <br />
          <span className={styles.gradient}>10x Faster</span>
          <br />
          Than Ever Before
        </h1>

        <p className={styles.subheading}>
          Horizon is the all-in-one platform that empowers developers, designers,
          and product teams to ship world-class software without the friction.
        </p>

        <div className={styles.actions}>
          <a href="#" className={styles.btnPrimary}>
            Start for Free
            <span className={styles.arrow}>→</span>
          </a>
          <a href="#how-it-works" className={styles.btnSecondary}>
            <span className={styles.playIcon}>▶</span>
            Watch Demo
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>50K+</span>
            <span className={styles.statLabel}>Active Users</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>99.9%</span>
            <span className={styles.statLabel}>Uptime SLA</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4.9★</span>
            <span className={styles.statLabel}>Rating</span>
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <div className={styles.dots}>
              <span style={{ background: '#ff5f57' }} />
              <span style={{ background: '#ffbd2e' }} />
              <span style={{ background: '#28c840' }} />
            </div>
            <span className={styles.cardTitle}>dashboard.tsx</span>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.codeLine}>
              <span className={styles.keyword}>import</span>
              <span className={styles.text}> {'{'} useDashboard {'}'} </span>
              <span className={styles.keyword}>from</span>
              <span className={styles.string}> &apos;@horizon/core&apos;</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.comment}>// Deploy in seconds</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.keyword}>const</span>
              <span className={styles.text}> app </span>
              <span className={styles.operator}>=</span>
              <span className={styles.func}> horizon</span>
              <span className={styles.text}>.init({'{'}</span>
            </div>
            <div className={styles.codeLine} style={{ paddingLeft: '24px' }}>
              <span className={styles.prop}>  scale</span>
              <span className={styles.text}>: </span>
              <span className={styles.string}>&apos;auto&apos;</span>
              <span className={styles.text}>,</span>
            </div>
            <div className={styles.codeLine} style={{ paddingLeft: '24px' }}>
              <span className={styles.prop}>  deploy</span>
              <span className={styles.text}>: </span>
              <span className={styles.string}>&apos;zero-config&apos;</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.text}>{'}'});</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
