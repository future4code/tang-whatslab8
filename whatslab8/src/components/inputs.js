import React from 'react'

export class Inputs extends React.Component {
    state = {
        usuario: "",
        texto: ""
    }

    capturarUsuario = (event) =>{
        this.setState({ usuario: event.target.value });
        console.log(event); 
    }

    capturarMensagem = (event) =>{
        this.setState({ texto: event.target.value });
        console.log(event); 
    }

    render() {
        return (
          <div>
            <p>{this.state.nome}</p>
            <input 
              placeholder={""}
              value={this.state.usuario}
              onChange={this.capturarUsuario}
            />
            <input
              placeholder={""}
              value={this.state.texto}
              onChange={this.capturarMensagem}
            />
          </div>
        );
    }
}