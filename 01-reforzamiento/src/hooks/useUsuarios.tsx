import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaref = useRef(1)

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async() => {

        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaref.current
            }
        })
        if(resp.data.data.length > 0){
            setUsuarios( resp.data.data );
        } else {
            paginaref.current --;
            alert('No hay mas Registros')
        }
    }

    const paginaSiguiente = () => {
        paginaref.current ++;
        cargarUsuarios();
        
    }
    const paginaAnterior = () => {
        if(paginaref.current > 1 ){
            paginaref.current --;
            cargarUsuarios() 
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
        
        
    }

}