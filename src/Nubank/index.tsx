import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { CardBlog } from "../Components/cardBlog";
import { Cards } from "../Components/cards";
import { Topo } from "../Components/header/header";
import { styles } from "./styles";



export function Nubank(){
    return(
        <View style={styles.container}>
            <Topo/>
            <View style={styles.cards}>
                 <Cards/>
            </View>
            <View style={styles.cardBlogItem}>
                    <View style={styles.cardBlog}>
                        <CardBlog link="https://www.google.com" text={
                        <Text style={styles.textBlank}>Conheça NuBank vida:
                        Seguro e simples<Text style={styles.textPurple}> e cabe no seu bolso</Text></Text>}/>
                    </View>
            
                    <View style={styles.cardBlog}>
                        <CardBlog link="https://www.google.com" text={
                        <Text style={styles.textBlank}>Conheça NuBank vida:
                        Seguro e simples<Text style={styles.textPurple}> e cabe no seu bolso</Text></Text>}/>
                    </View>
            
                    <View style={styles.cardBlog}>
                        <CardBlog link="https://www.google.com" text={
                        <Text style={styles.textBlank}>Conheça NuBank vida:
                        Seguro e simples<Text style={styles.textPurple}> e cabe no seu bolso</Text></Text>}/>
                    </View>
            </View>
           
         </View>  
        
    )
}

