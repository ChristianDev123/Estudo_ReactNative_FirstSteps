import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch
} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      status:false,
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch)=>{
            this.setState({status:valorSwitch});
          }}
        />
        <Text>
          {this.state.status ? "Ativo" : "inativo" }
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:15
  }
});