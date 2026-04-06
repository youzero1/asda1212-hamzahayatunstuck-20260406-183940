'use client';

import { useState } from 'react';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    monthly: 0,
    annual: 0,
    description: 'Perfect for individuals and small side projects.',
    features: [
      '3 projects',
      '5GB storage',
      '100GB bandwidth/mo',
      'Basic analytics',
      'Community support'
    ],
    cta: 'Get Started Free',
    popular: false
  },
  {
    name: 'Pro',
    monthly: 29,
    annual: 23,
    description: 'Best for growing teams that need more power.',
    features: [
      'Unlimited projects',
      '50GB storage',
      '1TB bandwidth/mo',
      'Advanced analytics',
      'Priority support',
      'Custom domains',
      'Team collaboration'
    ],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    monthly: 99,
    annual: 79,
    description: 'For large organizations with advanced needs.',
    features: [
      'Unlimited everything',
      '500GB storage',
      'Unlimited bandwidth',
      'AI-powered insights',
      '24/7 dedicated support',
      'SSO & SAML',
      'SLA guarantee',
      'Custom contracts'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>Pricing</div>
          <h2 className={styles.title}>Simple, transparent pricing</h2>
          <p className={styles.subtitle}>
            No hidden fees. No surprises. Cancel anytime.
          </p>

          <div className={styles.toggle}>
            <span className={!annual ? styles.toggleActive : styles.toggleInactive}>Monthly</span>
            <button
              className={`${styles.toggleBtn} ${annual ? styles.toggleBtnOn : ''}`}
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle billing period"
            >
              <span className={styles.toggleThumb} />
            </button>
            <span className={annual ? styles.toggleActive : styles.toggleInactive}>
              Annual
              <span className={styles.saveBadge}>Save 20%</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.name} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>
                  {annual ? plan.annual : plan.monthly}
                </span>
                {plan.monthly > 0 && <span className={styles.period}>/mo</span>}
              </div>
              <p className={styles.planDesc}>{plan.description}</p>
              <a
                href="#"
                className={`${styles.cta} ${plan.popular ? styles.ctaPrimary : styles.ctaSecondary}`}
              >
                {plan.cta}
              </a>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
