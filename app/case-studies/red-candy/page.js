"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, DollarSign, ShieldCheck } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FreeAudit from "@/components/FreeAudit";
import styles from './page.module.css';

export default function RedCandyCaseStudy() {
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
                            <span className={styles.industry}>E-commerce / Specialty Retail</span>
                            <span className={styles.client}>Red Candy</span>
                        </div>
                        <h1 className={styles.title}>
                            Turned an unprofitable ad account into a 2.89x ROAS less than 2 months
                        </h1>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <TrendingUp className={styles.statIcon} />
                                <div className={styles.statValue}>2.89x</div>
                                <div className={styles.statLabel}>ROAS (from 0.98x)</div>
                            </div>
                            <div className={styles.statCard}>
                                <DollarSign className={styles.statIcon} />
                                <div className={styles.statValue}>295%</div>
                                <div className={styles.statLabel}>Profitability Turnaround</div>
                            </div>
                            <div className={styles.statCard}>
                                <ShieldCheck className={styles.statIcon} />
                                <div className={styles.statValue}>60 Days</div>
                                <div className={styles.statLabel}>To Profitability</div>
                            </div>
                        </div>
                    </header>

                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>The Challenge: Inherited Failure and Wasted Budget</h2>
                                <p>
                                    When I took over the Red Candy account, the previous strategy was on the verge of collapsing profitability. The Return on Ad Spend (ROAS) sat at an alarming 0.98x, meaning the client was losing money on nearly every dollar spent on ads.
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Undisciplined Budgeting:</strong> Budget was indiscriminately scattered across the entire inventory, including low-margin and unproven products that had no historical sales data.
                                    </li>
                                    <li>
                                        <strong>Wasted Spend:</strong> Campaigns lacked structure, leading to budget being consumed by irrelevant searches and products that simply couldn't generate a return.
                                    </li>
                                    <li>
                                        <strong>Broken Foundation:</strong> The account required a complete audit and restructuring, as the foundational elements were leading to a steady financial drain.
                                    </li>
                                </ul>
                                <p className={styles.highlight}>
                                    The mandate was clear: stop the hemorrhaging immediately and prove that Google Ads could be a profitable channel.
                                </p>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>My Approach: Data-Driven Triage and Profit-First Focus</h2>
                                <p>
                                    I executed a two-month emergency restructure and optimization plan, prioritizing the fastest route to profitability by focusing budget exclusively on proven winners.
                                </p>

                                <div className={styles.step}>
                                    <h3>1. Account Audit and Strategic Segmentation</h3>
                                    <p>I performed a complete audit of the inherited account, identifying and pausing campaigns that were draining the budget on unproven or low-margin inventory.</p>
                                    <ul className={styles.checkList}>
                                        <li>I immediately rebranded the main Shopping Ads campaigns, creating a clean slate for optimization.</li>
                                        <li>I segmented the entire inventory based on two critical factors: Highest Profit Margins and Strongest Historical Sales Data.</li>
                                    </ul>
                                </div>

                                <div className={styles.step}>
                                    <h3>2. Aggressive Focus on Proven Winners</h3>
                                    <p>I aggressively increased marketing spend and high-priority bidding only on products that were historically top sellers and carried the highest profit margins.</p>
                                    <ul className={styles.checkList}>
                                        <li>Conversely, I systematically reduced or eliminated spend on new or low-margin products that lacked strong conversion data. This strategy instantly shifted the budget to where the fastest, most profitable conversions would occur.</li>
                                    </ul>
                                </div>

                                <div className={styles.step}>
                                    <h3>3. Brand Protection and Conversion Efficiency</h3>
                                    <p>
                                        To capture highly qualified traffic at the lowest possible cost, I launched a new, robust Brand Campaign. This campaign protected Red Candy’s branded search terms, ensuring a steady, reliable flow of low-CPA conversions to stabilize the account while the product-level segmentation took effect.
                                    </p>
                                </div>
                            </section>

                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/red-candy-ads-dashboard.png"
                                    alt="Google Ads Dashboard showing ROAS increase"
                                    width={1200}
                                    height={600}
                                    className={styles.image}
                                />
                                <p className={styles.caption}>Dramatic increase in ROAS and Conversion Value over 60 days</p>
                            </div>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>The Results: 295% Profitability Turnaround</h2>
                                <p>
                                    This disciplined, profit-first strategy led to an almost immediate and dramatic reversal of the account's financial trajectory in under two months.
                                </p>
                                <div className={styles.resultsList}>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultValue}>2.89x</div>
                                        <p>Return on Ad Spend (ROAS) surged from 0.98x to 2.89x, transitioning the client from losing money on every sale to generating a high, sustainable profit.</p>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultValue}>High</div>
                                        <p>Ad Spend Efficiency increased dramatically, as budget was focused exclusively on proven, high-intent products, eliminating waste.</p>
                                    </div>
                                </div>
                                <p>
                                    The immediate CPA decrease from the new Brand Campaign helped stabilize the account and provided a consistent stream of profitable conversions. Red Candy now operates with a clear, data-driven inventory roadmap, allowing them to scale their high-margin items with confidence.
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
