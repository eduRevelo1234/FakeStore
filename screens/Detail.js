import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Detail({ route }) {
    const { product } = route.params;

    const renderMainImage = () => (
        <View style={styles.mainImageContainer}>
            <View style={styles.imageBox}>
                <Image source={{ uri: product.images[0] }} style={styles.mainImage} />
            </View>
        </View>
    );

    const renderRemainingImages = () => (
        <View style={styles.imageContainer}>
            {product.images.slice(1).map((imageUrl, index) => (
                <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles del Producto</Text>
            <Text style={styles.productTitle}>{product.title}</Text>
            {renderMainImage()}
            {renderRemainingImages()}
            <Text style={[styles.boldText, styles.whiteText]}>Precio:</Text>
            <Text style={styles.whiteText}>${product.price.toFixed(2)}</Text>
            <Text style={[styles.boldText, styles.whiteText]}>Descripción:</Text>
            <Text style={styles.whiteText}>{product.description}</Text>
            <View style={styles.categoryContainer}>
                <View style={styles.categoryBox}>
                    <Text style={styles.categoryTitle}>Categoría: {product.category.name}</Text>
                    <View style={styles.categoryImageContainer}>
                        <Image source={{ uri: product.category.image }} style={styles.categoryImage} />
                    </View>
                </View>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#112114',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'white',
    },
    productTitle: {
        fontSize: 28,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: 'white',
    },
    boldText: {
        fontWeight: 'bold',
    },
    whiteText: {
        color: 'white',
    },
    mainImageContainer: {
        alignItems: 'center',
    },
    imageBox: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    mainImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor cubriendo la mayor área posible
    },
    categoryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    categoryBox: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        padding: 3,
        marginBottom: 10,
        backgroundColor: '#E9967A',
        width: '100%',
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    categoryImageContainer: {
        alignItems: 'center',
    },
    categoryImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor cubriendo la mayor área posible
    },
});
