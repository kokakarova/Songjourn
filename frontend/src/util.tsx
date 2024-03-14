import axios from "axios";

// fetching from backend
export const getQuestions = async () => {
    const res = await fetch("http://localhost:8011/api")
    if (res.status === 404) {
        throw new Response("Not Found", { status: 404 });
      }
      return res.json();
};

// fetching from spotify

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "c1b3029721c1461b95e1bf4dc779efbf";
const redirectUri = "http://localhost:5173";
const scopes = ["playlist-modify-private", "playlist-modify-public"];
let localToken: string | null;

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token: string | null) => {
    localToken = token;
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer" + token;
        return config;
    })
}

export const getTrackPreview = async (spotifyId: string) => {
    const res = await fetch(`https://api.spotify.com/v1/tracks/${spotifyId}`, 
    {headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`}})
    return res.json();
}

let result = 0;

export const incrementResult = (n: number) => {
    result += n;
}

export const getResult = () => {
    return result;
}

export const resetResult = () => {
    result = 0;
}

export default apiClient;