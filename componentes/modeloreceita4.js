import Menu from './menu'
import Footer from './footer'
import Image from 'next/image'
import styles from '../styles/Receitas.module.css'


function ModeloReceita4(){
    return (
        
        <>
         <div className={styles.container}>

          <div className={styles.div7}>  
         <Image src="/foto4.png" layout='fill' objectFit='cover'/> 
         </div> 

        <h1>PIMENTÃO RECHEADO COM QUEIJO COTTAGE</h1>

       <h2>INGREDIENTES</h2>



<p>
<ul>
    <li>1 pimentão grande</li>
    <li>150 g de queijo cottage - cerca de uma xícara</li>
    <li>2 colheres de sopa de molho de tomate</li>
    <li>2 fatias de muçarela</li>
    <li>Ervas à gosto</li >
    <li>Sal</li>
    <li>Pimenta do reino</li >
    <li></li >

</ul>
<h2>MODO  DE  PREPARO</h2>

<ul>
    <li>Pré-aqueça o forno a 200ºC</li>
    <li>Limpe o pimentão, corte o top, remova o interior e faça uma "base" de queijo muçarela</li>
    <li>Em uma tigela, misture o queijo cottage, o molho de tomate, as ervas (eu usei manjericão e salsinha), sal e pimenta do reino à gosto.</li>
    <li>Depois, coloque o recheio no pimentão e cubra com uma fatia de queijo muçarela. Leve ao forno por 20 minutos</li>
    <li>Bom apetite!</li>


</ul>

</p>
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
</div>


        </>
    )
}

export default ModeloReceita4