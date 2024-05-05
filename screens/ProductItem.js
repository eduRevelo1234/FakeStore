import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProductItem({ product }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.images[0] }}
                style={styles.image}
            />
            <View>
                <Text style={styles.name}>{product.title}</Text>
                <View style={[styles.rowContainer, styles.priceContainer]}>
                    <Text style={styles.price}>
                        ${product.price}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 10, // Sin margen horizontal
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 10,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 14,
        color: '#333333',
    },
});