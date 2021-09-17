import Menu from './menu'
import Footer from './footer'
import Image from 'next/image'
import styles from '../styles/Receitas.module.css'

function ModeloReceita5(){
    return (
        
        <>
         <div className={styles.container}>
          <div className={styles.div7}>  
         <Image src="/torta1.png" layout='fill' objectFit='cover' />
         </div> 
        
         <h1>Torta de Morango</h1>
         <h2>INGREDIENTES</h2>
     <p>
       <ul>
    <li>1/2 xícara de chá de margarina ou manteiga</li>     
    <li>1 xícara de chá de farinha de trigo</li>
    <li>1/2 xícara de chá de Amido de Milho Maizena Logo</li>
    <li>1 gema</li>
    <li>1 colher de sopa de açúcar</li>
    <li>2 colheres de chá de essência de baunilha</li >
    <li>1/2 xícara de chá de Amido de Milho Maizena Logo</li>
    <li>3 xícaras de chá de leite</li>
    <li>1/2 xícara de chá de açúcar</li >
    <li>1/2 tablete de chocolate branco picado</li >   
    <li>Cobertura</li> 
    <li>1 caixa de morango picado</li>
    <li>1/2 tablete de chocolate branco picado</li>

</ul>
<h2>MODO  DE  PREPARO</h2>
<ul>
Em uma tigela média, junte a margarina, a farinha de trigo e o amido de milho Maizena.
Misture.Acrescente a gema, o açúcar e a essência de baunilha.
Misture e amasse delicadamente com a ponta dos dedos até obter uma massa homogênea.
Molde no formato de uma bola, embrulhe em filme plástico e reserve na geladeira por 15 minutos.
Aqueça o forno em temperatura média (180º C).Em uma superfície seca e enfarinhada, abra a massa na espessura de 0,5 cm.
Forre o fundo e a lateral de uma fôrma desmontável (24cm de diâmetro).
Leve ao forno médio por 20 minutos ou até dourar.
Retire do forno e reserve até esfriar.
Em uma panela média, dissolva o amido de milho Maizena no leite, junte o açúcar e cozinhe em fogo médio, mexendo sempre, até ferver e engrossar.
Acrescente o chocolate e misture até obter uma consistência homogênea.
Reserve até amornar. Coloque o recheio reservado sobre a massa, distribua as fatias de morango uma ao lado da outra e finalize polvilhando o chocolate ralado.
Leve à geladeira por 1 hora e sirva gelada.
</ul>
</p>

</div>


        </>
    )
}

export default ModeloReceita5