
import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Detail({ route, navigation }) {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>
            <Image style={styles.image} source={{ uri: product.images[0] }} />
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 10,
        borderRadius: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2E8B57', // Color verde similar al de Instagram
    },
});