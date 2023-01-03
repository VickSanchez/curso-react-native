import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
       flex:1,
       backgroundColor: 'black'
   },
   calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20 ,
        // backgroundColor: 'red',
        justifyContent: 'flex-end'
   },
   resultadoPequeno: {
       color: 'rgba(255,255,255,0.5)',
       fontSize: 25,
       textAlign: 'right',
   },
   simboloOperacion: {
        color: 'white',
        fontSize: 30
   },
   resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 5,
    },
   fila:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
   },
   boton: {
        backgroundColor: '#333333',
        height: 80,
        width: 80,
        justifyContent: 'center',
        borderRadius: 100,
        marginHorizontal: 10,
   },
   botonTexto:{
        textAlign: 'center',
        color: 'white',
        fontWeight: "500",
        fontSize: 25,
        padding: 10,
   },
      
});