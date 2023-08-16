import { useState } from "react"

import Perfil from "./components/Perfil"
// import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
      <div className="container">
      <div className="githubIconWrapper">
        <FontAwesomeIcon icon={faGithub} size="6x" />
      </div>
        <div className="inputContainer">
          <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
          <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">
            Buscar
          </button>
        </div>
        {nomeUsuario.length > 2 && (
          <>
            <Perfil nomeUsuario={nomeUsuario} />
            <ReposList nomeUsuario={nomeUsuario} />
          </>
        )}
      </div>
    </>
  )
}

export default App
