import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "20%",

        padding: 40,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,

        backgroundColor: "#820AD1",
        justifyContent: "space-around",
        

    },

    upperView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    optionsIcon:{
        
        marginTop: 15,
        flexDirection: "row",
    },

    userIcon:{
        
        marginTop: 15,
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 99,
        backgroundColor: "#A75DD9", 
    },

    name:{
        marginTop: 15,
        color:"#fff",
        fontSize: 20,
        fontWeight:"bold",

    },

    totalSaldo:{
        padding: 35,
        paddingLeft: 5,
        
    },
    verSaldo:{
        flexDirection: "row",
        justifyContent: "space-between",


    },
    subTitle:{
        
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
        marginLeft: 16,

    },

    saldo:{
        marginLeft: 16,
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 8,
    },

    balaceTotalNotVisible:{
        marginLeft: 16,
        marginTop: 8,
        height: 30,
        width: "70%",
        backgroundColor: "#c1bec2",
        borderRadius: 2,
    },

    optionView:{
        
        alignItems: "center",
        marginRight: 0,
        marginLeft: 16,
    },
    optionIcon:{
        
        height: 90,
        width: 90,
        backgroundColor: "#e6e6e6",
        borderRadius: 99,
        alignItems: "center",
        justifyContent:"center",
        
    },
    optionText:{
        
        fontWeight: "700",
        fontSize: 16,

    },

})

