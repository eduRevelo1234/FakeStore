import { StyleSheet, Pressable, FlatList, ScrollView, View, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function UserInfo({ route, navigation, id }) {
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "https://api.escuelajs.co/api/v1/users/"
    useEffect(() => {
        fetch(url + id)
            .then((resp) => resp.json())
            .then((json) => setUserInfo(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        console.log(userInfo)
    }, []);
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: userInfo.avatar
                }}
                style={styles.userImage}
            />
            <Text style={styles.text} > Bienvenido a la tienda {userInfo.name}</Text>
            <Text style={styles.text} > Tenemos estas ofertas para ti </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
    },
    text: {
        fontSize: 18, // Tamaño del texto
        fontWeight: 'bold', // Peso del texto
        lineHeight: 24, // Altura de línea
        color: '#666666', // Color del texto (blanco en este ejemplo)
        textAlign: 'left',
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
});
