import axios from "axios";

export const getAccessToken = async () => {
  return axios.post(
    "https://accounts.spotify.com/api/token",
    { grant_type: "client_credentials" },
    {
      headers: {
        Authorization: `Basic ${import.meta.env.VITE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};

export const getNewRelease = async (token) => {
  return axios.get("https://api.spotify.com/v1/browse/new-releases?limit=50", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getCategories = async (token) => {
  return axios.get("https://api.spotify.com/v1/browse/categories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
