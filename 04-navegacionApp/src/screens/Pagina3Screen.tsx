import { StackScreenProps } from '@react-navigation/stack'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> {};

export const Pagina3Screen = ( { navigation }: Props ) => {
   return (
       <View style={ styles.globalMargin }>
          <Text>Hola Mundo</Text>
          <Button title='Regresar' onPress={() => navigation.pop() } />
          <Button title='Ir Página 1' onPress={() => navigation.popToTop() } />

       </View>
   )
}