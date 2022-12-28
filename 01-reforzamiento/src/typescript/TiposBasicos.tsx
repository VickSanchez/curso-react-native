import React from 'react'

export const TiposBasicos = () => {


    let nombre: string | number = "Vick"; // Variable let puede mutar su valor, pero no su tipo.
    nombre = 123

    const edad: number = 35;  // constante no puede cambiar su valor ni su tipo

    const poderes: string[] = ["hola","mundo"] // Array de strings

    const poder: any[] = [] // Array de cualquier tipo de valores, no es muy recomendable.

    poder.push("adios");
    poder.push(123);
    poder.push(true);
    poder.push(false);



  return (
    <>
    <h3>TiposBasicos</h3>
    <hr />
    {nombre}
    <br />
    {edad}
    <br />
    {poderes.join(",")}
    <br />
    {poder}


    </>
  )
}
