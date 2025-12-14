"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsRow from "@/components/StatsRow";
import FreeAudit from "@/components/FreeAudit";
import styles from './page.module.css';

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

export default function CaseStudiesPage() {
    return (
        <main>
            <Header />
            <section className={styles.section}>
                <div className="container">
                    <h1 className={styles.pageTitle}>Results I am proud of</h1>
                    <p className={styles.intro}>
                        After working with the wrong partners, it’s hard to believe in promises. I get that. So instead of promises, I show you proof. Real businesses, real outcomes, no marketing fluff.
                    </p>

                    <div className={styles.statsWrapper}>
                        <StatsRow />
                    </div>

                    <div className={styles.grid}>
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

            <FreeAudit />

            <Footer />
        </main>
    );
}
