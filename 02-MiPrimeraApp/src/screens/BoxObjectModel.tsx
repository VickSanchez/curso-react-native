import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>BoxObjectModel</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent:'center',
        borderWidth: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 10,
        alignSelf: 'center',
        borderRadius: 10,
        width: 250,
        height: 250,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderColor: 'white',
        // backgroundColor: 'red',


    },
}); 