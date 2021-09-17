import Image from 'next/image'
import Link  from 'next/link'
import styles from '../styles/Home.module.css'

export default function index() {
  return (
    
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <p className={styles.card}>
            <h1 >Seja bem-vindo </h1>
            <h2>Receitas rápidas</h2>
          <p >
            Aqui você irá desfrutar de <br/>
            Receitas deliciosas.
          </p>
          <Link href="/home">
          <a ><button className={styles.button}>CLIQUE PARA COZINHAR</button></a>
          </Link>
          </p>
        <Image src="/frango.jpg" width={400} height={250} />
        </ div>
      </main>
    </div>
     
  )
}