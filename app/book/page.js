"use client";

import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from './page.module.css';
import { Calendar, Clock, Video } from 'lucide-react';

export default function BookMeeting() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>Schedule Your Free Strategy Call</h1>
                        <p className={styles.subtitle}>
                            Let's discuss your Google Ads performance and identify opportunities for growth.
                            No sales pressure, just actionable insights.
                        </p>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <Clock className={styles.icon} size={20} />
                                <span>15 Minutes</span>
                            </div>
                            <div className={styles.feature}>
                                <Video className={styles.icon} size={20} />
                                <span>Video Call</span>
                            </div>
                            <div className={styles.feature}>
                                <Calendar className={styles.icon} size={20} />
                                <span>Your Schedule</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.calendarWrapper}>
                        <div
                            className="calendly-inline-widget"
                            data-url="https://calendly.com/shoaib-hb28?hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=0066cc"
                            style={{ minWidth: '320px', height: '700px' }}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
