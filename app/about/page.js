"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from './page.module.css';

const CAREER_TIMELINE = [
    {
        year: "Feb 2024 – Dec 2025",
        title: "Performance Marketing Manager",
        company: "NAO MEDICAL",
        focus: "Current Leadership Role. Managing $50K+ monthly ad spend for a leading healthcare provider, focusing on aggressive growth and efficiency. Successfully drove a 25% ROAS increase and 30% CAC reduction through strategic bid experiments.",
        skills: "Advanced Tracking & Optimization: Google Ads Bid Experimentation, Enhanced/Offline Tracking Implementation, Google Conversion Center Optimization (via GTM/GA4 integration)."
    },
    {
        year: "Oct 2024 – May 2025",
        title: "Performance Marketing Consultant",
        company: "Cocoon Digital Media",
        focus: "Provided expert counsel and led comprehensive paid media strategies for SaaS and service clients. Focused on optimizing the conversion funnel, resulting in a 25% uplift in conversion rates.",
        skills: "Conversion Optimization: Strategic A/B Testing, Landing Page Optimization for Quality Score, Expert Strategic Counsel."
    },
    {
        year: "Jan 2024 – July 2024",
        title: "Performance Marketing Consultant",
        company: "ZIKRA INFOTECH LLC",
        focus: "Led paid media for 15+ clients, specializing in scaling e-commerce campaigns. Successfully drove a 300%+ ROAS uplift in e-commerce accounts.",
        skills: "E-commerce & Full-Funnel: Google Merchant Center Optimization, Shopping Campaign Scaling, Full-Funnel Tracking in GA4."
    },
    {
        year: "Jan 2022 – Dec 2023",
        title: "Paid Marketing Specialist",
        company: "HYPE CULTURE",
        focus: "Developed comprehensive funnel strategies for e-commerce, service, and B2B clients on Google and Bing. Consistently managed high-performing sales campaigns, maintaining a 2.7x ROAS.",
        skills: "Core Campaign Management: Search & Retargeting Campaign Strategy, Creative Scriptwriting, Account Audits."
    },
    {
        year: "Aug 2023",
        title: "Google Business Intelligence Professional Certificate",
        company: "Certification",
        focus: "Deepened skills in data handling, reporting, and business modeling to inform strategic decisions.",
        skills: "Business Intelligence (BI), Looker Studio, Tableau."
    },
    {
        year: "2021",
        title: "Start of Digital Marketing Journey",
        company: "Self-Directed Learning",
        focus: "The Foundation: Began intense self-directed learning in digital marketing, paid media, and data analytics.",
        skills: "Foundational Skills & Certifications: Google Digital Marketing & E-commerce, Meta Social Media Marketing, Facebook Blueprint."
    },
    {
        year: "2019",
        title: "University Graduation",
        company: "Academic Foundation",
        focus: "Academic Foundation: Completed formal education, providing a strong base in critical thinking and problem-solving.",
        skills: "Critical Thinking, Problem-Solving."
    }
];

export default function About() {
    return (
        <main>
            <Header />
            <section className={styles.aboutSection}>
                <div className="container">
                    <h1 className={styles.pageTitle}>My Journey</h1>
                    <p className={styles.intro}>
                        A timeline of my professional evolution in performance marketing and Google Ads.
                    </p>

                    <div className={styles.timeline}>
                        {CAREER_TIMELINE.map((item, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.timelineMarker}></div>
                                <div className={styles.timelineContent}>
                                    <span className={styles.year}>{item.year}</span>
                                    <h3 className={styles.roleTitle}>{item.title}</h3>
                                    <h4 className={styles.company}>{item.company}</h4>

                                    <div className={styles.details}>
                                        <div className={styles.detailBlock}>
                                            <span className={styles.label}>Key Focus & Impact:</span>
                                            <p>{item.focus}</p>
                                        </div>
                                        <div className={styles.detailBlock}>
                                            <span className={styles.label}>Core Technical Skills:</span>
                                            <p className={styles.skills}>{item.skills}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
