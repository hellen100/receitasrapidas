import image from 'next/image'
import Link  from 'next/link'
import styles from '../styles/Menu.module.css'

function Menu(){
    return (
        <>
           <div className={styles.container}>
           <h1><Link href="/home"><a>Receitas rápidas</a></Link></h1>
    
           
            <input 
            type="text"
            id="pesquisa" 
            name="pesquisa" 
            value="Pesquisar receita" />
           
          
            </div>   
        
            <div >
          
            <ul className={styles.container2}>
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
            
            </div>

        </>
    )
}

export default Menu
