import { StyleSheet, Pressable, FlatList, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import NavBar from './NavBar';
import Products from './Products';


export default function Home({ route, navigation, id = 2 }) {

    const productURL = "https://api.escuelajs.co/api/v1/products";
    return (
        <View>
            <NavBar navigation={navigation} />
            <UserInfo id={id} />
            <Products route={route} navigation={navigation} url={productURL} ></Products>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
