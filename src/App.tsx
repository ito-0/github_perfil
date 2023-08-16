import { useState } from "react"

import Perfil from "./components/Perfil"
// import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
      <div className="container">
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
