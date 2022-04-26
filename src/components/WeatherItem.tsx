import React from 'react';
import { Text, StyleSheet, View, PixelRatio } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        width:150,
        marginTop:5

    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        height: 35,
        width: 35,
        borderRadius: 35 / PixelRatio.get(),
    },
    box: {
        marginLeft: 5
    },
    title: {
        color: 'gray',
        fontSize: 12
    },
    value: {
        fontSize: 14,
        fontWeight: 'bold'
    },
});

const WeatherItem = ({ icon, title, value }) => {
    return (
        <View style={styles.content}>
            <View style={styles.circle}>
                <MaterialCommunityIcons name={icon} size={24} color="gray" />
            </View>

            <View style={styles.box}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    );
}

export default WeatherItem;