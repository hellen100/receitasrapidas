import Menu from '../componentes/menu'
import Footer from '../componentes/footer'
import Receitas from '../componentes/receitas'
import Image from 'next/image'

import styles from '../styles/Home.module.css'


function Home(){
    return (
        <>
        <Menu />
        <Receitas />
        <Footer />
        </>
    )
}

export default Home