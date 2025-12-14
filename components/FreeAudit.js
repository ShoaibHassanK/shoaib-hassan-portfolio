"use client";

import styles from './FreeAudit.module.css';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';

export default function FreeAudit() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* About Section */}
                    <div className={styles.aboutColumn}>
                        <h2 className={styles.headline}>About Shoaib</h2>
                        <p className={styles.description}>
                            I know that agencies have a bad reputation. That’s why I do things differently. Better. More honest.
                        </p>
                        <p className={styles.subDescription}>
                            My approach is what I believe a performance marketer should be:
                        </p>

                        <ul className={styles.benefitsList}>
                            <li className={styles.benefitItem}>
                                <CheckCircle className={styles.icon} size={20} />
                                <span><strong>No Junior Managers:</strong> You work directly with me, an expert.</span>
                            </li>
                            <li className={styles.benefitItem}>
                                <CheckCircle className={styles.icon} size={20} />
                                <span><strong>No Long-Term Contracts:</strong> Cancel in any month.</span>
                            </li>
                            <li className={styles.benefitItem}>
                                <CheckCircle className={styles.icon} size={20} />
                                <span><strong>Low Overhead:</strong> You don't pay for fancy offices.</span>
                            </li>
                            <li className={styles.benefitItem}>
                                <CheckCircle className={styles.icon} size={20} />
                                <span><strong>Full Transparency:</strong> Always know where your money goes.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Audit CTA Section */}
                    <div className={styles.auditColumn}>
                        <div className={styles.auditCard}>
                            <h3 className={styles.auditTitle}>
                                Start growing your business with my <span className={styles.highlight}>free audit.</span>
                            </h3>

                            <div className={styles.emailContainer}>
                                <p className={styles.emailLabel}>Get in touch directly:</p>
                                <a href="mailto:shoaib.hb28@gmail.com" className={styles.emailButton}>
                                    <Mail size={20} />
                                    <span>shoaib.hb28@gmail.com</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>

                            <ul className={styles.auditFeatures}>
                                <li>
                                    <CheckCircle size={16} className={styles.featureIcon} />
                                    <span>100% free audit</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className={styles.featureIcon} />
                                    <span>Ready in 7 days</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className={styles.featureIcon} />
                                    <span>No obligations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
