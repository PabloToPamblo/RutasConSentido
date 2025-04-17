import api from "./api";

declare global {
    interface Window {
      google: any;
    }
  }
  
  export const requestYouTubeAccessToken = (callback: (accessToken: string) => void) => {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: '738178788998-inb3m5k3thlmv0e0nj60phvdghuo7bbm.apps.googleusercontent.com', //ID Client
      scope: 'https://www.googleapis.com/auth/youtube.readonly',
      prompt: 'consent',
      callback: (response: any) => {
        if (response.access_token) {
          callback(response.access_token);
        } else {
          console.error("No se pudo obtener el access token");
        }
      },
    });
  
    client.requestAccessToken();
  };

export const enviarAccessToken = async (accessToken: string) => {
  try {
    const res = await api.post("auth/youtube/check-subscription/", {
      access_token: accessToken,
    });

    console.log("✅ Resultado backend:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error al consultar suscripción en backend:", err);
    return null
  }
};