import './App.css'
import useKeycloak from './useKeycloak'
import keycloak from './keycloak'
import apiClient from './sendRequest'

function App() {
  const [auth, token] = useKeycloak()

  if (!auth) return <div>Chargement...</div>

  const send = async () => {
    try {
      apiClient.get('https://intranet.urgencesante.fr:8090/weatherforecast')
    } catch (error) {}
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Authentification avec Keycloak</h1>
      <p>Bienvenue, vous êtes connecté !</p>
      <h3>Votre Token :</h3>
      <textarea
        readOnly
        value={token}
        style={{ width: '90%', height: '200px' }}
      ></textarea>
      <button onClick={() => keycloak.logout()}>Se déconnecter</button>
      <button onClick={send}>Envoyer une requete</button>
    </div>
  )
}

export default App
