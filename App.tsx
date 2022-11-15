import React from 'react';
import { Text, View } from "react-native";
import { Nubank } from './src/Nubank';
import { StyleSheet } from 'react-native';
import { styles } from './src/Components/header/styles';

export default function App (){

  return(
      <View style={styles.container}>
          <Nubank/>
      </View>

  )
}

