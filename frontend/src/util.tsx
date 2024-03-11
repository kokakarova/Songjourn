import axios from "axios";

// fetching from backend
export const getQuestion = () => fetch("http://localhost:8011/api");

// fetching from spotify

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "c1b3029721c1461b95e1bf4dc779efbf";
const redirectUri = "http://localhost:5173";
const scopes = ["playlist-modify-private", "playlist-modify-public"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token: string | null) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer" + token;
        return config;
    })
}

export default apiClient;