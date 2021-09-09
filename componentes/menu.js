import styles from '../styles/Home.module.css'

function Menu(){
    return (
        <>
           <div>
        <navbar>
            <a href='/home'>Receitas rápidas</a>
            <input 
            type="text"
            id="pesquisa" 
            name="pesquisa" 
            value="Pesquisar receita" />
           
            </navbar>
        </div>   
        <p>
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
                <li>I</li>
                <li>J</li>
                <li>K</li>
                <li>L</li>
                <li>M</li>
                <li>N</li>
                <li>O</li>
                <li>P</li>
                <li>Q</li>
                <li>R</li>
                <li>S</li>
                <li>T</li>
                <li>U</li>
                <li>V</li>
                <li>W</li>
                <li>X</li>
                <li>Y</li>
                <li>Z</li>
            </ul>
            <hr></hr>
        </p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Receita de Abobrinha &rarr;</h2>
            <p>Bolinho de Abobrinha Pratico e Rápido de se Fazer.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Receita de Frango &rarr;</h2>
            <p>Filé de Frango na Panela de Pressão!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Receita de Abacaxi &rarr;</h2>
            <p>Brigadeiro de Abacaxi Pratico de se Fazer.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Receita de Pimentão &rarr;</h2>
            <p>
              Pimentão Recheado com Queijo Cottage.
            </p>
          </a>
        </div>        
        </>
    )
}

export default Menu
