import React , {  Component }  from "react";
import { View, Text, Image, Button } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";


class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      nome: 'Leonardo Leitão'
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome){
    this.setState({
      nome: nome
    })
  }


  render(){

    return(
      <View style={{marginTop:15}}>

        <Button title="Entrar" onPress={() => this.entrar('leozap2')} />

        <Text style={{fontSize:23, color:'red', textAlign:'center'}}>{this.state.nome}</Text>

      </View>
    );
  }
}



export default App;