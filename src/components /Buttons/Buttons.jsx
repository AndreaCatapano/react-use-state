import './Buttons.css'

function Buttons({ languages, activeLanguage, setActiveLanguage }) {
    return (
        <div className="buttons-container">
            {languages.map((language) => (
                <button
                    key={language.id}
                    className={`tech-button ${activeLanguage === language.id ? 'active' : null}`}
                    onClick={() => setActiveLanguage(language.id)} >
                    {language.title}
                </button>
            ))}
        </div>
    )
}


export default Buttons;