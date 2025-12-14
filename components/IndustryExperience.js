"use client";

import Image from 'next/image';
import styles from './IndustryExperience.module.css';

const EXPERIENCES = [
    {
        client: "Pure Raw Honey",
        image: "/work-pure-raw-honey.png",
        result: "Increase ROAS to 2.95x in 1 month"
    },
    {
        client: "Infinite Orthodontics",
        image: "/work-infinite-ortho.png",
        result: "Increase Leads by 15% in 2 months"
    },
    {
        client: "Nadeem & Umendra Chartered Accountants",
        image: "/work-nuf-ca.png",
        result: "Decrease Cost Per Lead by 25% in 3 months & Increase Leads by 35%"
    },
    {
        client: "Swedish Candy",
        image: "/work-swedish-candy.png",
        result: "Increased the Sales by 15% in 2 months"
    }
];

export default function IndustryExperience() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.headline}>Proven Expertise Across E-commerce & Service Industries</h2>

                <div className={styles.scrollContainer}>
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={exp.image}
                                    alt={exp.client}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.clientName}>{exp.client}</h3>
                                <p className={styles.resultText}>{exp.result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
