import { useState } from 'react';
import './App.css'
import languages from './Data/languages.js'

function App() {

  const [activeLanguage, setActiveLanguage] = useState(0)

  return (
    <>
      <div className="main-container">
        <div className="element-container">
          <h1>Learn Web development</h1>

          <div className="buttons-container">
            {languages.map((language) => (
              <button
                key={language.id}
                className={`tech-button ${activeLanguage === language.id ? 'active' : null}`}
                onClick={() => setActiveLanguage(language.id)}
              >
                {language.title}
              </button>
            ))}
          </div>

          <div className="content-container">
            {languages.map((language) => (
              <div
                key={language.id}
                className={`tech-content ${activeLanguage === language.id ? 'active' : null}`}>
                <h2>{language.title}</h2>
                <p>{language.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div >
    </>
  )
}
export default App
