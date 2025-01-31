import { useEffect, useState } from 'react'
import keycloak from './keycloak' // Import de l'instance globale

function useKeycloak() {
  const [authenticated, setAuthenticated] = useState(false)
  const [token, setToken] = useState(null)

  useEffect(() => {
    // Initialisation de Keycloak une seule fois
    keycloak
      .init({ onLoad: 'login-required' }) // Redirige automatiquement vers la page de login
      .then((auth) => {
        if (auth) {
          setAuthenticated(true)
          setToken(keycloak.token)
        } else {
        }
      })
      .catch((error) => {
        console.error("Erreur lors de l'initialisation Keycloak :", error)
      })
  }, [])

  return [authenticated, token]
}

export default useKeycloak
