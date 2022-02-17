import './Header.css';

function Header(props) {
    return (
        <div class="header container-fluid">
            <div class="title">
                <h1>{props.title}</h1>
            </div>
        </div>
    );
}

export default Header;