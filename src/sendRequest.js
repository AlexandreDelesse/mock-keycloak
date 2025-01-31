import axios from 'axios'
import { getToken } from './keycloak'

// Créer une instance Axios
const apiClient = axios.create({
  baseURL: 'https://<YOUR_API_URL>',
})

// Ajouter un intercepteur pour les requêtes
apiClient.interceptors.request.use(
  async (config) => {
    const token = await getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default apiClient
