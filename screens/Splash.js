import { StyleSheet, View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { MyColors } from '../src/theme/AppTheme';

export default function Splash({ route, navigation }) {
    
    const {profileData} = route.params

    useEffect(() => {
        setTimeout(() => navigation.navigate('Home', { profileData }), 5500);
      }, []);

    return (
        <View style={styles.container} >
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')} />
            </View>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: MyColors.darksPrimary,
        width: '100%',
        height: '90%',
        backgroundColor: MyColors.darksPrimary,
    },
    logo: {
        flex:2,
        margin: 20,
        backgroundColor: MyColors.darkPrimary,  
        borderRadius:40,
        width: '90%',
        height: '50%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius:4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});