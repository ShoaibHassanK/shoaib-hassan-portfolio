import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div>
                    &copy; {new Date().getFullYear()} Shoaib Hassan. All rights reserved.
                </div>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/about" className={styles.link}>About Me</Link>
                    <Link href="mailto:shoaib.hb28@gmail.com" className={styles.link}>Contact</Link>
                </div>
            </div>
        </footer>
    );
}
