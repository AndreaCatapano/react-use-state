import './Content.css'

function Content({ currentLanguage }) {
    return (
        <div className="content-container">
            <div className="tech-content active">
                <h2>{currentLanguage && currentLanguage.title}</h2>
                <p>{currentLanguage ? currentLanguage.description : "Nessun linguaggio selezionato"}</p>
            </div>
        </div>
    )
}

export default Content;