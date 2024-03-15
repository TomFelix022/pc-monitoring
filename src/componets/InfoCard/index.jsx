import './styles.css'

export const InforCard = ({ title, value }) => {
    return (
        <div className="info-card-container">
            <h2 className="info-card-title">{title} </h2>
            <p className="info-card-value">
                {value}
                <samp>°</samp>
            </p>
        </div>
    )
}
