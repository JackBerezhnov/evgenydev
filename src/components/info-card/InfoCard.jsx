import "./InfoCard.css";

function InfoCard({imagePath}) {
    return(
        <div className="info-card">
            <img className="avatar" src={imagePath} alt="avatar"/>
        </div>
    );
}

export default InfoCard;