import Menu from './menu'
import Footer from './footer'
import Image from 'next/image'


function ModeloReceita7(){
    return (
        
        <>
         <Image src="/lasanha.png" width={400} height={280} />
        
        <h1>Lasanha</h1>

       <h2>INGREDIENTES</h2>



<p>
<ul>
    <li>500 g de patinho moído</li>
    <li>½ xícara (chá) de cebola picada</li>
    <li>⅔ de xícara (chá) de cenoura picada</li>
    <li>⅔ de xícara (chá) de salsão picado</li>
    <li>1 xícara (chá) de leite</li >
    <li>1 xícara (chá) de vinho branco seco</li>
    <li>1 lata de tomate pelado (com o líquido)</li >
    <li>1 colher (sopa) de óleo</li >
    <li>3 colheres (sopa) de manteiga</li >
    <li>noz-moscada ralada na hora a gosto</li>
    <li>sal e pimenta-do-reino moída na hora a gosto</li>
</ul>
<h2>MODO  DE  PREPARO</h2>

<ul>
    <li>Numa panela média, coloque o óleo, a manteiga e leve ao fogo médio.</li>
    <li> Quando a manteiga derreter, adicione a cebola e refogue, mexendo sempre, até ficar transparente</li>
    <li> Junte a cenoura e o salsão picados, e refogue por 2 minutos, mexendo sem parar.</li>
    <li>Acrescente a carne moída e misture com um garfo. Tempere com sal e pimenta-do-reino e refogue até que a carne perca a cor rosada.</li>
    <li>Junte o leite, tempere com noz-moscada ralada na hora a gosto, e mexa até que evapore completamente</li>
    <li>Adicione o vinho e deixe cozinhar até secar.</li>
    <li>Baixe o fogo, junte os tomates pelados (com o líquido da lata) e deixe cozinhar por 3 horas, com a panela tampada, mexendo de vez em quando.</li>
    <li>O fogo deve estar baixíssimo, caso contrário, o molho irá grudar no fundo da panela.</li>
    <li>A medida que for secando, adicione um pouquinho de água fervente.</li>

</ul>
</p>



        </>
    )
}

export default ModeloReceita7