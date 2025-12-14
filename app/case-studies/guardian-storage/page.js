"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, TrendingDown, Users } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FreeAudit from "@/components/FreeAudit";
import styles from './page.module.css';

export default function GuardianStorageCaseStudy() {
    return (
        <main className={styles.main}>
            <Header />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/case-studies" className={styles.backLink}>
                        <ArrowLeft size={20} />
                        Back to Case Studies
                    </Link>

                    <header className={styles.header}>
                        <div className={styles.meta}>
                            <span className={styles.industry}>Local Services / Lead Generation</span>
                            <span className={styles.client}>Guardian Storage</span>
                        </div>
                        <h1 className={styles.title}>
                            Unlocking Scale: Strategic Bidding & Match Type Expansion Cuts CPL by 15% and Boosts Leads by 25%
                        </h1>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <TrendingUp className={styles.statIcon} />
                                <div className={styles.statValue}>+25%</div>
                                <div className={styles.statLabel}>Lead Volume</div>
                            </div>
                            <div className={styles.statCard}>
                                <TrendingDown className={styles.statIcon} />
                                <div className={styles.statValue}>-15%</div>
                                <div className={styles.statLabel}>Decrease in CPL</div>
                            </div>
                            <div className={styles.statCard}>
                                <Users className={styles.statIcon} />
                                <div className={styles.statValue}>Scale</div>
                                <div className={styles.statLabel}>Unlocked</div>
                            </div>
                        </div>
                    </header>

                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>The Challenge: Data Chokehold and Lost Opportunities</h2>
                                <p>
                                    Guardian Storage, operating multiple physical locations, had a Google Ads account that was fundamentally sound but severely underperforming due to self-imposed limitations:
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Inhibition of Growth:</strong> The account was strictly limited to Exact Match keywords combined with a conservative Manual CPC bidding strategy. This highly restrictive setup was starving the campaigns of valuable, high-volume traffic.
                                    </li>
                                    <li>
                                        <strong>Underutilized Data:</strong> Although the account had years of conversion data, the Manual CPC strategy prevented Google's Smart Bidding from leveraging this history, resulting in low Impression Share and missed competitive opportunities.
                                    </li>
                                    <li>
                                        <strong>Misleading Conversions:</strong> A critical foundational flaw was identified where the conversion actions were not accurately reflecting high-value inquiries (e.g., booking forms or high-quality calls), leading to misinformed optimization decisions.
                                    </li>
                                </ul>
                                <p className={styles.highlight}>
                                    The challenge was to surgically remove these limitations and allow the existing data to drive massive, profitable scale.
                                </p>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>My Approach: Foundation Fixing and Strategic Automation</h2>
                                <p>
                                    I implemented a data-driven strategy to switch the account from being restricted and manually managed to being intelligent and scalable, resulting in a dramatic increase in qualified leads.
                                </p>

                                <div className={styles.step}>
                                    <h3>1. Conversion Recalibration (Foundation First)</h3>
                                    <p>The first and most critical step was to audit and correct the conversion actions, ensuring that the tracked conversions accurately reflected genuine, high-value lead inquiries (e.g., confirmed reservations or detailed quote requests). This gave the Smart Bidding system clean, reliable data to learn from.</p>
                                </div>

                                <div className={styles.step}>
                                    <h3>2. Strategic Match Type & Bidding Shift</h3>
                                    <p>From Manual CPC to Target CPA: Given the rich historical conversion data, I moved the bidding strategy from restrictive Manual CPC to the intelligent Target CPA. This immediately allowed Google's automation to bid aggressively only on users most likely to convert, maximizing efficiency.</p>
                                    <ul className={styles.checkList}>
                                        <li><strong>From Exact Match to Broad Match:</strong> I strategically introduced Broad Match keywords across the campaigns. Because the Target CPA strategy was now using clean conversion data, this expansion unlocked new, high-volume search queries that the client was previously missing, leading to a massive increase in scale without sacrificing quality.</li>
                                    </ul>
                                </div>

                                <div className={styles.step}>
                                    <h3>3. Location-Based and Competitive Structuring</h3>
                                    <p>
                                        The multi-location structure was maintained, allowing the new Target CPA bidding to optimize performance based on the specific market demand of each facility, ensuring the best visibility in competitive local searches.
                                    </p>
                                </div>
                            </section>

                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/guardian-storage-ads-dashboard.png"
                                    alt="Google Ads Dashboard showing increased leads and lower CPL"
                                    width={1200}
                                    height={600}
                                    className={styles.image}
                                />
                                <p className={styles.caption}>Significant increase in lead volume while reducing Cost Per Lead (CPL)</p>
                            </div>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>The Results: Efficiency and Scale Unlocked</h2>
                                <p>
                                    By strategically empowering the account's existing data, the results were delivered rapidly, demonstrating that a small strategic shift can yield massive performance gains.
                                </p>
                                <div className={styles.resultsList}>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultValue}>+25%</div>
                                        <p>Lead Volume Increased by 25% in two months, driven by the successful expansion into high-value search queries via Broad Match keywords.</p>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultValue}>-15%</div>
                                        <p>Cost Per Lead (CPL) Decreased by 15%, as the Target CPA strategy optimized bidding for only the most profitable lead opportunities.</p>
                                    </div>
                                </div>
                                <p>
                                    The client gained a scalable, predictable lead generation engine that can be reliably expanded to future locations, making their advertising budget work much harder. The CPL drop provided the client with a significantly larger pool of marketing budget to reinvest in other areas of the business or to accelerate growth in priority locations.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </article>

            <FreeAudit />
            <Footer />
        </main>
    );
}
