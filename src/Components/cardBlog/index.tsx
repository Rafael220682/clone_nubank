import React, { ReactNode } from "react";
import { Linking, TouchableOpacity, View } from "react-native";
import { styles } from "./styes";

type Props = {
    text: ReactNode
    link: string
}

export function CardBlog({link, text}: Props){
    return(
        <TouchableOpacity onPress= {()=> Linking.openURL(link)} style={styles.container}>
            {text}
        </TouchableOpacity>
    )
}