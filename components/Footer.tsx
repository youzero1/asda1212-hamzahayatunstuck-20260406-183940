import styles from './Footer.module.css';

const footerLinks = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap']
  },
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press']
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'API Reference', 'Status', 'Community']
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security']
  }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>⬡</span>
              <span>Horizon</span>
            </a>
            <p className={styles.tagline}>
              The all-in-one platform for modern development teams.
            </p>
          </div>
          <div className={styles.links}>
            {footerLinks.map((col) => (
              <div key={col.heading} className={styles.col}>
                <h4 className={styles.colHeading}>{col.heading}</h4>
                <ul className={styles.colLinks}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className={styles.colLink}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>© 2024 Horizon, Inc. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="#" className={styles.social} aria-label="Twitter">𝕏</a>
            <a href="#" className={styles.social} aria-label="GitHub">⌥</a>
            <a href="#" className={styles.social} aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
