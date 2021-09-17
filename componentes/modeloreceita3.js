import Menu from './menu'
import Footer from './footer'
import Image from 'next/image'
import styles from '../styles/Receitas.module.css'


function ModeloReceita3(){
    return (
        
        <>
           <div className={styles.container}>
         <div className={styles.div7}>
         <Image src="/foto3.png" width={400} height={280} />
         </div>
        
         <h1>Brigadeiro de Abacaxi</h1>

        <h2>INGREDIENTES</h2>


<p>
<ul>
    <li>2 xícaras de abacaxi picado</li>
    <li>1 lata de leite condensado</li>
    <li>1 xícara de açúcar</li>
    <li>1 xícara de coco ralado</li>
    <li>Açúcar cristal ou coco ralado</li >
    

</ul>

<h2>MODO  DE  PREPARO</h2>

<ul>
    <li>Em uma panela misture o abacaxi, o leite condensado, o açúcar e coco ralado.</li>
    <li>Leve ao fogo e mexa sempre por aproximadamente 30 minutos, até desprender do fundo da panela. </li>
    <li>Coloque em um recipiente e espere esfriar. </li>
    <li>Faça bolinhas com a mão untada com água, passe no açúcar cristal ou coco ralado e coloque em forminhas de brigadeiro.</li>
   
</ul>
</p>
</div>
        </>
    )
}

export default ModeloReceita3