"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const CLIENTS = [
    { name: "Client 1", src: "/client-1.png" },
    { name: "Client 2", src: "/client-2.png" },
    { name: "Client 3", src: "/client-3.png" },
    { name: "Client 4", src: "/client-4.png" },
    { name: "Client 5", src: "/client-5.png" },
    { name: "Infinite Orthodontics", src: "/logo-infinite-ortho.png" },
    { name: "Pure Raw Honey", src: "/logo-pure-raw-honey.png" },
    { name: "Rapid Performance", src: "/logo-rapid-performance.png" },
    { name: "Red Candy", src: "/logo-red-candy-strip.png" },
    { name: "Breast Form Store", src: "/logo-breast-form-store.png" },
];

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.headline}>
                    Let's Make Your Google Ads Your Most Profitable Growth Channel
                </h1>
                <p className={styles.subHeadline}>
                    My name is Shoaib Hassan with 5 years of agency & corporate Google Ads experience.
                    I've managed $400K+ across North America, United Kingdom, Australia & MENA for diverse businesses.
                </p>

                <div className={styles.ctaGroup}>
                    <Link href="mailto:shoaib.hb28@gmail.com" className={styles.primaryCta}>
                        Get Your Free Audit
                    </Link>
                    <Link href="/about" className={styles.secondaryCta}>
                        Get to Know Me
                    </Link>
                </div>
            </div>

            <div className={styles.logoStrip}>
                <div className={styles.logoTrack}>
                    {/* Duplicate logos for seamless scrolling */}
                    {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
                        <div key={index} className={styles.logoItem}>
                            <Image
                                src={client.src}
                                alt={client.name}
                                width={120}
                                height={60}
                                style={{ objectFit: 'contain', opacity: 0.8 }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
