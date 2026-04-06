'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'How does the free plan work?',
    a: 'The Starter plan is completely free forever. You get access to 3 projects, 5GB storage, and 100GB bandwidth per month with no credit card required.'
  },
  {
    q: 'Can I upgrade or downgrade at any time?',
    a: 'Yes! You can change your plan at any time. Upgrades take effect immediately and you&apos;ll only be charged the prorated difference. Downgrades take effect at the end of your billing cycle.'
  },
  {
    q: 'Do you offer a free trial for paid plans?',
    a: 'Yes, both Pro and Enterprise plans come with a 14-day free trial. No credit card is required to start your trial.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual Enterprise plans.'
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We are SOC2 Type II certified, all data is encrypted at rest and in transit using AES-256 and TLS 1.3. We also offer data residency options for Enterprise customers.'
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes, we offer a 30-day money-back guarantee on all paid plans. If you are not satisfied for any reason, contact our support team for a full refund.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>FAQ</div>
          <h2 className={styles.title}>Frequently asked questions</h2>
          <p className={styles.subtitle}>Can&apos;t find what you&apos;re looking for? <a href="#" className={styles.link}>Chat with us</a>.</p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className={`${styles.chevron} ${open === i ? styles.chevronOpen : ''}`}>›</span>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
