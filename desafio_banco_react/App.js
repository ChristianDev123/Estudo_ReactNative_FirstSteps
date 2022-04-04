import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  Button,
} from 'react-native';
// import {Slider} from '@react-native-community/slider';
//// Desafio:
// - Form Banco React:
// nome(TextInput)
// idade(TextInput)
// sexo(Picker)
// Seu Limite(Slider)
// Estudante (Switch)
// Botao Submit
// > alert com os dados

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.containerForm}>
            <Text>Nome:</Text>
            <TextInput placeholder="Insira seu nome:" style={styles.inputText} />
          </View>
          <View style={styles.containerForm}>
            <Text>Idade:</Text>
            <TextInput placeholder="Insira sua idade:" style={styles.inputText} />
          </View>
          <View style={styles.containerForm}>
            <Text>Sexo:</Text>
          </View>
          <View style={styles.containerForm}>
            <Text>Limite:</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 50,
  },
  form:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    fontSize:25,
  },
  containerForm:{
    flex:1,
  },
  inputText:{
    borderBottomColor:"#0099ff",
    borderBottomWidth:1,
  }
});