import './Title.css';

function Title() {
    return(
        <div class="title">
            <h1><span className="blue">Hi!</span> I am<br/> Evgeny Berezhnov <br/><span className="blue">Frontend developer</span></h1>
            <div className='tilte-buttons'>
                <a href="#" className='cv-btn'>resume</a>
                <a href="#" className='contact-btn'>contact</a>
            </div>
        </div>
    );
}

export default Title;