import image from 'next/image'
import styles from '../styles/Home.module.css'

function Menu(){
    return (
        <>
           <div>
        <navbar>
            <a href="/home">Receitas rápidas</a>
            <input 
            type="text"
            id="pesquisa" 
            name="pesquisa" 
            value="Pesquisar receita" />
           
            </navbar>
        </div>   
        <p>
            <ul>
               <li>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</li>
            </ul>
            <hr></hr>
        </p>

        </>
    )
}

export default Menu
