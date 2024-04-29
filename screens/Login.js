import { StyleSheet, Pressable, FlatList, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Home({ route, navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.button}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                <Text style={styles.button}>Productos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <Text style={styles.button}>Categorias</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <Text style={styles.button}>Detalle</Text>
            </TouchableOpacity>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f4511e',
        height: 60,
        paddingTop: 20,
    },
    button: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
