import Keycloak from 'keycloak-js'

// Configuration globale de Keycloak
const keycloak = new Keycloak({
  url: 'https://auth.ade-dev.fr/', // URL du serveur Keycloak
  realm: 'ustest', // Nom de votre realm Keycloak
  clientId: 'usclienttest', // Nom du client Keycloak
})

export const getToken = async () => {
  if (keycloak.token) {
    try {
      await keycloak.updateToken(30) // Rafraîchir le token s'il reste moins de 30 secondes
      return keycloak.token
    } catch (error) {
      console.error('Failed to refresh token', error)
      keycloak.logout() // Déconnectez si le rafraîchissement échoue
    }
  }
  return null
}

export default keycloak
