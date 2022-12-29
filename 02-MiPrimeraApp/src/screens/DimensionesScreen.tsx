import React from 'react'
import { Text, View, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

export const DimensionesScreen = () => {

    const {height: h2, width: w2} = useWindowDimensions(); // Calcula las medidas de la pantalla en tiempo real, por si se llega a girar el dispositivo se mantegan las proporciones.


  return (

    <View>
        <View style={ styles.container }>
            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaNaranja } />
        </View>
        <Text  style={ styles.title }>W: {width} H: {height}</Text>
        <Text style={ styles.title } >W2: {w2} H2: {h2}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {    
        backgroundColor: 'red',
        width: '100%',
        height: 300,
    },
    cajaMorada:{
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%',
    },
    cajaNaranja:{
        backgroundColor: '#F0A23B',
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 30
    }

});
