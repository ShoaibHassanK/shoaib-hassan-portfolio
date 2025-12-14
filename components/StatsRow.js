"use client";

import styles from './StatsRow.module.css';
import { DollarSign, Users, Globe, Star } from 'lucide-react';

const STATS = [
    {
        icon: <DollarSign size={32} />,
        value: "$35,000",
        label: "Monthly Managed Ad spend"
    },
    {
        icon: <Users size={32} />,
        value: "50+",
        label: "Customers In various niches"
    },
    {
        icon: <Globe size={32} />,
        value: "10+",
        label: "Countries Google Ads Management"
    },
    {
        icon: <Star size={32} />,
        value: "4.8 Stars",
        label: "Average Review Score (50+ Reviews)"
    }
];

export default function StatsRow() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {STATS.map((stat, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {stat.icon}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.value}>{stat.value}</h3>
                                <p className={styles.label}>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
