import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
        //Estado inmutado del componente, 
        //solamente un nuevo estado genera una nueva renderización del componente. 
        //Solo se puede cambiar el estado a través de la función setState
        this.state = {
            age : 29
        }
    }
    
    render() {
        return (
            <div>
                <h1>
                    ¡HOLA { this.props.name }!
                </h1>
                <h2>
                    Tu edad es de: { this.state.age }
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>  
        );
    }

    /*Méodo que nos permite cambiar el state y actualizar la vista*/
    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;

