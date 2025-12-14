"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo}>
                    Shoaib Hassan
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <div className={styles.navLinks}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/case-studies" className={styles.navLink}>Case Studies</Link>
                        <Link href="/about" className={styles.navLink}>About Me</Link>
                    </div>
                    <Link href="/book" className={styles.ctaButton}>
                        Let's Talk
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} color="#111" /> : <Menu size={24} color="#111" />}
                </button>

                {/* Mobile Navigation Overlay */}
                <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
                    <div className={styles.mobileNavLinks}>
                        <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>Home</Link>
                        <Link href="/case-studies" className={styles.mobileNavLink} onClick={toggleMenu}>Case Studies</Link>
                        <Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>About Me</Link>
                        <Link href="/book" className={styles.mobileCtaButton} onClick={toggleMenu}>
                            Let's Talk
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
