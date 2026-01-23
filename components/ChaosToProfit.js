'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ChaosToProfit.module.css';

const ChaosToProfit = () => {
    const [activeRoleIndex, setActiveRoleIndex] = useState(0);
    const [activeDashIndex, setActiveDashIndex] = useState(0);
    const roles = ['Service', 'Ecommerce', 'SAAS'];

    const dashboards = [
        {
            id: 1,
            title: 'Lead Gen Result | Unlocking Profitable Scale via 42% CAC Efficiency',
            src: '/dashboard-lead-gen-result-1.png'
        },
        {
            id: 2,
            title: 'Service Excellence | Data-Driven Lead Quality & Backend CPL Optimization',
            src: '/dashboard-lead-gen-result-2.png'
        },
        {
            id: 3,
            title: 'Ecommerce Mastery | 18.6x ROAS: High-Margin Revenue Acceleration',
            src: '/dashboard-ecommerce-result-1.png'
        },
        {
            id: 4,
            title: 'Market Expansion | Performance-First Strategy for New Vertical Growth',
            src: '/lead-generation-new-york.png'
        },
        {
            id: 5,
            title: 'High-Intent Lead Gen | Multi-Channel Infrastructure for Scalable Intake',
            src: '/dashboard-2.png'
        },
        {
            id: 6,
            title: 'Brand Launch | $0 to 8x ROAS: Scaling New Brands from Zero to Profit',
            src: '/dashboard-3.png'
        },
        {
            id: 7,
            title: 'Ecommerce Alpha | Scaling PMax & Shopping for Maximum Market Share',
            src: '/dashboard-4.png'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* RESULTS GALLERY SECTION */}
                <div className={styles.gallerySection}>
                    <div className={styles.galleryHeaderWrapper}>
                        <h2 className={styles.galleryHeadline}>
                            Trusted with <span className={styles.highlight}>$500K+ Ad Spend</span><br />
                            <span className={styles.gallerySubheadline}>Results That Speak Louder Than Words</span>
                        </h2>
                    </div>

                    <div className={styles.featuredWrapper}>
                        {/* Title Bar */}
                        <div className={styles.dashboardTitle}>
                            {dashboards[activeDashIndex].title}
                        </div>

                        {/* Large Featured Image */}
                        <div className={styles.featuredImageContainer}>
                            <Image
                                src={dashboards[activeDashIndex].src}
                                alt={`Result Dashboard ${activeDashIndex + 1}`}
                                fill
                                className={styles.featuredImage}
                                priority
                            />
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className={styles.thumbnailContainer}>
                            {dashboards.map((dash, idx) => (
                                <div
                                    key={dash.id}
                                    className={`${styles.thumbnailButton} ${idx === activeDashIndex ? styles.activeThumbnail : ''}`}
                                    onClick={() => setActiveDashIndex(idx)}
                                >
                                    <Image
                                        src={dash.src}
                                        alt={`Thumbnail ${dash.id}`}
                                        fill
                                        className={styles.thumbnailCommon}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PERFECT MARKETER / PROFILE SNAPSHOT SECTION */}
                <div className={styles.splitSection}>

                    {/* Left: HEADLINE & TIMELINE */}
                    <div className={styles.leftColumn}>
                        <h2 className={styles.partnerHeadline}>
                            The Partner<br />
                            <span className={styles.blueText}>You Need</span>
                        </h2>

                        <div className={styles.timeline}>
                            {[
                                { label: 'Today', title: 'Outline Your Goals', active: true },
                                { label: 'Tomorrow', title: 'Custom Strategy Call', active: false },
                                { label: 'This Week', title: 'Launch Campaigns', active: false },
                                { label: 'Next Week', title: 'Scale & Optimize', active: false }
                            ].map((step, i) => (
                                <div key={i} className={styles.timelineItem}>
                                    <span className={`${styles.timelineDot} ${step.active ? styles.dotActive : styles.dotInactive}`}></span>
                                    <span className={`${styles.timelineLabel} ${step.active ? styles.labelActive : styles.labelInactive}`}>
                                        {step.label}
                                    </span>
                                    <h4 className={styles.timelineTitle}>{step.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: PROFILE INTERACTIVE CARD */}
                    <div className={styles.rightColumn}>
                        <div className={styles.blendedWrapper}>

                            {/* Mad Libs Text */}
                            <div className={styles.madLibs}>
                                <p>
                                    <span style={{ fontWeight: 700, color: '#003366' }}>I help</span>{' '}
                                    <span className={styles.roleHighlight}>
                                        {roles[activeRoleIndex]}
                                    </span>
                                </p>
                                <p>
                                    businesses with
                                    <span className={styles.genericTag}>Google Ads</span>
                                </p>
                                <p>
                                    to achieve
                                    <span className={styles.brandTag}>Lower CAC</span>
                                    <span style={{ color: '#9ca3af', margin: '0 0.5rem' }}>&</span>
                                    <span className={styles.brandTag}>Profitability</span>
                                </p>
                            </div>

                            {/* Profile Card */}
                            <div className={styles.profileInner} style={{ backgroundColor: '#F0F7FF', borderColor: '#DAE7F7' }}>
                                <div className={styles.profileImage}>
                                    <Image
                                        src="/shoaib-profile-new.jpg"
                                        alt="Shoaib Hassan"
                                        fill
                                        className={styles.imageStyle}
                                    />
                                </div>
                                <div className={styles.profileInfo}>
                                    <h3 className={styles.profileName}>Shoaib Hassan</h3>
                                    <div className={styles.googlePartner}>
                                        <Image src="/google-ads-logo.png" width={24} height={24} alt="Google Ads" style={{ objectFit: 'contain' }} />
                                        <span>Google Ads Expert</span>
                                    </div>

                                    <div className={styles.statBadgeContainer}>
                                        <span className={styles.statBadgeBlue}>$500K+ Ad Spend Managed</span>
                                        <span className={styles.statBadgeGreen}>Avg. 25% CAC Reduction</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Tags */}
                            <div className={styles.bottomTags}>
                                {[
                                    'Google Ads Specialist',
                                    'eCommerce Growth',
                                    'Lead Gen',
                                    'Audit & Strategy',
                                    'Conversion Tracking',
                                    'GA4 Expert',
                                    'ROAS Focused',
                                    'Campaign Scale'
                                ].map((item) => (
                                    <span key={item} className={styles.bottomTagItem}>
                                        <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        {item}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ChaosToProfit;
