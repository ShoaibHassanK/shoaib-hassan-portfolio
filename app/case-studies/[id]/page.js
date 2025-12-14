"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsRow from "@/components/StatsRow";
import styles from './page.module.css';

// This would typically come from a CMS or API
const CASE_STUDIES = {
    'bld-marine': {
        title: "Strategic Profit-First Segmentation Drives 35% ROAS Increase While Cutting Costs by 25%",
        client: "BLD Marines",
        industry: "E-commerce / Marine & Boating Supplies",
        region: "North America",
        goal: "Shift ad spend focus from simple sales volume to maximum profitability and Return on Ad Spend (ROAS).",
        challenge: {
            title: "The Illusion of Revenue",
            description: "BLD Marines faced a classic e-commerce scaling trap. While their Google Ads campaigns were generating consistent sales volume, the profits were being eroded:",
            points: [
                "Low-Margin Drain: The existing Google Shopping and Search campaigns treated all products equally, resulting in the bulk of ad spend going to high-volume, low-margin marine parts.",
                "Neglected Profit Centers: High-margin inventory from specific, premium brands was consistently underperforming and being outspent by cheaper items, making overall campaign profitability stagnant.",
                "Inefficient Bidding: The strategy was optimized for basic conversion value without factoring in the crucial profit margin, leading to significant investment in unprofitable conversions."
            ]
        },
        approach: {
            steps: [
                { title: "Profit-Based Campaign Architecture", desc: "I restructured the entire product feed and campaign structure to prioritize profitability. I segregated all inventory into distinct campaigns based on High-Margin, Mid-Margin, and Low-Margin tiers, regardless of product category." },
                { title: "Strategic Bidding and Budget Control", desc: "The High-Margin campaigns were assigned a sophisticated bidding strategy to aggressively pursue conversions, as the higher profit pool justified the increased CPA. The Low-Margin campaigns received protective bidding limits." },
                { title: "Brand Protection and Conversion Efficiency", desc: "To further increase efficiency and capture high-intent traffic, I launched a dedicated Brand Campaign. This ensured BLD Marines maintained control over their branded searches, capturing highly qualified, low-cost conversions." }
            ]
        },
        results: [
            { metric: "↑ 35%", label: "Return on Ad Spend (ROAS)", detail: "Achieved by shifting spend away from low-value transactions toward premium, high-profit products." },
            { metric: "↓ 25%", label: "Cost Per Conversion (CPA)", detail: "Budget was used more efficiently on searches that led to predictable, high-value outcomes." }
        ]
    }
};

export default function CaseStudy({ params }) {
    const { id } = params;
    const study = CASE_STUDIES[id];

    if (!study) {
        return <div className="container" style={{ paddingTop: '150px' }}>Case Study Not Found</div>;
    }

    return (
        <main>
            <Header />

            <article className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{study.title}</h1>
                    <div className={styles.metadataGrid}>
                        <div className={styles.metadataCard}>
                            <div className={styles.metaLabel}>Client</div>
                            <div className={styles.metaValue}>{study.client}</div>
                        </div>
                        <div className={styles.metadataCard}>
                            <div className={styles.metaLabel}>Industry</div>
                            <div className={styles.metaValue}>{study.industry}</div>
                        </div>
                        <div className={styles.metadataCard}>
                            <div className={styles.metaLabel}>Region</div>
                            <div className={styles.metaValue}>{study.region}</div>
                        </div>
                        <div className={styles.metadataCard}>
                            <div className={styles.metaLabel}>Goal</div>
                            <div className={styles.metaValue}>{study.goal}</div>
                        </div>
                    </div>
                </div>

                {/* 2nd Fold: Agency Stats / Trust Section */}
                <div className={styles.statsWrapper}>
                    <StatsRow />
                </div>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>The Challenge: {study.challenge.title}</h2>
                    <p className={styles.text}>{study.challenge.description}</p>
                    <ul className={styles.list}>
                        {study.challenge.points.map((point, idx) => (
                            <li key={idx} className={styles.listItem}>{point}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>My Approach: Margin-Based Campaign Segmentation</h2>
                    <div className={styles.processSteps}>
                        {study.approach.steps.map((step, idx) => (
                            <div key={idx} className={styles.stepCard}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p style={{ color: '#555', fontSize: '0.95rem' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.dashboardSnapshot}>
                        [Client] Google Ads Dashboard Snapshot
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>The Results: Profitability Over Volume</h2>
                    <div className={styles.resultsGrid}>
                        {study.results.map((res, idx) => (
                            <div key={idx} className={styles.resultCard}>
                                <span className={styles.resultLabel}>{res.label}</span>
                                <span className={styles.resultMetric}>{res.metric}</span>
                                <p className={styles.resultDetail}>{res.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </article>

            <Footer />
        </main>
    );
}
