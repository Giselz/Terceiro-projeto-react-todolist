import { Link } from 'react-router-dom'
import './menu.style.css'

const Menu = () => {
    return(
        <ul className="navbar">
            <li>
                <Link className="link" to="/">Lista de Tarefas</Link>
            </li>
            <li>
                <Link className="link" to="/dicas">Dicas</Link>
            </li>
        </ul>
    )
}

export default Menu