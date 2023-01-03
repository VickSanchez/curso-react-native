import { View, Text } from 'react-native';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';
import { BotonCalc } from './BotonCalc';


export const Calculadora = () => {

    const {numero, numeroAnterior, simbolo, limpiar, armarNumero, calcular, btnSumar, btnDel, btnDividir, btnMultiplicar, btnRestar, positivoNegativo} = useCalculadora()

  return (
    <View style={ styles.calculadoraContainer }>
         {
            (numeroAnterior !== '0') && <Text style={ styles.resultadoPequeno } >{numeroAnterior}</Text>
         }
          <Text style={ styles.simboloOperacion } >{ simbolo }</Text>
          <Text 
            style={ styles.resultado }
            numberOfLines={1}
            adjustsFontSizeToFit
           >{ numero }</Text>
            
            <View style={ styles.fila }>
               <BotonCalc texto='C' color='#9B9B9B' accion={ limpiar } />
               <BotonCalc texto='+/-' color='#9B9B9B' accion={ positivoNegativo } />
               <BotonCalc texto='DEL' color='#9B9B9B' accion={ btnDel } />
               <BotonCalc texto='÷' color='#FF9427' accion={ btnDividir } />
            </View>
            <View style={ styles.fila }>
               <BotonCalc texto='7' accion={ armarNumero } />
               <BotonCalc texto='8' accion={ armarNumero } />
               <BotonCalc texto='9' accion={ armarNumero } />
               <BotonCalc texto='x' color='#FF9427' accion={ btnMultiplicar } />
            </View>
            <View style={ styles.fila }>
               <BotonCalc texto='4' accion={ armarNumero } />
               <BotonCalc texto='5' accion={ armarNumero } />
               <BotonCalc texto='6' accion={ armarNumero } />
               <BotonCalc texto='-' color='#FF9427' accion={ btnRestar } />
            </View>
            <View style={ styles.fila }>
               <BotonCalc texto='1' accion={ armarNumero } />
               <BotonCalc texto='2' accion={ armarNumero } />
               <BotonCalc texto='3' accion={ armarNumero } />
               <BotonCalc texto='+' color='#FF9427' accion={ btnSumar } />
            </View>
            <View style={ styles.fila }>
               <BotonCalc texto='0' accion={ armarNumero } ancho  />
               <BotonCalc texto='.' accion={ armarNumero } />
               <BotonCalc texto='=' accion={ calcular } />
            </View>


       </View>
  )
}
