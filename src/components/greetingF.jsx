import React, {useState} from 'react'

const GreetingF = (props) => {

    //Introducción a useState
    // const [variable, método para actualizarlo] = useSatate(valorInicial)
    const [age, setage] = useState(29);

    const birthday = () => {
        //actualizamos el State
        setage(age + 1);
    }   

    return (
        <div>
            <h1>
                ¡HOLA { props.name } desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div> 
    )
}

export default GreetingF
