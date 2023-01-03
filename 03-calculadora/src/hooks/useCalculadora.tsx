import {useRef, useState} from 'react';
enum Operadores {
    sumar, restar, multiplicar, dividir
 }
 

export const useCalculadora = () => {
 
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [simbolo, setSimbolo] = useState('')
    const operacion = useRef<Operadores>()
 
    const limpiar = () => {
       setNumero('0');
       setNumeroAnterior('0')
       setSimbolo('')
    }
 
    const armarNumero = ( numeroTexto: string ) => {
       //! Validaciones para armar un numero
       //* No aceptar doble punto
       if( numero.includes('.') && numeroTexto === '.') return;
       //* Empezar con 0 solo si se le va a añadir un punto decimal
       if( numero.startsWith('0') || numero.startsWith('-0') ) {
          if( numeroTexto === '.'){
             setNumero(numero + numeroTexto);
 
          //* Evaluar si se ingresa otro cero , pero hay un punto
          }else if ( numeroTexto === '0' && numero.includes('.')){
             setNumero(numero + numeroTexto )
 
          //* Evaluar si es diferente de 0 y no tiene punto
          } else if( numeroTexto !== '0' && !numero.includes('.') ){
             setNumero( numeroTexto )
 
          //* Evitar 00000.0
          } else if( numeroTexto === '0' && !numero.includes('.')){
             setNumero( numero )
          } else {
             setNumero( numero + numeroTexto )
          }
       }else {
          setNumero( numero + numeroTexto )
       }
 
    }
 
    const positivoNegativo = () => {
          if( numero.includes('-')){
             setNumero( numero.replace('-',''))
          } else {
             setNumero('-'+ numero)
          }
    }
 
    const btnDel = () => {
 
       let negativo ='';
       let numeroTemp = numero;
 
       if( numero.includes('-') ){
          negativo = '-';
          numeroTemp = numero.substring(1);
       } 
 
       if( numeroTemp.length > 1){
          setNumero( negativo + numeroTemp.slice(0, -1));
       } else {
          setNumero('0');
       }
 
    };
    
    const subirNum = () => {
      if( numero.endsWith('.')){
       setNumeroAnterior( numero.slice(0,-1) )
      }else {
       setNumeroAnterior( numero )
      }
      setNumero('0')
    }
 
    const btnDividir = () => {
       subirNum()
       setSimbolo('÷')
       operacion.current = Operadores.dividir
    }
    const btnMultiplicar = () => {
       subirNum()
       setSimbolo('x')
       operacion.current = Operadores.multiplicar
    }
    const btnRestar = () => {
       subirNum()
       setSimbolo('-')
       operacion.current = Operadores.restar
    }
    const btnSumar = () => {
       subirNum()
       setSimbolo('+')
       operacion.current = Operadores.sumar
    }
 
    const calcular = () => {
 
       const num1 = Number(numero);
       const num2 = Number(numeroAnterior)
 
       switch ( operacion.current ) {
          case Operadores.sumar:
             setNumero( `${num1 + num2}` )
             break;
          case Operadores.restar:
             setNumero( `${num2 - num1}` )
             break;
          case Operadores.multiplicar:
             setNumero( `${num1 * num2}` )
             break;
          case Operadores.dividir:
             setNumero( `${num2 / num1}` )
             break;
       
          default:
             break;
       }
       setNumeroAnterior('0')
       setSimbolo('')
 
    }

    return {
        numero,
        numeroAnterior,
        simbolo,
        limpiar,
        armarNumero,
        calcular,
        btnSumar,
        btnDel,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        positivoNegativo
    }
}
