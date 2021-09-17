import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Centro(){
    return (
        <>           
         <div className={styles.gridd}>
          <Link href="/receita1" >
           <a className={styles.card}>
            <h3>Receita de Abobrinha&rarr;</h3>
            <p>Rápido e Prática.</p>
            <Image src="/abobrinha2.png" width={940} height={480} />
          </a>
          </Link>

          <Link href="/receita2">
          <a  className={styles.card}>
            <h3>Receita de Frango &rarr;</h3>
            <p>Rápido e Prática.</p>
            <Image src="/Imagen Frango.png" width={900} height={480} />
          </a>
          </Link>

          <Link href="/receita3">
          <a  className={styles.card}>
            <h3>Receita de Abacaxi &rarr;</h3>
            <p>Rápido e Prática.</p>
            <Image src="/abacaxi.png" width={900} height={480} />
          </a>
          </Link>

          <Link href="/receita4">
          <a  className={styles.card}>
            <h3>Receita de Pimentão &rarr;</h3>
            <p>
            Rápido e Prática.
            </p>
            <Image src="/pimentão.png" width={900} height={480} />
          </a>
          </Link>

          <Link href="/receita5">
          <a  className={styles.card}>
           <h3>Receita Torta de Morango&rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/torta1.png" width={940} height={480} />
          </a>
          </Link>
          <Link href="/receita6">
          <a  className={styles.card}>
            <h3>Receita de Panqueca &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/panqueca.png" width={900} height={480} />
          </a>
          </Link>

          <Link href="/receita7">
          <a  className={styles.card}>
            <h3>Receita de Lasanha &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/lasanha.png" width={900} height={480} />
          </a>
          </Link>

          <Link href="/receita8">
          <a  className={styles.card}>
             <h3>Receita de Bolo de Cenoura &rarr;</h3>
            <p>
            Rápido e Pratica.
            </p>
            <Image src="/bolo.png" width={900} height={480} />
          </a>
          </Link>




        </div>
        </>
        
    )
}

export default Centro