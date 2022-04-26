import React, { } from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import LottieCustom from "../../components/LottieCustom";
import { capitalizeFirstLetter } from "../../utils/formats";
import { styles } from "./styles";

const Body = (props: { data: IResponseApi }) => {
    const setNameIcon = () => {
        const name = props.data?.weather[0].main ?? 'Clear';
        const icons = {
            "Clouds": 'weather-cloudy',
            "Rain": 'weather-rainy',
            "Snow": 'weather-snowy',
            "Clear": 'weather-sunny',
        }
        return icons[name];
    }
    
    return (
        <>
            <View style={styles.content}>
                <View style={styles.info}>
                    <MaterialCommunityIcons name={setNameIcon()} size={30} color="white" />
                    <View style={styles.textWeather}>
                        <Text style={styles.title}>{props.data?.weather[0].main}</Text>
                        <Text style={styles.subtitle}>{capitalizeFirstLetter(props.data?.weather[0].description)}</Text>
                    </View>
                </View>
                <Text style={styles.textTemperature}>{props.data?.main.temp.toFixed(0)}°</Text>
            </View>
            <LottieCustom name={props.data?.weather[0].main} />
        </>
    )
}

export default Body;