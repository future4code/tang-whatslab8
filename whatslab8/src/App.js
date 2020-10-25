import React from "react";
import "./App.css";



export class App extends React.Component {
  state = {
    mensagemEstrutura: [
      {
          usuario: "",
          texto: ""
      }
    ],  
    valorUsuario: '',
    valorMensagem: ''
    
    };

  capturarUsuario = (event) => {
    this.setState({ valorUsuario: event.target.value });
    
  }

  capturarMensagem = (event) => {
    this.setState({ valorMensagem: event.target.value });
  }

  enviaMensagem = () => {
    const  novaMensagem = {
      usuario: this.state.valorUsuario,
      texto: this.state.valorMensagem
    }
    const novasMensagens = [...this.state.mensagemEstrutura, novaMensagem]
    this.setState({mensagemEstrutura: novasMensagens})
  }

  render() {
    const mensagemNova = this.state.mensagemEstrutura.map((novaMensagem) => {
      return(
        <div>
          <p className="nomeUsuario"><strong>
            {novaMensagem.usuario}
          </strong></p>
          <p className="textoMensagem">
            {novaMensagem.texto}
          </p>
        </div>
      )
    }
    )
    
  
    return (
      <div>
        <div className="principal">
          <div className="tentativa1">
                    {mensagemNova}
          </div>
          <div className="inputs">
              <input className="inputUsuario"
                placeholder={"Usuário"}
                value={this.state.usuario}
                onChange={this.capturarUsuario}
              />
              <input className="inputMensagem"
                placeholder={"Mensagem"}
                value={this.state.texto}
                onChange={this.capturarMensagem}
              />
              <button className="btn"
                onClick={this.enviaMensagem}>Enviar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
