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

export const getTrackPreview = async (spotifyId: string) => {
    // const header = {"Authorization": "Bearer BQDLwR-uoAymRCoIZGZGSsAQSxVTATyBeYupCBMH9EPuO-LYo1MH_WAUnArJfqlpyLtSOl3fA44FpjzwtkwOlqts5GJBputY4A-tpaepuKOENCTbqpman2Tnj8iWPDnail-naLuLtfm-QElC0Bq9QefP1o-sZgrPtbUczPLRktC97lvXbB9T9ySZPRJRknhzCdo"};
    const res = await fetch(`https://api.spotify.com/v1/tracks/${spotifyId}`, 
    {headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer BQDLwR-uoAymRCoIZGZGSsAQSxVTATyBeYupCBMH9EPuO-LYo1MH_WAUnArJfqlpyLtSOl3fA44FpjzwtkwOlqts5GJBputY4A-tpaepuKOENCTbqpman2Tnj8iWPDnail-naLuLtfm-QElC0Bq9QefP1o-sZgrPtbUczPLRktC97lvXbB9T9ySZPRJRknhzCdo"}})
    return res.json();
}
export default apiClient;