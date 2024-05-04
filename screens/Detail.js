import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;

export default function Detail({ route }) {
    const { product } = route.params;

    const renderItem = ({ item }) => (
        <Image source={{ uri: item.uri }} style={styles.image} />
    );

    // Transforma las URLs en objetos con la propiedad 'uri'
    const imagesWithUri = product.images.map(url => ({ uri: url }));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles del Producto</Text>
            <Text>Título: {product.title}</Text>
            <Text>Precio: ${product.price.toFixed(2)}</Text>
            <Text>Descripción: {product.description}</Text>
            <Text>Categoría: {product.category.name}</Text>
            <Text>Imagen de la Categoría:</Text>
            <Image source={{ uri: product.category.image }} style={styles.categoryImage} />
            <Text>Imágenes:</Text>
            <Carousel
                data={imagesWithUri} // Pasa los objetos con la propiedad 'uri'
                renderItem={renderItem}
                sliderWidth={windowWidth}
                itemWidth={windowWidth * 0.8} // Usar un ancho menor para las imágenes del Carousel
                layout="default"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff', // Color de fondo blanco
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%', // Ancho del 100%
        height: 200, // Altura fija
        marginBottom: 10,
    },
    categoryImage: {
        width: '100%', // Ancho del 100%
        height: 100, // Altura fija
        marginBottom: 10,
    },
});
