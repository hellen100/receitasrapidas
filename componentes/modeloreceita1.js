import Menu from './menu'
import Footer from './footer'
import Image from 'next/image'
import styles from '../styles/Receitas.module.css'


function ModeloReceita1(){
    return (
        
        <>
        <div className={styles.container}>
            <div className={styles. div7} >
          <Image src="/foto1.png" layout='fill' objectFit='cover'/>
          </div>

<h1>Bolinho de Abobrinha</h1>

<h2>INGREDIENTES</h2>
<p> 
<ul>
    <li>1 abobrinha grande ralada</li>
    <li>1 Cebola Ralada</li>
    <li>2 Ovos</li>
    <li>Farinha de trigo o quanto baste para dar liga</li>
    <li>2 colheres de queijo parmesão ralado</li >
    <li>Salsinha a gosto</li>
    <li>Sal e pimenta do reino a gosto</li >
    <li>Óleo para fritar</li >
    
</ul>

<h2>MODO  DE  PREPARO</h2>

<ul>
    Em uma tigela grande coloque todos os ingredientes,menos os ovos e a farinha de trigo.
    Bata os ovos e junte à mistura, depois acrescente a farinha até dar ponto, tem que ficar consistente para poder fritar sem desmanchar.
    Depois com uma colher pegue um pouco da massa e frite em óleo bem quente até dourar.
    Escorra em papel toalha e sirva em seguida.
   
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

export default ModeloReceita1