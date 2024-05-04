import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Separator() {
    return (
        <View style={styles.seprator}> 
        </View>
      )
}

const styles = StyleSheet.create({
    seprator: {
        height: 0.8,
        backgroundColor: '#CAD5E2'
    }
})