import Image from 'next/image'
import Link  from 'next/link'
import styles from '../styles/Home.module.css'

export default function index() {
  return (
    
    <div className={styles.container}>
      <Link>
        <title>Receitas Rápidas</title>
        <meta name="description" content="Generated by create next app" />
        <a rel="icon" href="/favicon.ico" />
      </Link>

      <main className={styles.main}>
        <div className={styles.grid}>
          <p className={styles.card}>
            <h1 >Seja bem-vindo </h1>
            <h2><link href="/home">Receitas rápidas</link></h2>
          <p >
            Aqui você irá desfrutar de <br/>
            comidas deliciosas, hlrgfuirg
          </p>
          <Link href="/home">
          <a ><button className={styles.button}>CLIQUE PARA COZINHAR</button></a>
          </Link>
          </p>
        <Image src="/frango.png" width={400} height={280} />
        </ div>
      </main>
    </div>
     
  )
}