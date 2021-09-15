import Menu from './menu'
import Footer from './footer'
import Image from 'next/image'
import styles from '../styles/Receitas.module.css'

function ModeloReceita8(){
    return (
        
        <>
        <div className={styles.container}>
         <Image src="/bolo.png" width={300} height={180} />
        
        <h1>Bolo de Cenoura</h1>

       <h2>INGREDIENTES</h2>



<p>
<ul>
    <li>1/2 xícara (chá) de óleo </li>     
    <li> 1 xícara (chá) de leite  </li>
    <li>3 cenouras médias raladas</li>
    <li>4 ovos</li>
    <li>2 xícaras (chá) de açúcar</li>
    <li>2 e 1/2 xícaras (chá) de farinha de trigo</li >
    <li>1 colher (sopa) de fermento em pó</li>
    

             <h2>Cobertura</h2>

    <li>1 colher (sopa) de manteiga</li >
    <li>3 colheres (sopa) de chocolate em pó</li >   
    <li>1 xícara (chá) de açúcar</li> 
    <li>1 xícara (chá) de leite</li>

</ul>
<h2>MODO  DE  PREPARO</h2>

<ul>
    <li>Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.</li>
    <li>Acrescente o açúcar e bata novamente por 5 minutos.</li>
    <li>Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.</li>
    <li>Acrescente o fermento e misture lentamente com uma colher.</li>
    <li>Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.</li>
    <li>Despeje em uma tigela a manteiga, o chocolate em pó, o açúcar e o leite, depois misture.</li>
    <li>Leve a mistura ao fogo e continue misturando até obter uma consistência cremosa, depois despeje a calda por cima do bolo.</li>


</ul>
</p>
</div>


        </>
    )
}

export default ModeloReceita8