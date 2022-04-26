import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import cloudy from '../../assets/lotties/cloudy.json';
import rainy from '../../assets/lotties/rainy.json';
import snowy from '../../assets/lotties/snowy.json';
import sunny from '../../assets/lotties/sunny.json';
import loading from '../../assets/lotties/loading.json';
import maintenance from '../../assets/lotties/maintenance.json';

const lotties = {
    "Clouds": cloudy,
    "Rain": rainy,
    "Snow": snowy,
    "Clear": sunny,
    loading: loading,
    maintenance: maintenance
}
const styles = StyleSheet.create({
    lottie: {
        width: '100%',
        position: 'absolute',
        zIndex: -1,
    }
});

const LottieCustom = (props: { name: string }) => {
    const { name } = props;

    return (
        <LottieView
            style={styles.lottie}
            autoPlay
            loop
            source={lotties[name]}
        />
    );
}


export default LottieCustom;