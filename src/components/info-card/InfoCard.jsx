import "./InfoCard.css";
import { Icon } from '@iconify/react';

function InfoCard({imagePath}) {
    return(
        <div className="info-card">
            <img className="avatar" src={imagePath} alt="avatar"/>
            <div className="info-description-container">
                <ul className="info-description">
                    <li>Name: Evgeny Berezhnov</li>
                    <li>Phone: +1(858)225-9980</li>
                    <li>Email: jackberezhnov@gmail.com</li>
                    <li>
                        <a href="https://github.com/JackBerezhnov" target="_blank" rel="noreferrer"><Icon icon="ant-design:github-filled" /></a>
                        <a href="https://www.linkedin.com/in/evgeny-berezhnov-6b6178174/" target="_blank" rel="noreferrer"><Icon icon="akar-icons:linkedin-fill" /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default InfoCard;