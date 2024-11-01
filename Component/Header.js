import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const Header=()=>{
    return(
        <View style={styles.Container}>
           <View style={styles.appContainer}>
            
            <Image source={require("../Assets/apps.png")} style={styles.app}></Image>
           </View>
           <View >
            <Image source={require("../Assets/dp.png")} style={styles.dp}></Image>
           </View> 
        </View>
    )
}
const styles=StyleSheet.create({
    Container:{
        flexDirection:"row",
        justifyContent:"space-between"

    },
    app:{
        height:28,
        width:28
    },
    appContainer:{
        backgroundColor:"#FFFFFF",
        height:44,
        width:44,
        borderRadius:22,
        justifyContent:"center",
        alignItems:"center"
    },
    dp:{
        height:44,
        width:44,
        borderRadius:22


    }
});
export default  Header;