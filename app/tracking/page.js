import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FreeAudit from "@/components/FreeAudit";
import styles from "./page.module.css";
import Image from "next/image";

export default function TrackingPage() {
    return (
        <main>
            <Header />

            {/* Hero Section */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={styles.headline}>Your Digital Marketing is Only as Good as Your Data</h1>
                        <h2 className={styles.subHeadline}>Stop guessing. Start scaling with 100% conversion accuracy.</h2>
                        <p className={styles.heroText}>
                            Poor performance is usually a data problem. Broken tracking leaves your algorithms flying blind while wasting budget on the wrong users.
                        </p>
                        <div className={styles.authorityLine}>
                            I build "bulletproof" tracking ecosystems for 100+ businesses to ensure every conversion is captured and every cent of ad spend is accounted for.
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section className={styles.infraSection}>
                <div className="container">
                    <div className={styles.infraContainer}>
                        {/* Note: User asked to "represent it in an ideal way alongside the theme of the website." 
                 So I added a small intro text or just kept it clean. 
                 The request had: "It strategically shows that i have worked with this many accounts to build authority." 
                 I'll just let the cards speak for themselves or add a small section title if needed. 
                 Since the design is minimal, cards are good.
             */}
                        <div className={styles.infraGrid}>

                            {/* Card 1 */}
                            <div className={styles.infraCard}>
                                <h3 className={styles.infraTitle}>Google Ads Tracking</h3>
                                <span className={styles.infraValue}>Smart Bidding Accuracy</span>
                                <span className={styles.infraCount}>100+ Accounts</span>
                            </div>

                            {/* Card 2 */}
                            <div className={styles.infraCard}>
                                <h3 className={styles.infraTitle}>GA4 Properties</h3>
                                <span className={styles.infraValue}>Custom Event Precision</span>
                                <span className={styles.infraCount}>100+ Accounts</span>
                            </div>

                            {/* Card 3 */}
                            <div className={styles.infraCard}>
                                <h3 className={styles.infraTitle}>Meta Pixels</h3>
                                <span className={styles.infraValue}>CAPI & Server-Side Setup</span>
                                <span className={styles.infraCount}>100+ Deployed</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* GTM Clients Section */}
            <section className={styles.gtmSection}>
                <div className="container">
                    <h2 className={styles.gtmHeadline}>Results Built on Bulletproof Data</h2>
                    <p className={styles.gtmSubHeadline}>Different industries, the same outcome: profitable, predictable growth.</p>

                    <div className={styles.gtmScrollContainer}>
                        {/* Card 1: E-commerce */}
                        <div className={styles.gtmCard}>
                            <div className={styles.gtmImageWrapper}>
                                <Image
                                    src="/images/tracking/gtm-ecommerce.png"
                                    alt="Google Tag Manager E-commerce Tracking"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.gtmCardContent}>
                                <p className={styles.gtmText}>
                                    Full-funnel purchase tracking with dynamic revenue and item-level data accuracy.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Leads */}
                        <div className={styles.gtmCard}>
                            <div className={styles.gtmImageWrapper}>
                                <Image
                                    src="/images/tracking/gtm-leads.png"
                                    alt="Google Tag Manager Lead Tracking"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.gtmCardContent}>
                                <p className={styles.gtmText}>
                                    Custom form-fill tracking with intent-based triggers to optimize lead quality.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Advanced/Meetings */}
                        <div className={styles.gtmCard}>
                            <div className={styles.gtmImageWrapper}>
                                <Image
                                    src="/images/tracking/gtm-advanced.png"
                                    alt="Advanced Event Tracking"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.gtmCardContent}>
                                <p className={styles.gtmText}>
                                    Advanced event tracking for meetings and leads to eliminate attribution gaps.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Looker Studio Section */}
            <section className={styles.gtmSection}>
                <div className="container">
                    <h2 className={styles.gtmHeadline}>Turn Complex Data into Clear Decisions</h2>
                    <p className={styles.gtmSubHeadline}>Custom Looker Studio dashboards that act as your single source of truth.</p>

                    <div className={styles.gtmScrollContainer}>
                        {/* Card 1: Ads Intelligence */}
                        <div className={styles.gtmCard}>
                            <div className={styles.gtmImageWrapper}>
                                <Image
                                    src="/images/tracking/looker-ads-intelligence.png"
                                    alt="Google Ads Lead Intelligence Dashboard"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.gtmCardContent}>
                                <p className={styles.gtmText}>
                                    The Growth Focus Google Ads Lead Intelligence: Tracking spend, conversion volume, and cost per acquisition.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Conversion Mix */}
                        <div className={styles.gtmCard}>
                            <div className={styles.gtmImageWrapper}>
                                <Image
                                    src="/images/tracking/looker-conversion-mix.png"
                                    alt="Google Ads Conversion Mix Dashboard"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.gtmCardContent}>
                                <p className={styles.gtmText}>
                                    Google Ads Conversion Mix: A precise breakdown of WhatsApp, chat, and form leads.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: E-commerce */}
                        <div className={styles.gtmCard}>
                            <div className={styles.gtmImageWrapper}>
                                <Image
                                    src="/images/tracking/looker-ecommerce-insights.png"
                                    alt="Google E-commerce Insights Dashboard"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.gtmCardContent}>
                                <p className={styles.gtmText}>
                                    Google E-commerce Insights: Real-time tracking of revenue, transactions, and AOV scaling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About/Audit Section with Custom Text */}
            <FreeAudit customTitle="Stop the data leaks. Get your <span class='highlight'>free tracking audit</span>" />

            <Footer />
        </main>
    );
}
