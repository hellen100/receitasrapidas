import Menu from './menu'
import Footer from './footer'
import Image from 'next/image'
import styles from '../styles/Receitas.module.css'


function ModeloReceita6(){
    return (
        
        <>
         <div className={styles.container}>
          <div  className={styles.div7}>  
          <Image src="/panqueca.png"layout='fill' objectFit='cover'/>
          </div> 
        <h1>Panqueca</h1>

       <h2>INGREDIENTES</h2>



<p>
<ul>
    <li>1 pacote de massa fresca para lasanha (500g)</li>
    <li>350g de queijo mussarela fatiado</li>
    <li>350g de presunto fatiado</li>
    <li>Margarina para untar</li>
    <li>2 xícaras (chá) de molho de tomate (comprado pronto)</li >
    <li>100g de queijo parmesão ralado</li>
    <li>Folhas de manjericão para polvilhar</li >
    <li>Tomates-cereja para decorar</li >

</ul>
<h2>MODO  DE  PREPARO</h2>

<ul>
    <li>Sobre cada quadrado de massa de lasanha, coloque uma fatia de mussarela e uma de presunto.</li>
    <li>Enrole como rocamboles e coloque, lado a lado, em um refratário grande untado.</li>
    <li>Cubra com o molho de tomate, polvilhe com o parmesão e leve ao forno médio, pré aquecido, por 20 minutos.</li>
    
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

export default ModeloReceita6