import "./InfoCard.css";
import { Icon } from '@iconify/react';

function InfoCard({imagePath}) {
    return(
        <div className="info-card">
            <img className="avatar" src={imagePath} alt="avatar"/>
            <div className="info-description">
                <ul>
                    <li>Name: Evgeny Berezhnov</li>
                    <li>Phone: +1(858)225-9980</li>
                    <li>Email: jackberezhnov@gmail.com</li>
                    <li>
                        <Icon icon="ant-design:github-filled" />
                        <Icon icon="akar-icons:linkedin-fill" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default InfoCard;