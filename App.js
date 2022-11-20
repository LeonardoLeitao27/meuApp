import React , {  Component }  from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";


class App extends Component{
  

  render(){

    return(
      <View style={styles.area}>


        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Eu sou texto1</Text>
        <Text style={styles.alinhaTexto}>Eu sou texto2</Text>
        <Text>Eu sou texto3</Text>
        <Text>Eu sou texto4</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  area:{
    marginTop:40
  },
  textoPrincipal:{
    fontSize: 25,
    color: 'red'
  },
  alinhaTexto:{
    textAlign: 'center'
  }
});


export default App;