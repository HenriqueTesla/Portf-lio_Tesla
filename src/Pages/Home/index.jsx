import Container from '../../Components/Container'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
       <>
        <Container>
        <div className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá, sou <br />
                    <span className={styles.nome}>Henrique Tesla</span> <br />
                    Desenvolvedor Back-End
                </p>
                <Link to="/Sobre" className={styles.btn}>
                    Saiba mais sobre mim
                </Link>
            </div>
            <div className={styles.figureContainer}>
                <img className={styles.img_home} src="https://i.pinimg.com/originals/7a/70/fb/7a70fb2629ec43a31a4f25db3736a489.png" alt="Imagem de Home" />
            </div>
        </div>
        </Container>
        </> 
    )
}

export default Home