import React , {  Component }  from "react";
import { View, Text } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";


class App extends Component{
  render(){
    return(
      <View>
        <Text>Olá mundo!</Text>
      </View>
    );
  }
}

export default App;