import './Navbar.css';

function Navbar({ firstNav, secondNav, thirdNav }) {
    return(
        <navbar>
            <ul className='navbar-list'>
                <li><a href="#home">{firstNav}</a></li>
                <li><a href="#about">{secondNav}</a></li>
                <li><a href="#projects">{thirdNav}</a></li>
            </ul>
        </navbar>
    );
}

export default Navbar;