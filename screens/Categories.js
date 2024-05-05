import { StyleSheet, Pressable, FlatList, ScrollView, View, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Categories({route, navigation}){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "https://api.escuelajs.co/api/v1/categories"
    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((json) => setCategories(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        console.log(userInfo)
    }, []);
    return(
        <View>
           <Text> Categories</Text>

        </View>
    )
}