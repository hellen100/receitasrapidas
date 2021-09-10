import Image from 'next/image'
import styles from '../styles/Home.module.css'


function Receita(){
    return (
        <>           
           <div className={styles.gridd}>
          <a href="/Receita" className={styles.card}>
            <h3>Receita de Abobrinha&rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/abobrinha2.png" width={400} height={280} />
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Receita de Frango &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/Imagen Frango.png" width={400} height={280} />
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Receita de Abacaxi &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/abacaxi.png" width={400} height={280} />
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Receita de Pimentão &rarr;</h3>
            <p>
            Rápido e Pratica.
            </p>
            <Image src="/pimentão.png" width={400} height={280} />
          </a>
        </div>    
        </>
        
    )
}

export default Receita