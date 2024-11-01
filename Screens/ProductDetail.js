import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const ProductDetail=()=>{
    return(
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.linearGradient}/>
           
    )
}
export default ProductDetail;
var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
})