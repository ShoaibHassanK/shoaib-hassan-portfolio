"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturedWork.module.css';

const CASE_STUDIES = [
    {
        id: 'bld-marine',
        client: 'BLD Marines',
        context: 'Marine Equipment Supplier',
        image: '/work-bld-marine.png',
        result: '25% Decrease in Cost Per Conversion & 35% Increase ROAS'
    },
    {
        id: 'nao-medical',
        client: 'Nao Medical',
        context: 'Healthcare Organization',
        image: '/work-nao-medical.png',
        result: '35% Decrease in Cost Per Conversion in 3 months'
    },
    {
        id: 'red-candy',
        client: 'Red Candy',
        context: 'Ecommerce Brand',
        image: '/work-red-candy.jpg',
        result: 'Turned an unprofitable ad account into a 2.89x ROAS less than 2 months'
    },
    {
        id: 'guardian-storage',
        client: 'Guardian Storage',
        context: 'Multi-Location Storage Services',
        image: '/work-guardian.jpg',
        result: 'Lowered cost per lead by 15% while increasing lead volume by 25% in less than 45 days'
    },
    {
        id: 'al-mamourah',
        client: 'Al-Mamourah',
        context: 'Premium Bespoke Tailor',
        image: '/work-al-mamourah.png',
        result: 'Cut lead costs by 25% in just 3 months'
    }
];

export default function FeaturedWork() {
    return (
        <section className={styles.section} id="case-studies">
            <div className="container">
                <h2 className={styles.headline}>Results I’ve Delivered for Businesses Like Yours</h2>
                <p className={styles.subHeadline}>No matter the industry, the goal stays the same: profitable growth.</p>

                <div className={styles.carouselContainer}>
                    {CASE_STUDIES.map((study) => (
                        <Link href={`/case-studies/${study.id}`} key={study.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={study.image}
                                    alt={study.client}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.clientHeader}>
                                    <h3 className={styles.clientName}>{study.client}</h3>
                                    <span className={styles.clientContext}>{study.context}</span>
                                </div>
                                <p className={styles.resultText}>{study.result}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <p className={styles.footerLine}>
                    These results didn’t come from guesswork. They came from clear strategy, clean data, and focused execution.
                </p>
            </div>
        </section>
    );
}
