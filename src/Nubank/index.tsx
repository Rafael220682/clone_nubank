import React from "react";
import { FlatList, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { CardBlog } from "../Components/cardBlog";
import { Cards } from "../Components/cards";
import { Topo } from "../Components/header";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";



export function Nubank(){
    return(
        <View>
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

            <View style={styles.cardFunction}>
                <Ionicons name="card" size={25} style={{marginLeft: -20}}/>

                <View style={styles.cardFunctionRow}>
                    <Text style={styles.titleCard}>Cartão de Crédito</Text>
                    <Ionicons name="chevron-forward" size={20} style={{marginRight: -20}} />
                </View>
                <Text style={styles.subTitle}>Fatura Atual</Text>
                <Text style={styles.subTitle2}>R$ 754,96</Text>
                <Text style={styles.subTitle}>Limite Disponível de R$ 2.000,00</Text>

                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.titleCard}>Parcelar compras</Text>
                </TouchableOpacity>
            </View >
           
         </View>  
        
    )
}

