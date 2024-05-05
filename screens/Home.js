import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function Home({ route, navigation }) {
    
    const {profileData} = route.params

    return (
        <View style={styles.container}>
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 50,
        backgroundColor: '#1976D2',
    },
    tinyLogo: {
      width: 150,
      height: 150,
    },
    name: {
        marginBottom: 4,
        fontSize: 20,
        fontWeight: '500',
    },
});

