import { StyleSheet, Pressable, FlatList, ScrollView,View,Text, ActivityIndicator, Image } from 'react-native';
import React,{useState, useEffect} from 'react';

export default function Products({route, navigation}){
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
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
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.item}>
            <Image source={{ uri: `https:${item.images[0]}` }} style={styles.productImage} resizeMode="contain" />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${parseInt(item.price).toFixed(2)}</Text>
                <Text style={styles.subtitle}>Descripción: {item.description}</Text>
            </View>
        </View>
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
        backgroundColor: '#fff',
    },
    titleText: {
        fontSize: 40,
        fontStyle: 'italic', // Establecer como cursiva
        fontWeight: 'bold',
      //  marginBottom: 30,
        color: 'black', // Establecer color a negro
        textShadowColor: 'green', // Establecer color de la sombra del texto a verde
        textShadowOffset: { width: 1, height: 1 }, // Establecer desplazamiento de la sombra
        textShadowRadius: 1, // Establecer radio de la sombra
    },
    itemContainer: {
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginHorizontal: 16,
        borderRadius: 10,
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
        frontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
});