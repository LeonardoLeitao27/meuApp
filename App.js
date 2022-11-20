import React , {  Component }  from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";


class App extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#444'}}>
          <View style={{flex:1,backgroundColor: 'red'}}></View>
          <View style={{flex:1,backgroundColor: 'green'}}></View>
          <View style={{flex:1,backgroundColor: 'yellow'}}></View>
      </View>
    );
  }
}



export default App;