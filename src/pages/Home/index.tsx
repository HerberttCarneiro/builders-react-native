import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import * as Location from 'expo-location';

import { getCurrentWeather } from "../../services/api";
import Footer from "./Footer";
import LottieCustom from "../../components/LottieCustom";
import Header from "./Header";
import Body from "./Body";
import { styles } from "./styles";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [errorMsg, setError] = useState(false);
    const [weatherData, setWeatherData] = useState<IResponseApi>();

    const initialize = async () => {
        const isAllow = await checkPermission();

        if (isAllow) {
            getInfo();
        }
    }

    const getInfo = async () => {
        setLoading(true);
        
        try {
            let location = await Location.getCurrentPositionAsync();
            const weather: IResponseApi = await getCurrentWeather(location);
            setWeatherData(weather);
            setError(false);
        } catch (error) {
            setError(true);
            Toast.show({
                type: 'error',
                text1: 'An error has occurred, please try again',
                position: 'top'
            });
        } finally {
            setLoading(false);
        }
    }

    const checkPermission = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Toast.show({
                    type: 'error',
                    text1: 'Permission to access location was denied',
                    position: 'top'
                });
                return;
            }
            return true;
        } catch (error) {
            setError(true);
            throw new Error("Not authorized to use location services");
        }
    }

    useEffect(() => {
        initialize();
    }, []);

    return (
        <>
            {!loading && weatherData ?
                <View style={styles.container}>
                    <Header city={weatherData?.name} />
                    <Body data={weatherData} />
                    <Footer data={weatherData} refresh={getInfo} />
                </View> :
                <View style={styles.loading}>
                    <LottieCustom name={errorMsg ? 'maintenance' : 'loading'} />
                </View>}
            <Toast />
        </>
    )
}

export default Home;