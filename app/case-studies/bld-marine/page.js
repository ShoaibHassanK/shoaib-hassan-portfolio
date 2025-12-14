"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, TrendingUp, DollarSign, Target } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FreeAudit from "@/components/FreeAudit";
import styles from './page.module.css';

export default function BLDMarineCaseStudy() {
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
                            <span className={styles.industry}>Marine Parts & E-commerce</span>
                            <span className={styles.client}>BLD Marines</span>
                        </div>
                        <h1 className={styles.title}>
                            Strategic Profit-First Segmentation Drives 35% ROAS Increase While Cutting Costs by 25%
                        </h1>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <TrendingUp className={styles.statIcon} />
                                <div className={styles.statValue}>+35%</div>
                                <div className={styles.statLabel}>Increase in ROAS</div>
                            </div>
                            <div className={styles.statCard}>
                                <DollarSign className={styles.statIcon} />
                                <div className={styles.statValue}>-25%</div>
                                <div className={styles.statLabel}>Decrease in CPA</div>
                            </div>
                            <div className={styles.statCard}>
                                <Target className={styles.statIcon} />
                                <div className={styles.statValue}>Profit</div>
                                <div className={styles.statLabel}>Primary Focus</div>
                            </div>
                        </div>
                    </header>

                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>The Challenge: The Illusion of Revenue</h2>
                                <p>
                                    BLD Marines faced a classic e-commerce scaling trap. While their Google Ads campaigns were generating consistent sales volume, the profits were being eroded:
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Low-Margin Drain:</strong> The existing Google Shopping and Search campaigns treated all products equally, resulting in the bulk of ad spend going to high-volume, low-margin marine parts.
                                    </li>
                                    <li>
                                        <strong>Neglected Profit Centers:</strong> High-margin inventory from specific, premium brands was consistently underperforming and being outspent by cheaper items, making overall campaign profitability stagnant.
                                    </li>
                                    <li>
                                        <strong>Inefficient Bidding:</strong> The strategy was optimized for basic conversion value without factoring in the crucial profit margin, leading to significant investment in unprofitable conversions.
                                    </li>
                                </ul>
                                <p className={styles.highlight}>
                                    The primary need was not just more sales, but smarter sales—a structural change that directed the budget toward maximum gross profit.
                                </p>
                            </section>

                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/bld-marine-ads-dashboard.png"
                                    alt="Google Ads Dashboard showing improved performance"
                                    width={1200}
                                    height={600}
                                    className={styles.image}
                                />
                                <p className={styles.caption}>Performance improvements after implementing profit-first segmentation</p>
                            </div>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>My Approach: Margin-Based Campaign Segmentation</h2>
                                <p>
                                    I executed a strategic overhaul focused on transforming the account from a revenue machine into a profit machine. This required building a granular structure to control budget allocation based on the true value of each product.
                                </p>

                                <div className={styles.step}>
                                    <h3>1. Profit-Based Campaign Architecture</h3>
                                    <p>I restructured the entire product feed and campaign structure to prioritize profitability:</p>
                                    <ul className={styles.checkList}>
                                        <li>I segregated all inventory into distinct campaigns based on High-Margin, Mid-Margin, and Low-Margin tiers, regardless of product category.</li>
                                        <li>This segregation allowed me to set disproportionately high bid strategies on the high-margin campaigns, ensuring they won auctions and received the majority of the budget.</li>
                                    </ul>
                                </div>

                                <div className={styles.step}>
                                    <h3>2. Strategic Bidding and Budget Control</h3>
                                    <p>By applying this profit-based segmentation, I was able to implement a tailored bidding approach:</p>
                                    <ul className={styles.checkList}>
                                        <li>The High-Margin campaigns were assigned a sophisticated bidding strategy to aggressively pursue conversions, as the higher profit pool justified the increased CPA.</li>
                                        <li>The Low-Margin campaigns received protective bidding limits, ensuring they only generated sales when the Cost Per Conversion (CPA) was extremely efficient.</li>
                                    </ul>
                                </div>

                                <div className={styles.step}>
                                    <h3>3. Brand Protection and Conversion Efficiency</h3>
                                    <p>
                                        To further increase efficiency and capture high-intent traffic, I launched a dedicated Brand Campaign. This ensured BLD Marines maintained control over their branded searches, capturing highly qualified, low-cost conversions and freeing up the main budget for expansion.
                                    </p>
                                </div>
                            </section>

                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/bld-marine-merchant-center.png"
                                    alt="Google Merchant Center showing product feed optimization"
                                    width={1200}
                                    height={600}
                                    className={styles.image}
                                />
                                <p className={styles.caption}>Optimized product feed structure in Google Merchant Center</p>
                            </div>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>The Results: Profitability Over Volume</h2>
                                <p>
                                    The transition to a profit-segmented strategy quickly yielded significant improvements in both efficiency and financial returns.
                                </p>
                                <div className={styles.resultsList}>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultValue}>35%</div>
                                        <p>Increase in ROAS by shifting spend away from low-value transactions toward premium, high-profit products.</p>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultValue}>25%</div>
                                        <p>Decrease in CPA, as the overall budget was used more efficiently on searches that led to predictable, high-value outcomes.</p>
                                    </div>
                                </div>
                                <p>
                                    The business gained a clear, transparent view of how their marketing budget was driving actual profit, not just top-line revenue. The account structure is now future-proofed and allows BLD Marines to dynamically adjust bids and budgets based on inventory margins and seasonal changes.
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
