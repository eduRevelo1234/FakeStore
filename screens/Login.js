import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import React,{useState, useEffect} from 'react';
import { useFonts } from 'expo-font';
import { RoundedButton } from '../src/components/RoundedButton';
import { MyColors } from '../src/theme/AppTheme';


export default function Login({ route, navigation }) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [fontsLoaded] = useFonts({
        'Orbitron-Black': require('../assets/fonts/Orbitron-Black.ttf'),
        'Orbitron-Bold': require('../assets/fonts/Orbitron-Bold.ttf'),
        'Orbitron-ExtraBold': require('../assets/fonts/Orbitron-ExtraBold.ttf'),
        'Orbitron-Medium': require('../assets/fonts/Orbitron-Medium.ttf'),
        'Orbitron-Regular': require('../assets/fonts/Orbitron-Regular.ttf'),
        'Orbitron-SemiBold': require('../assets/fonts/Orbitron-SemiBold.ttf'),
    });
    
    if (!fontsLoaded) {
        return undefined
    }

    const handleLogin = async () => {
        
    }
    
    return (
        <View style={styles.container}>
           <View>
                <Text style={styles.title}>LOGIN</Text>
            </View>
            <View>
                <Image 
                    source={require('../assets/logo.png')} 
                    style={styles.logo}
                />
            </View>
            <View style={styles.card}>
                <View style={styles.cardInput}>
                    <Image 
                        source={require('../assets/email.png')} 
                        style={styles.icon}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email" 
                        placeholderTextColor="#AAAAAA" 
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.cardInput}>
                    <Image 
                        source={require('../assets/password.png')} 
                        style={styles.icon}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Password" 
                        placeholderTextColor="#AAAAAA"  
                        keyboardType='default' 
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={{marginTop: 30}}>
                    <RoundedButton text='INGRESAR' onPress={handleLogin} />
                </View>
            </View>
            
        </View>);
    }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: MyColors.darksPrimary,
    },
    
    title: {
        color: 'white',
        fontFamily: 'Orbitron-SemiBold',
        fontSize: 50,
        fontWeight: 'bold',
    },

    logo:{
        width: 200,
        height: 200,
        borderRadius: 50,
        borderBlockColor: 'white',
        
    },
    
    card:{
        margin: 20,
        backgroundColor: MyColors.darkPrimary,
        borderRadius:40,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius:4,
        elevation: 5,
    },

    cardInput: {
        flexDirection: 'row',
        marginTop: 30,

    },

    icon: {
        width: 25,
        height: 25,
        marginTop: 5,
    },

    input: {
        flex:1,
        padding: 0,
        height: 40,
        color: 'white',
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.marginColor,
        fontFamily: 'Orbitron-Regular',
        marginLeft: 15,
    },
});
