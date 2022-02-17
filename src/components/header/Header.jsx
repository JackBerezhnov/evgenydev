import './Header.css';
import Navbar from '../navbar/Navbar';
import Title from '../title/Title';

function Header() {
    return (
        <div className="header container-fluid">
            <Navbar firstNav="Home" secondNav="About" thirdNav="Projects"/>
            <Title/>
        </div>
    );
}

export default Header;