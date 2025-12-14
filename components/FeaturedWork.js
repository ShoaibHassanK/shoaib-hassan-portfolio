"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturedWork.module.css';

const CASE_STUDIES = [
    {
        id: 'bld-marine',
        client: 'BLD Marines',
        image: '/work-bld-marine.png',
        result: '25% Decrease in Cost Per Conversion & 35% Increase ROAS'
    },
    {
        id: 'nao-medical',
        client: 'Nao Medical',
        image: '/work-nao-medical.png',
        result: '35% Decrease in Cost Per Conversion in 3 months'
    },
    {
        id: 'red-candy',
        client: 'Red Candy',
        image: '/work-red-candy.jpg',
        result: 'Increase ROAS to 2.89x from 0.98x in 2 months'
    },
    {
        id: 'guardian-storage',
        client: 'Guardian Storage',
        image: '/work-guardian.jpg',
        result: 'Decrease Cost Per Lead by 15% in 2 months & Increase Leads by 25%'
    },
    {
        id: 'al-mamourah',
        client: 'Al-Mamourah',
        image: '/work-al-mamourah.png',
        result: 'Decreased Lead Cost by 25% in 3 months'
    }
];

export default function FeaturedWork() {
    return (
        <section className={styles.section} id="case-studies">
            <div className="container">
                <h2 className={styles.headline}>Recent Wins</h2>

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
                                <h3 className={styles.clientName}>{study.client}</h3>
                                <p className={styles.resultText}>{study.result}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
