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

        <Image 
        source={{uri: 'https://petsdalets.com.br/wp-content/uploads/2022/06/mais-de-um-gato-em-casa-2.jpg'}}
        style={{height:600, width:300}}
        />
        <Text>{nome}</Text>

      </View>
    );
  }
}

export default App;