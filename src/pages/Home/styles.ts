import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    //index
    container: {
        flex: 1,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    //header
    header: {
        padding: 10
    },
    headerTitle: {
        fontWeight: 'bold',
        color: 'white'
    },
    headerSubtitle: {
        color: 'white'
    },
    //body
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 15,
        alignSelf: 'stretch',
        margin: 5,
        padding: 5,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWeather: {
        margin: 5
    },
    textTemperature: {
        fontSize: 90,
        fontWeight: 'bold',
        color: 'white'
    },
    title: {
        fontWeight: 'bold',
        color: 'white'
    },
    subtitle: {
        color: 'white'
    },
    //footer
     containerFooter: {
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        height: 150,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    headerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleFooter: {
        fontSize: 16,
        margin: 5
    },
    contentFooter: {
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});