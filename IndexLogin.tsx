import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import LogoNU from "./logo.png"

export function Login(){
    return(
          <View style={styles.container}>
          <Image style={styles.title} source={LogoNU}/>
          <TextInput style={styles.input} 
                      keyboardType={'email-address'}
                      placeholder={"Digite seu email"}/>                   
             <TextInput style={styles.input} 
                        keyboardType={'numeric'}
                        placeholder={"Digite sua senha"}
                        secureTextEntry={true}/>
            <TouchableOpacity style={styles.button}>
                 <Text style={styles.enter}>Entrar</Text>
            </TouchableOpacity>
      </View>
    )
}

export const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor:"#820AD1",
      paddingTop: 60,
      paddingHorizontal: 30,
      alignItems: 'center',

  },
  
  title:{
    backgroundColor: "#fff",
    marginLeft: 0,
    marginTop: 150,
    marginBottom: 75,
    color:"#ccc",
    width: 330,
    height: 200,
    fontSize: 24,
    fontWeight: 'bold',

  },

  input:{
    marginTop: 20,
    backgroundColor:"#ccc",
    color:"#000",
    width: "100%",
    padding: 10,
    borderRadius: 10,
  }, 

  button: {
    marginTop: 60,
    backgroundColor: "#3a044b",
    width: "50%",
    padding: 10,
    borderRadius: 10,

  },

  enter:{
    color: "#fff",
    fontSize:16,
    fontWeight: 'bold',
    textAlign: 'center'
  
  }

 
})
