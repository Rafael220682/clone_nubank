import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { styles } from "./styles";

export function Cards() {
    return(
        <View style={styles.container}>
            <Ionicons name="card-outline" size={25} color="#000" /> 
            <Text style={styles.textCard}>Meus Cartões</Text>
        </View>
    )
}