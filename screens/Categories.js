import { StyleSheet, Pressable, FlatList, ScrollView, View, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategorieItem from './CategorieItem';
import Separator from './Separator';

export default function Categories({ route, navigation }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "https://api.escuelajs.co/api/v1/categories";

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((json) => setCategories(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    const filteredCategories = categories.filter(category => category.id >= 1 && category.id <= 5);
    return (
        <FlatList
            data={categories.slice(0, 5)}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => {
                        navigation.navigate('Products', {
                            product: item
                        })
                    }}
                >
                    <CategorieItem categorie={item} />
                </Pressable>
            )}
        />
    )
}