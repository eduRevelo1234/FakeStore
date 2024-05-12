import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function CategorieItem({ categorie }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: categorie.image }} />
            </View>
            <Text style={styles.name}>{categorie.name}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 70,
        borderRadius: 50
    },
    imageContainer: {
        paddingTop: 15,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 150, // Altura fija más pequeña
        aspectRatio: 1, // Mantener la proporción original de la imagen
        resizeMode: 'cover',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
});