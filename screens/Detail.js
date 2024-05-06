import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;

export default function Detail({ route }) {
    const { product } = route.params;

    const renderRemainingImages = () => (
        <Carousel
            data={product.images.slice(1)}
            renderItem={({ item }) => (
                <Image source={{ uri: item }} style={styles.image} />
            )}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            loop
            autoplay
            autoplayInterval={5000}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles del Producto</Text>
            <Text style={styles.productTitle}>{product.title}</Text>
            <View style={styles.imageContainer}>
                {renderRemainingImages()}
            </View>
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
        paddingTop: 50, // Espacio en la parte superior de la ventana
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
    imageContainer: {
        marginBottom: 10, // Ajusta el espacio entre las imágenes y el texto
    },
    image: {
        width: windowWidth,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
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
    }
});
