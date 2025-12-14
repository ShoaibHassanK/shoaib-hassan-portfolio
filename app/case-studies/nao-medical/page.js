"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TrendingDown, TrendingUp, Target } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FreeAudit from "@/components/FreeAudit";
import styles from './page.module.css';

export default function NaoMedicalCaseStudy() {
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
                            <span className={styles.industry}>Healthcare / Medical Services</span>
                            <span className={styles.client}>Nao Medical</span>
                        </div>
                        <h1 className={styles.title}>
                            How I Delivered a 35% Decrease in Cost Per Conversion in 3 Months for a Multi-Location Healthcare Provider
                        </h1>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <TrendingDown className={styles.statIcon} />
                                <div className={styles.statValue}>-35%</div>
                                <div className={styles.statLabel}>Decrease in CPA</div>
                            </div>
                            <div className={styles.statCard}>
                                <TrendingUp className={styles.statIcon} />
                                <div className={styles.statValue}>High</div>
                                <div className={styles.statLabel}>Patient Volume</div>
                            </div>
                            <div className={styles.statCard}>
                                <Target className={styles.statIcon} />
                                <div className={styles.statValue}>11</div>
                                <div className={styles.statLabel}>Locations Optimized</div>
                            </div>
                        </div>
                    </header>

                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>The Challenge: Fragmentation and Wasted Spend</h2>
                                <p>
                                    Nao Medical, operating 11 key locations across the region, faced a critical profitability issue: their Google Ads budget was being allocated inefficiently.
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Ineffective Bidding:</strong> The existing campaigns were set to Maximize Clicks, which generated a lot of low-quality traffic but drove the Cost Per Conversion (CPC) unsustainably high.
                                    </li>
                                    <li>
                                        <strong>Irrelevant Traffic:</strong> The account relied heavily on Broad Match keywords, resulting in ad spend on irrelevant search terms that had no chance of converting into actual patient bookings.
                                    </li>
                                    <li>
                                        <strong>Unstructured Account:</strong> All 11 locations were lumped together, preventing true performance optimization based on regional patient demand or specific service needs.
                                    </li>
                                </ul>
                                <p className={styles.highlight}>
                                    The client needed a fundamental restructuring and a shift in strategy to turn their Google Ads investment into a reliable, profitable patient acquisition channel.
                                </p>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>My Approach: Precision, Control, and Intent</h2>
                                <p>
                                    I implemented a three-pronged strategy focused on efficiency and control, moving the account away from simple traffic generation toward profitable patient conversions.
                                </p>

                                <div className={styles.step}>
                                    <h3>1. Structural Optimization & Bidding Shift</h3>
                                    <p>The first major change was moving the bidding strategy from the inefficient Maximize Clicks to Target CPA. This immediately forced Google’s algorithm to focus only on users likely to convert within a profitable cost threshold, rather than simply driving cheap, irrelevant clicks.</p>
                                </div>

                                <div className={styles.step}>
                                    <h3>2. Match Type Migration for Efficiency</h3>
                                    <p>To eliminate wasted spend, I executed a controlled migration of match types:</p>
                                    <ul className={styles.checkList}>
                                        <li><strong>From Broad Match:</strong> I significantly reduced dependence on vague Broad Match keywords.</li>
                                        <li><strong>To Exact Match & Phrase Match:</strong> I focused budget on high-intent terms using Exact and Phrase Match, ensuring that Nao Medical was only showing ads to users actively searching for their services. This directly reduced wasted ad spend on irrelevant searches.</li>
                                    </ul>
                                </div>

                                <div className={styles.step}>
                                    <h3>3. Location-Based and Brand Campaign Segmentation</h3>
                                    <p>To support Nao Medical’s 11 locations, I restructured the account to allow for precise local targeting and budget control:</p>
                                    <ul className={styles.checkList}>
                                        <li><strong>Dedicated Location Campaigns:</strong> I created separate, tailored campaigns for each of the 11 locations. This allowed me to allocate budget based on each location's performance and patient capacity.</li>
                                        <li><strong>Brand Campaign Launch:</strong> I launched a new, dedicated Brand Campaign. This protected the brand name from competitors, captured high-intent existing customers, and provided a strong, reliable source of low-cost conversions.</li>
                                    </ul>
                                </div>
                            </section>

                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/nao-medical-ads-dashboard.png"
                                    alt="Google Ads Dashboard showing CPA decrease"
                                    width={1200}
                                    height={600}
                                    className={styles.image}
                                />
                                <p className={styles.caption}>Significant decrease in Cost Per Conversion (CPA) over 3 months</p>
                            </div>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>The Results: Higher Patient Volume at a Lower Cost</h2>
                                <p>
                                    Within three months of implementing the new structure and strategy, Nao Medical saw a significant improvement in efficiency and profitability, validating the shift from traffic focus to conversion focus.
                                </p>
                                <div className={styles.resultsList}>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultValue}>-35%</div>
                                        <p>Cost Per Conversion (CPA) dropped by 35% in just three months.</p>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultValue}>High</div>
                                        <p>Ad Spend Efficiency was dramatically improved, with budget now focused purely on high-intent patient searches.</p>
                                    </div>
                                </div>
                                <p>
                                    The segmented account structure made performance transparent, allowing the client to see exactly how each of their 11 locations was performing. The new strategy provided a predictable, scalable model for patient acquisition, enabling the client to plan future expansion with confidence.
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
