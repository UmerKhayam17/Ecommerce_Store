import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Category = ({ item, selectedCategory, setSelectedCategory }) => {
   // console.log("SelectedCategory::",selcetedCatergory)
  //  Alert.alert("Se",setselectedCategory)
  //  function changecolor(){
   //     if(selcetedCatergory==item && color==="#FFFFFF"){
     //       backgroundColor:"E96E6E"
       // }
    return (
        <TouchableOpacity
            onPress={() => setSelectedCategory(item)}>

            <Text
             style={[styles.catrgoryText,
                selectedCategory ===  item &&
               { color: "white", backgroundColor:"#E96E6E" },
               ]}>{item}</Text>
        </TouchableOpacity>
    )
}
export default Category;
const styles = StyleSheet.create({
    catrgoryText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
        color:"#938F8F",
         backgroundColor:"#E96E6E",
        backgroundColor: "#DFDCDC",
        textAlign: "center",
        borderRadius: 16,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop:10


    }
})