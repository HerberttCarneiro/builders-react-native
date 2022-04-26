import axios, { AxiosError } from 'axios';
import * as Location from 'expo-location';

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const getCurrentWeather = async (location: Location.LocationObject) => {
    const { latitude, longitude } = location.coords
    
    return await api
        .get("/weather", {
            params: {
                lat: latitude,
                lon: longitude,
                appid: 'c10af0334b64cb4676717e013a7a4127',
                units: 'metric',
            }
        })
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("An error has occurred");
            }
        })
        .catch((error: AxiosError) => {
            throw error.message;
        });
}

export default api;