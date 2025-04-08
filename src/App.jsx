import { useState } from 'react';
import './App.css'
import languages from './Data/languages.js'
import Buttons from './components /Buttons/Buttons.jsx';

function App() {

  const [activeLanguage, setActiveLanguage] = useState(0)

  return (
    <>
      <div className="main-container">
        <div className="element-container">
          <h1>Learn Web development</h1>

          <Buttons languages={languages} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />

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
