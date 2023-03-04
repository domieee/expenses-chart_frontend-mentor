import Logo from '../../img/logo.svg'
import './Header.scss'

const Header = () => {
    return (
        <header className='balance'>
            <div>
                <p className='subheader'>My Balance</p>
                <p className='balance-nr'>$921.48</p> 
            </div>
            <img src={Logo} alt="" />
        </header>
    );
}

export default Header;