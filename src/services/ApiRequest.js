import axios from "axios"
const base_url = import.meta.env.VITE_API_BASE_URL

export const apiClient = axios.create({
  baseURL: base_url,
  withCredentials: false,
  headers: {
    Authorization: "Bearer " + window.localStorage.getItem("api_token")
  }
})

apiClient.interceptors.request.use(
    async (config) => {
      config.headers.Authorization = "Bearer " + window.localStorage.getItem("api_token")
      return config
    },
    (error) => Promise.reject(error)
)
