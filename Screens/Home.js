import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../Component/Header";
import Feather from "react-native-vector-icons/Feather";
import Category from "../Component/Category";
import ProductCart from "../Component/ProductCart";
import Data from "../Screens/Data.json";  // Ensure Data.json has correct structure

const categories = ["Trending Now", "New", "Mens", "Womens"];

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [Product, setProduct] = useState(Data.products); // Check JSON structure here

    // Handle Like functionality for products
    const handleLike = (item) => {
        const newProductList = Product.map((prod) => {
            if (prod.id === item.id) {
                return {
                    ...prod,
                    isLiked: !prod.isLiked // Toggle the isLiked value
                };
            }
            return prod;
        });
        setProduct(newProductList);
    };

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.linearGradient}>
            <View style={styles.container}>
                <Header />
                <FlatList
                    numColumns={2}
                    ListHeaderComponent={
                        <>
                            <Text style={styles.match}>Match Your Style</Text>
                            <View style={styles.Input}>
                                <View style={styles.icons}>
                                    <Feather name={"search"} size={26} color={"black"} />
                                </View>
                                <TextInput style={styles.inputText} placeholder="Search" />
                            </View>
                            <FlatList
                                data={categories}
                                renderItem={({ item }) => (
                                    <Category
                                        item={item}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                    />
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </>
                    }
                    data={Product}  // Pass Product array directly
                    renderItem={({ item }) => (
                        <ProductCart
                            item={item}
                            handleLike={handleLike} // Pass handleLike function to ProductCart
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()} // Ensure each product has a unique key
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 150 }}
                />
            </View>
        </LinearGradient>
    );
};

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    container: {
        padding: 15
    },
    match: {
        fontSize: 28,
        color: "black",
        marginTop: 25
    },
    Input: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        height: 48,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    icons: {
        marginHorizontal: 20
    },
    inputText: {
        flex: 1,
        fontSize: 20
    }
});

export default Home;