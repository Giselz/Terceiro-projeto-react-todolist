import LogoImage from '../../assets/logo.svg'
import './header.style.css'

const Header = () => {
    return(
        <header className="header">
            <div>
                <img src={LogoImage} alt="Logotipo com ilustração de avião de papel"/>
            </div>
        </header>
    )
}
export default Header
