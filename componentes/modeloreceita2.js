import Menu from './menu'
import Footer from './footer'
import Image from 'next/image'
import styles from '../styles/Receitas.module.css'



function ModeloReceita2(){
    return (
        
        <>
        <div className={styles.container}>
         <div className={styles.div7} >
            <Image src="/foto2.png" layout='fill' objectFit='cover'/>
        </div>

         <h1>Filé Frango na Panela de Pressão</h1>
        <h2>INGREDIENTES</h2>
<p>
<ul>
    <li>2 colheres de sopa de óleo</li>
    <li>1/2 cebola picada</li>
    <li>4 filés de frango</li>
    <li>1 tomate picado em cubos</li>
    <li>Sal a gosto</li >
    <li>Pimenta-do-reino a gosto</li>
    <li>1/2 colher de sopa de colorau</li >
    <li>Orégano a gosto</li >

</ul>
<h2>MODO  DE  PREPARO</h2>

<ul>
    <li>Na panela de pressão, coloque o óleo e doure a cebola.</li>
    <li>Em seguida adicione o frango e o tomate.</li>
    <li>Tempere com sal, pimenta, colorau e orégano.</li>
    <li>Misture tudo, tampe a panela e deixe cozinhar na pressão por cerca 8 minutos.</li>
    <li>Retire a pressão com cuidado e está pronto para servir.</li>


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

export default ModeloReceita2