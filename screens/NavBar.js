import { StyleSheet, Pressable, FlatList, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';


export default function NavBar({ route, navigation }) {

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.button}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Products', { url: 'https://api.escuelajs.co/api/v1/products' })}>
                    <Text style={styles.button}>Productos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                    <Text style={styles.button}>Categorias</Text>
                </TouchableOpacity>
            </View>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button: {
        backgroundColor: '#E5E5E5', // Color de fondo
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#000', // Color del texto
        fontSize: 16,
        fontWeight: 'bold',
    },
});
