import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote:
      'Horizon cut our deployment time by 80%. What used to take a whole afternoon now happens in minutes. Our team can focus on building features instead of fighting infrastructure.',
    name: 'Sarah Chen',
    role: 'CTO at NovaTech',
    avatar: 'SC'
  },
  {
    quote:
      'The analytics dashboard alone is worth the price. We finally have real visibility into our systems and can make data-driven decisions. Absolutely love this product.',
    name: 'Marcus Williams',
    role: 'Lead Engineer at Pulse',
    avatar: 'MW'
  },
  {
    quote:
      'We migrated our entire infrastructure to Horizon in a weekend. The zero-config deployments and automatic SSL are game-changers for a startup like ours.',
    name: 'Priya Patel',
    role: 'Founder at LayerStack',
    avatar: 'PP'
  }
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>Testimonials</div>
          <h2 className={styles.title}>Loved by thousands of teams</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>{'★★★★★'}</div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
