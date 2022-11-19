import React , {  Component }  from "react";
import { View, Text, Image } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";


class App extends Component{
  render(){

    let nome = 'leo';

    return(
      <View>
        <Text>Olá mundo!!</Text>
        <Text style={{color:'red', fontSize:25, margin:15}}> Leo </Text>

        
        <Text>{nome}</Text>

        <Jobs Largura={300} Altura={600} nome1={'leo'}/>

      </View>
    );
  }
}

class Jobs extends Component{
  render(){
    return(
      <View>
        <Image source={{uri: 'https://petsdalets.com.br/wp-content/uploads/2022/06/mais-de-um-gato-em-casa-2.jpg'}}
        style={{height:this.props.Altura, width:this.props.Largura}}/>

        <Text>{this.props.nome1}</Text>
      </View>

    );
  }
}

export default App;