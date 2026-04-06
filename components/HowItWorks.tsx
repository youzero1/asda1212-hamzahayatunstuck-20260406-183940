import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    title: 'Connect Your Repository',
    description:
      'Link your GitHub, GitLab, or Bitbucket repository in seconds. Horizon automatically detects your stack and configures optimal settings.',
    icon: '🔗'
  },
  {
    num: '02',
    title: 'Configure Your Pipeline',
    description:
      'Use our visual pipeline builder or YAML config to set up build, test, and deploy stages. Smart defaults get you 80% there automatically.',
    icon: '⚙️'
  },
  {
    num: '03',
    title: 'Deploy with Confidence',
    description:
      'Push your code and watch it deploy to production. Built-in monitoring, automatic rollbacks, and real-time logs keep you in control.',
    icon: '🚀'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>How It Works</div>
          <h2 className={styles.title}>Ship in three simple steps</h2>
          <p className={styles.subtitle}>
            From code to production in minutes, not days.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.numWrapper}>
                  <span className={styles.num}>{step.num}</span>
                </div>
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
