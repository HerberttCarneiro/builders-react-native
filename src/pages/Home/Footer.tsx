import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WeatherItem from "../../components/WeatherItem";
import { styles } from "./styles";

const Footer = (props: { data: IResponseApi, refresh: Function }) => {
    const { wind, main } = props.data;

    return (
        <View style={styles.containerFooter}>
            <View style={styles.headerFooter}>
                <Text style={styles.titleFooter}>Weather now</Text>
                <TouchableOpacity onPress={props.refresh}>
                    <MaterialCommunityIcons name="refresh" size={24} color="gray" />
                </TouchableOpacity>
            </View>
            <View style={styles.contentFooter}>
                <WeatherItem icon="temperature-celsius" title="Fell like" value={main?.feels_like.toFixed(0)} />
                <WeatherItem icon="weather-windy" title="Wind" value={`${wind?.speed} km/h`} />
                <WeatherItem icon="speedometer" title="Pressure" value={main.pressure} />
                <WeatherItem icon="water-outline" title="Humidity" value={`${main?.humidity}%`} />
            </View>
        </View>
    )
}

export default Footer;