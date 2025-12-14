"use client";

import Link from 'next/link';
import { Check } from 'lucide-react';
import styles from './AuditSocialProof.module.css';

const TESTIMONIALS = [
    {
        text: "Shoaib transformed our ad spend into a predictable revenue engine. The ROI has been incredible.",
        author: "Dr. Jain",
        role: "CEO of Nao Medical"
    },
    {
        text: "Finally, a Google Ads expert who understands profitability, not just clicks. Highly recommended.",
        author: "Ayo",
        role: "Owner Red Candy"
    },
    {
        text: "Our lead quality improved drastically within the first month. Shoaib knows his stuff.",
        author: "Mubin bin Zaman",
        role: "CEO, Tech Ventures"
    }
];

export default function AuditSocialProof() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.auditColumn}>
                    <h2 className={styles.headline}>Start growing your business with my free audit</h2>
                    <p className={styles.text}>
                        Get an extensive audit finished within 7 days for free. No strings attached.
                    </p>

                    <ul className={styles.benefitList}>
                        <li className={styles.benefitItem}>
                            <Check className={styles.checkIcon} />
                            Expert-backed recommendations
                        </li>
                        <li className={styles.benefitItem}>
                            <Check className={styles.checkIcon} />
                            Clear next steps
                        </li>
                        <li className={styles.benefitItem}>
                            <Check className={styles.checkIcon} />
                            No obligations
                        </li>
                    </ul>

                    <Link href="mailto:shoaib.hb28@gmail.com" className={styles.emailLink}>
                        Claim Your Free Audit
                    </Link>
                </div>

                <div className={styles.testimonialsColumn}>
                    <h3 className={styles.testimonialsHeadline}>Trusted by Business Owners in Industries Just Like Yours</h3>
                    {TESTIMONIALS.map((t, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            <p className={styles.testimonialText}>"{t.text}"</p>
                            <div>
                                <div className={styles.author}>{t.author}</div>
                                <div className={styles.authorRole}>{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
