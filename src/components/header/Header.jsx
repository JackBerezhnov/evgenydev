import './Header.css';
import Navbar from '../navbar/Navbar';

function Header(props) {
    return (
        <div class="header container-fluid">
            <Navbar firstNav="Home" secondNav="About" thirdNav="Projects"/>
            <div class="title">
                <h1>Hi! I am Evgeny Berezhnov Frontend developer</h1>
            </div>

        </div>
    );
}

export default Header;