import { StyleSheet, Pressable, FlatList, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import NavBar from './NavBar';
import Products from './Products';


export default function Home({ route, navigation }) {
    const { profileData } = route.params
    const productURL = "https://api.escuelajs.co/api/v1/products/?price_min=10&price_max=15";
    return (
        <View>
            <NavBar navigation={navigation} />
            <UserInfo id={profileData.id} />
            <Text style={styles.offerText}>Ofertas</Text>
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
    offerText: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FF0000',
        paddingBottom: 20,
    },
});

