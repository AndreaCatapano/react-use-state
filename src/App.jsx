import { useState } from 'react';
import './App.css'
import languages from './Data/languages.js'
import Buttons from './components /Buttons/Buttons.jsx';
import Content from './components /Content/Content.jsx';

function App() {

  const [activeLanguage, setActiveLanguage] = useState(0)
  const currentLanguage = languages.find(language => language.id === activeLanguage);


  return (
    <>
      <div className="main-container">
        <div className="element-container">
          <h1>Learn Web development</h1>

          <Buttons languages={languages} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />
          <Content currentLanguage={currentLanguage} />

        </div>
      </div >
    </>
  )
}
export default App
