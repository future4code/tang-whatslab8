import React from "react";
import "./App.css";



export class App extends React.Component {
  state = {
    usuario: "",
    texto: ""
  };

  capturarUsuario = (event) => {
    this.setState({ usuario: event.target.value });
  }

  capturarMensagem = (event) => {
    this.setState({ texto: event.target.value });
  }

  enviaMensagem = () => {
  }

  render() {
    return (
      <div>
        <div className="principal">
          <div className="caixaMensagem">
              <p></p>
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
    );
  }


}

export default App;
