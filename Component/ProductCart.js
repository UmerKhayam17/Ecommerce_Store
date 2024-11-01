import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import ProductDetail from "../Screens/ProductDetail";
const ProductCart = ({item,handleLike}) => {
 //   const[isLiked,setisLiked]=useState(false);
 //const isLiked=true;
 const navigation=useNavigation();
    return (
        <TouchableOpacity  style={styles.conatiner}
        onPress={()=>{navigation.navigate(ProductDetail,{item})}}
        >
            <Image source={{uri:item.image}}
                style={styles.coverImage}></Image>
            <View style={styles.content}>
                <Text style={styles.title}> {item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={()=>handleLike(item)} style={styles.heart}>
                {
                     !item?.isLiked?(
                        <AntDesign name={"heart"} size={20} color={"#E55B5B"} />

                    ):(
                        <AntDesign name={"hearto"} size={20} color={"#E55B5B"} />

                    )
                }
              
            </TouchableOpacity>
        </TouchableOpacity>
    )

}
export default ProductCart;
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginTop: 20,
        // borderWidth: 1,
        //borderColor: "Black"
        position: "relative"
    },

    coverImage: {
        height: 250,
        width: "90%",
        borderRadius: 20,
        margin: 10
    },
    title: {
        fontSize: 18,
        color: "black",
        fontWeight: "600"
    }, price: {
        fontSize: 18,
        color: "black",
        fontWeight: "600"
    },
    content: {
        paddingLeft: 15
    },
    heart: {
        height: 34,
        width: 34,
        backgroundColor: "white",justifyContent:"center",
        alignItems:"center",
        borderRadius: 20,
        position:"absolute",
        top: 20,
        right: 20
    }
})