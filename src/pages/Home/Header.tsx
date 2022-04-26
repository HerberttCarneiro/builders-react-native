import React from "react";
import { View, Text } from "react-native";

import { getInfoDate } from "../../utils/formats";
import { styles } from "./styles";

const Header = (props: { city: string }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.city}</Text>
            <Text style={styles.headerSubtitle}>{getInfoDate()}</Text>
        </View>
    )
}

export default Header;