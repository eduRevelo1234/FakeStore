import { StyleSheet, View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import NavBar from './NavBar';

export default function Home({ route, navigation }) {
    const { profileData } = route.params;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products/?price_min=10&price_max=15')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <NavBar navigation={navigation} />
            <UserInfo id={profileData.id} />
            <Text style={styles.offerText}>Ofertas</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                            <Image
                                source={{ uri: item.images[0] }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    offerText: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FF0000',
        paddingBottom: 20,
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 8,
    },
    description: {
        fontSize: 16,
        color: 'gray',
    },
});
