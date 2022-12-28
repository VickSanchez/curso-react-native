interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion

}

interface Direccion {
    pais: string,
    casa: number
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Vick',
        edad: 31,
        direccion: {
            pais: 'México',
            casa: 15
        }
    };

  return (
    <>
    <h3>Objetos Literales</h3>
    <code>
        <pre>
            {JSON.stringify(persona, null, 2)}
        </pre>
    </code>
    </>
  )
}
