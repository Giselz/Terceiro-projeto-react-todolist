import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImageHome from '../../assets/aa.svg'
import './dicas.css'

const Dicas = () => {
    return(
        <div className="div-container">
            <Menu />
            <Header/>
            <div className="div-principal">
                <h1>Dicas</h1>
            </div>
            <section>
                <img className="imagem" src={ImageHome} alt="Logotipo com ilustração de avião de papel"/>
                <p>♥ Deixe reservado na sua agenda tempo para realizar as suas tarefas;</p>
                <p>♥ Utilize a técnica de <a className="pomodoro" href="https://pomofocus.io/" rel="noreferrer" target="_blank">Pomodoro</a> para ajudar no foco nas tarefas;</p>
                <p>♥ Evite distrações! Guarde o celular e não fique online nas redes sociais que te distraem;</p>
                <p>♥ Não deixe de dar check nas tarefas que estão na lista 😄</p>
            </section>
            <Footer/>
        </div>
    )
}

export default Dicas