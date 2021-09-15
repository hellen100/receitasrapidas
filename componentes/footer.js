import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Footer(){
    return (
        <>
            <footer className={styles.footer}>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/footer.png" alt="Vercel Logo" width={720} height={160} />
                </span>
                </a>
            </footer>
        </>
    )
}

export default Footer