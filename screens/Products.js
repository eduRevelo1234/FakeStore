import { StyleSheet, Pressable, FlatList, ScrollView, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Separator from './Separator';
import ProductItem from './ProductItem';

export default function Products({ route, navigation, url }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url + id)
            .then((resp) => resp.json())
            .then((json) => setProducts(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        console.log(userInfo)
    }, []);
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => {
                        navigation.navigate('Detail', {
                            product: item
                        })
                    }}
                >
                    <ProductItem product={item} />
                </Pressable>
            )}
        />
    )
}