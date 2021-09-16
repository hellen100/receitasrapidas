import Menu from './menu'
import Footer from './footer'
import Image from 'next/image'
import styles from '../styles/Receitas.module.css'


function ModeloReceita1(){
    return (
        
        <>
        <div className={styles.container}>
          <Image src="/foto1.png" width={400} height={280} />
<h1>Bolinho de Abóbora</h1>

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


</div>
        </>
    )
}

export default ModeloReceita1