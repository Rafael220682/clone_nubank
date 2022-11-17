import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    
    cards:{
        padding: 8,
        marginTop: 24,
        
    },

    cardBlog:{
        marginLeft: 16,
        flexDirection: "row",
        marginTop: 16,
        marginRight: -24,
        padding: 10,
    },

    textBlank:{
        fontSize: 12,
        color: "#000",
    },

    textPurple:{
        color: "#820AD1",
    },

    cardBlogItem:{
      
        flexDirection: "row",
        marginRight: 10,
    },

    cardFunction:{
        borderTopWidth: 1,
        borderColor: "#e6e6e6",
        marginTop: 24,
        marginLeft: 20,
        padding: 24,
    },

    cardFunctionRow:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: -20,
        marginTop: 8,
        
    },

    titleCard:{
        fontSize: 16,
        fontWeight: "bold",
    },

    subTitle:{
        color: "#c2bebe",
        fontWeight: "bold",
        marginTop: 8,
        marginLeft: -20,
    },

    subTitle2:{
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8,
        marginLeft: -20,
    },

    touchable:{
        marginTop: 16,
        marginLeft: -20,
        padding:8,

        backgroundColor:"#e6e6e6",
        borderRadius: 16,
        width: 150,
        

    }
})