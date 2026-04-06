import styles from './Features.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Optimized infrastructure that delivers sub-100ms response times globally with edge computing.',
    color: '#ffbd2e'
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'SOC2 Type II certified with end-to-end encryption, SSO, and advanced access controls.',
    color: '#43e97b'
  },
  {
    icon: '🚀',
    title: 'Zero-Config Deploy',
    description:
      'Push to deploy with automatic CI/CD pipelines, rollbacks, and zero-downtime deployments.',
    color: '#6c63ff'
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description:
      'Live dashboards with custom metrics, alerts, and insights powered by AI-driven analysis.',
    color: '#ff6584'
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description:
      'Built-in review workflows, comments, and notifications to keep your entire team in sync.',
    color: '#38bdf8'
  },
  {
    icon: '🔌',
    title: '200+ Integrations',
    description:
      'Connect with your favorite tools including GitHub, Slack, Jira, Vercel, and many more.',
    color: '#fb923c'
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>Features</div>
          <h2 className={styles.title}>Everything you need to ship</h2>
          <p className={styles.subtitle}>
            Horizon brings together all the tools your team needs in one cohesive platform.
            No more context switching, no more duct tape.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.iconWrapper} style={{ background: `${f.color}18`, borderColor: `${f.color}30` }}>
                <span className={styles.icon}>{f.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
              <a href="#" className={styles.cardLink} style={{ color: f.color }}>
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
