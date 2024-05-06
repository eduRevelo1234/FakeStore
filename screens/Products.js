import { StyleSheet, Pressable, FlatList, View, Text, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Products({ route, navigation, url }) {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products/?price_min=10&price_max=15')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los productos: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0) {
                    throw new Error('La respuesta de la API está vacía');
                }
                setProducts(data); // Utiliza los datos directamente sin modificar las imágenes
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);
    const handleProductPress = (product) => {
        navigation.navigate('Detail', { product: product });
    };

    const renderItem = ({ item }) => (
        <Pressable onPress={() => handleProductPress(item)}>
            <View style={styles.itemContainer}>
                <View style={styles.item}>
                    <Pressable onPress={() => handleProductPress(item)}>
                        <Image source={{ uri: item.images[0] }} style={styles.productImage} />
                    </Pressable>
                    <Text style={styles.title}>{item.title}</Text>
                    <Pressable onPress={() => handleProductPress(item)}>
                        <Text style={styles.price}>${parseFloat(item.price).toFixed(2)}</Text>
                    </Pressable>
                    <Text style={styles.subtitle}>Descripción: {item.description}</Text>
                </View>
            </View>
        </Pressable>
    );

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Productos</Text>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black', // Cambiar el color de fondo a negro
    },
    titleText: {
        fontSize: 40,
        fontStyle: 'italic', // Establecer como cursiva
        fontWeight: 'bold',
        color: 'white', // Establecer color a negro
        textShadowColor: 'green', // Establecer color de la sombra del texto a verde
        textShadowOffset: { width: 3, height: 3 }, // Establecer desplazamiento de la sombra
        textShadowRadius: 3, // Establecer radio de la sombra
    },
    itemContainer: {
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#fff', // Cambiar a color blanco
        padding: 20,
        marginHorizontal: 16,
        borderRadius: 0, // Cambiar a 0 para un recuadro recto
        shadowColor: '#f9c2ff', // Cambiar a sombra verde oscuro
        shadowOffset: { width: 5, height: 5 }, // Ajustar el desplazamiento de la sombra según sea necesario
        shadowOpacity: 0.5, // Ajustar la opacidad de la sombra según sea necesario
        shadowRadius: 5, // Ajustar el radio de la sombra según sea necesario
        elevation: 5, // Ajustar la elevación de la sombra para Android
          alignItems: 'center', // Centrar elementos dentro del contenedor
    },
    productImage: {
        width: 100, // Ajustar el tamaño de la imagen según sea necesario
        height: 100,
        marginBottom: 10,
       
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    subtitle: {
        fontSize: 15,
        color: 'gray',
        textAlign: 'center', 
    },
    price:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
