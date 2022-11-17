import React, { useState } from "react";
import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View, ViewComponent } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export function Topo() {
  const [showSaldo, setShowSaldo] = useState(false);

  return(
  <>
    <View style={styles.container}>
        <View style={styles.upperView}>
          <View style={styles.userIcon}>
            <Ionicons name= "person-outline" size={30} color="#fff"  />
          </View>
          <View style={styles.optionsIcon}>
            <TouchableOpacity onPress={()=> setShowSaldo(!showSaldo)}>
              { showSaldo ? (
                <Ionicons name= "eye-outline" size={30} color="#fff" style={{marginRight: 16}}/>
              ) : (
                <Ionicons name= "eye-off-outline" size={30} color="#fff" style={{marginRight: 16}}/>
              )
              }
            </TouchableOpacity>
              <Ionicons name= "help-circle-outline" size={30} color="#fff" style={{marginRight: 16}}/>
              <Ionicons name= "mail-outline" size={30} color="#fff" />
          </View>
        </View>
        <Text style={styles.name}>Olá, Rafael</Text>
    </View>
      <View style={styles.totalSaldo}>
          <View style={styles.verSaldo}>
            <Text style={styles.subTitle}>Conta</Text>

            <Ionicons name= "chevron-forward-outline" size={20} color="#908D91 " style={{marginRight: -40}}/>
          </View>
            {showSaldo ? (
              <Text style={styles.saldo}>R$ 4.897,25</Text>
            ) : (
              <View style={styles.balaceTotalNotVisible}/>
            )}       
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <View style={styles.optionView}>
                <TouchableOpacity style={styles.optionIcon}>
                    <Ionicons name= "cash-outline" size={30} color="#908D91 " />
                </TouchableOpacity>
                <Text style={styles.optionText}>Area Pix</Text>
              </View>

              <View style={styles.optionView}>
                <TouchableOpacity style={styles.optionIcon}>
                    <Ionicons name= "barcode-outline" size={30} color="#908D91 " />
                </TouchableOpacity>
                <Text style={styles.optionText}>Pagar</Text>
              </View>

              <View style={styles.optionView}>
                <TouchableOpacity style={styles.optionIcon}>
                    <Ionicons name= "cash-outline" size={30} color="#908D91 " />
                </TouchableOpacity>
                <Text style={styles.optionText}>Transferir</Text>
              </View>

              <View style={styles.optionView}>
                <TouchableOpacity style={styles.optionIcon}>
                    <Ionicons name= "cash-outline" size={30} color="#908D91 " />
                </TouchableOpacity>
                <Text style={styles.optionText}>Depositar</Text>
              </View>

              <View style={styles.optionView}>
                <TouchableOpacity style={styles.optionIcon}>
                    <Ionicons name= "clipboard-outline" size={30} color="#908D91 " />
                </TouchableOpacity>
                <Text style={styles.optionText}>Recarga</Text>
              </View>
        </ScrollView>
      </View>
  </>

      
  )
}