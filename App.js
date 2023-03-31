import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Switch, Button } from 'react-native';

import {styles} from './styles.js';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      sexo: '',
      escolaridade: '',
      limite: 0,
      brasileiro: ''
    }
    this.enviar = this.enviar.bind(this);
  }

  enviar(){
    this.setState({
      nome: this.state.nome,
      idade: this.state.idade,
      sexo: this.state.sexo,
      escolaridade: this.state.escolaridade,
      limite: this.state.limite,
      brasileiro: this.state.brasileiro
    });
    
    console.log(this.state.nome);
    let elemento = document.getElementById("resultado");
    elemento.style.display = "block";
  }

  render(){
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Abertura de Conta</Text>

          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.inputs} placeholder="Digite seu nome"  onChangeText={(a) => this.setState({nome: a})} value={this.state.nome}></TextInput>

          <Text style={styles.label}>Idade:</Text>
          <TextInput style={styles.inputs} placeholder="Digite sua idade: " onChangeText={(a) => this.setState({idade: a})}></TextInput>

          <Text style={styles.label}>Sexo:</Text>
          <Picker selectedValue={this.state.sexo} style={styles.inputs} onValueChange={(value, index) => this.setState({sexo: value})}>
            <Picker.Item key={1} value={"Feminino"} label="Feminino"/>
            <Picker.Item key={2} value={"Masculino"} label="Masculino"/>
            <Picker.Item key={3} value={"Outro"} label="Outro" />
          </Picker>

          <Text style={styles.label}>Escolaridade:</Text>
          <Picker style={styles.inputs} onValueChange={(value, index) => this.setState({escolaridade: value})}>
            <Picker.Item key={1} value={"Ensino Médio"} label="Ensino Médio" />
            <Picker.Item key={2} value={"Graduação"} label="Graduação" />
            <Picker.Item key={3} value={"Pós-Graduação"} label="Pós-Graduação" />
            <Picker.Item key={4} value={"Doutorado"} label="Doutorado" />
            <Picker.Item key={5} value={"Mestrado"} label="Mestrado" />
          </Picker>

          <Text style={styles.label}>Limite:</Text>
          <Slider style={styles.inputs} minimumValue={0} maximumValue={10} onValueChange={(value) => this.setState({limite: value})} value={this.state.limite.toFixed(2)}/>
          <Text style={styles.legend}>{this.state.limite.toFixed(2)}</Text>

          <Text style={styles.label}>Brasileiro:</Text>
          <Switch style={styles.switchs} value={this.state.brasileiro} onValueChange={ (valor) => this.setState({brasileiro: valor})}/>
          <Text>{(this.state.brasileiro) ? "Sim" : "Não"}</Text>

          <View style={styles.button}>
            <Button title="Enviar" onPress={this.enviar} color="#32CD32"></Button>
          </View>

          <div id="resultado" style={{display: "none"}}>
              <Text style={styles.titulo}>Dados informados: </Text>
              <br></br>
              <Text style={styles.textoResultado}>Nome: {this.state.nome}</Text>
              <br></br>
              <Text style={styles.textoResultado}>Idade: {this.state.idade}</Text>
              <br></br>
              <Text style={styles.textoResultado}>Sexo: {this.state.sexo}</Text>
              <br></br>
              <Text style={styles.textoResultado}>Escolaridade: {this.state.escolaridade}</Text>
              <br></br>
              <Text style={styles.textoResultado}>Limite: {this.state.limite.toFixed(2)}</Text>
              <br></br>
              <Text style={styles.textoResultado}>É brasileiro: {(this.state.brasileiro) ? "Sim" : "Não"}</Text>
          </div>
        </View>
      );
  }
}