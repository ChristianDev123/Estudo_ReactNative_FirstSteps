import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Switch
} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        name:"",
        age:"",
        gender:"Masculino",
        limit:0,
        student:false,
    };
    this.btnEnviar = this.btnEnviar.bind(this);
  }
  btnEnviar(){
    const nome = this.state.name;
    const age = this.state.age;
    var gender = this.state.gender;
    const limit = this.state.limit;
    if(gender === "Fem"){
      gender = "Feminino"
    }else{
      gender = "Masculino"
    }
    const student = this.state.student
    alert(`
      ${nome}
      ${age}
      ${gender}
      R$${limit}
      ${student?"é estudante":"não é estudante"}
    `)
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text>Nome:</Text>
            <TextInput style={styles.inputText} onChangeText={(text)=>{this.setState({name:text})}} />
          </View>
          <View style={styles.inputBox}>
            <Text>Idade:</Text>
            <TextInput style={styles.inputText} onChangeText={(text)=>{this.setState({age:text})}} />
          </View>
          <View style={styles.inputBoxPicker}>
            <Text>Sexo:</Text>
            <Picker selectedValue={this.state.gender} onValueChange={(item)=>this.setState({gender:item})}>
              <Picker.Item key="1" value="Masc" label="Masculino" />
              <Picker.Item key="2" value="Fem" label="Feminino" />
            </Picker>
          </View>
          <View style={styles.inputBox}>
            <Text>Seu Limite:</Text>
            <Slider 
              minimumValue={0}
              maximumValue={10000}
              onValueChange={(valueSelected)=>{this.setState({limit:valueSelected.toFixed(2)})}}
              minimumTrackTintColor="blue"
              thumbTintColor='blue'
            />
            <Text>{this.state.limit}</Text>
          </View>
          <View style={styles.inputBox}>
            <Text>Estudante</Text>
            <Switch
              value={this.state.student}
              onValueChange={(value)=>this.setState({student:value})}
            />            
          </View>
          <View style={styles.inputBox}>
            <TouchableOpacity style={styles.btnEnviar} onPress={()=>this.btnEnviar()}>
                <Text style={styles.btnText}>
                  Enviar
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  form:{
    flex:1,
  },
  inputBox:{
    flex:1
  },
  inputBoxPicker:{
    flex:1.5,
    justifyContent:'center',
  },
  inputText:{
    flex:1,
    borderBottomWidth: 1.5,
    borderBottomColor:"blue",
  },
  btnEnviar:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"blue",
  },
  btnText:{
    color:"white",
    fontSize:25
  }
});