import { StyleSheet, View } from "react-native"


export const TareaScreen = () => {
  return (
    <View style={ styles.container }  >
        <View style={ styles.cajaMorada } ></View>
        <View style={ styles.cajaNaranja } ></View>
        <View style={ styles.cajaAzul } ></View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'space-between',
        // flexDirection: 'row',
        // alignItems: 'center'
   },
   cajaMorada:{
        // flex: 2,
        backgroundColor: '#5856D6',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        alignSelf: 'flex-end'
        // top: 100,

    },
    cajaNaranja:{
        // flex: 2,
        backgroundColor: '#F0A23B',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        alignSelf: 'center',
        // left: 100,
        // top: 50, 
    },
    cajaAzul:{
        // flex: 4,
        backgroundColor: '#28C4D9',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        // bottom:0,
        // position:'absolute'

    },
});