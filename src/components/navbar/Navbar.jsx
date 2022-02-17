import './Navbar.css';

function Navbar({ firstNav, secondNav, thirdNav }) {
    return(
        <navbar>
            <ul className='navbar-list'>
                <li>{firstNav}</li>
                <li>{secondNav}</li>
                <li>{thirdNav}</li>
            </ul>
        </navbar>
    );
}

export default Navbar;