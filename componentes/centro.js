import Image from 'next/image'
import styles from '../styles/Home.module.css'


function Centro(){
    return (
        <>           
         <div className={styles.gridd}>
          <a href="/receita1" className={styles.card}>
            <h3>Receita de Abobrinha&rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/abobrinha2.png" width={940} height={480} />
          </a>

          <a href="/receita2" className={styles.card}>
            <h3>Receita de Frango &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/Imagen Frango.png" width={900} height={480} />
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Receita de Abacaxi &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/abacaxi.png" width={900} height={480} />
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Receita de Pimentão &rarr;</h3>
            <p>
            Rápido e Pratica.
            </p>
            <Image src="/pimentão.png" width={900} height={480} />
          </a>
        </div>    
           <div className={styles.gridd}>
          <a href="/Receita" className={styles.card}>
            <h3>Receita de Panqueca&rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/panqueca.png" width={940} height={480} />
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Receita de Torta de Morango &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/torta.png" width={900} height={480} />
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Receita de Lasanha &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/lasanha.png" width={900} height={480} />
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Receita de Bolo de Cenoura &rarr;</h3>
            <p>
            Rápido e Pratica.
            </p>
            <Image src="/bolo.png" width={900} height={480} />
          </a>
        </div>    
        </>
        
    )
}

export default Centro