import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.glow} />
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to build the future?</h2>
          <p className={styles.subtitle}>
            Join 50,000+ teams already using Horizon to ship faster, smarter, and with confidence.
          </p>
          <div className={styles.actions}>
            <a href="#" className={styles.btnPrimary}>
              Start for Free
              <span className={styles.arrow}>→</span>
            </a>
            <a href="#" className={styles.btnSecondary}>
              Talk to Sales
            </a>
          </div>
          <p className={styles.note}>No credit card required · Free forever plan available</p>
        </div>
      </div>
    </section>
  );
}
