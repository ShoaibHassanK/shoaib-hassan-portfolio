"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TrendingDown, TrendingUp, DollarSign } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FreeAudit from "@/components/FreeAudit";
import styles from './page.module.css';

export default function AlMamourahCaseStudy() {
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
                            <span className={styles.industry}>Local Services / High-End Retail</span>
                            <span className={styles.client}>Al Mamourah Tailoring</span>
                        </div>
                        <h1 className={styles.title}>
                            Strategic Quality Correction: Driving Conversion Profitability by Sacrificing 25% of Low-Value Leads
                        </h1>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <TrendingDown className={styles.statIcon} />
                                <div className={styles.statValue}>-25%</div>
                                <div className={styles.statLabel}>Lead Volume (Planned)</div>
                            </div>
                            <div className={styles.statCard}>
                                <TrendingUp className={styles.statIcon} />
                                <div className={styles.statValue}>High</div>
                                <div className={styles.statLabel}>Lead Quality</div>
                            </div>
                            <div className={styles.statCard}>
                                <DollarSign className={styles.statIcon} />
                                <div className={styles.statValue}>Improved</div>
                                <div className={styles.statLabel}>Cost Efficiency</div>
                            </div>
                        </div>
                    </header>

                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>The Challenge: Restricted Reach and Expensive Volume</h2>
                                <p>
                                    Al Mamourah Tailoring was operating with an ad account that had reached a ceiling on growth and efficiency, a classic case of an account being too conservatively managed:
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Minimal Reach:</strong> The campaigns were exclusively restricted to a minute number of Exact Match keywords, causing the brand to miss out on vast amounts of relevant search traffic within the competitive UAE market.
                                    </li>
                                    <li>
                                        <strong>Competitive Chokehold:</strong> The small keyword set ensured high competition, driving up the cost of the limited traffic they did receive, leading to poor overall profitability.
                                    </li>
                                    <li>
                                        <strong>Stagnant Performance:</strong> While the account had strong historical conversion data, the rigid structure prevented Google's Smart Bidding from using this data to identify new, high-value opportunities.
                                    </li>
                                </ul>
                                <p className={styles.highlight}>
                                    The challenge was to surgically expand reach to unlock scale without flooding the client with low-quality, unprofitable inquiries.
                                </p>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>My Approach: Controlled Expansion for Quality</h2>
                                <p>
                                    I executed a precise strategy leveraging the power of Google's algorithms and the account's existing conversion history, focusing on quality intent over raw lead count.
                                </p>

                                <div className={styles.step}>
                                    <h3>1. Data-Informed Expansion to Broad Match</h3>
                                    <p>I recognized that the account's sufficient historical conversion data was the key to unlocking scale. This history provided the necessary intelligence for Google's machine learning models.</p>
                                    <ul className={styles.checkList}>
                                        <li>I strategically moved the keyword targeting from the restrictive Exact Match to Broad Match and added many highly relevant, thematic keywords. This action immediately opened the campaigns to a massive pool of new searches and qualified traffic.</li>
                                    </ul>
                                </div>

                                <div className={styles.step}>
                                    <h3>2. Strategic Quality Control</h3>
                                    <p>Crucially, this expansion was paired with an advanced bidding strategy (e.g., Target CPA or Maximize Conversion Value). This ensured that even with the broad match expansion, the algorithm only pursued leads that showed a high likelihood of becoming a paying, high-ticket tailoring client.</p>
                                    <p><strong>The Outcome:</strong> The system ruthlessly filtered out broad, low-intent searches (e.g., "tailor price list") that would have previously wasted budget, leading to the necessary correction in lead volume.</p>
                                </div>

                                <div className={styles.step}>
                                    <h3>3. Unlocking Competitive Edge</h3>
                                    <p>
                                        By moving away from the highly saturated, minute set of Exact Match keywords, I found and captured new, lower-cost search queries, reducing the overall competitive pressure on their budget.
                                    </p>
                                </div>
                            </section>

                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/al-mamourah-ads-dashboard.png"
                                    alt="Google Ads Dashboard showing improved conversion rate and cost efficiency"
                                    width={1200}
                                    height={600}
                                    className={styles.image}
                                />
                                <p className={styles.caption}>Improved conversion rate and cost efficiency despite lower lead volume</p>
                            </div>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>The Results: Higher Quality, Greater Profit</h2>
                                <p>
                                    The strategic shift resulted in a necessary decrease in overall lead volume, which immediately signaled an increase in lead quality and profitability—the ultimate goal for a premium service.
                                </p>
                                <div className={styles.resultsList}>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultValue}>-25%</div>
                                        <p>Lead Volume Decreased by 25%—a planned reduction that signaled the successful elimination of low-quality, unprofitable traffic previously generated by inefficient targeting.</p>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <div className={styles.resultValue}>High</div>
                                        <p>Lead Quality Increased Significantly—the remaining 75% of leads were highly qualified, leading to a much higher conversion rate from lead-to-consultation and higher average order values for bespoke services.</p>
                                    </div>
                                </div>
                                <p>
                                    Cost Efficiency Improved—By prioritizing the profitable signal from historical data, the budget was spent only on leads likely to convert into valuable customers, improving the overall campaign ROAS (Return on Ad Spend). The business gained a highly scalable model that uses intelligent automation to find profitable customers, a significant upgrade from their previous manual, restricted strategy.
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
