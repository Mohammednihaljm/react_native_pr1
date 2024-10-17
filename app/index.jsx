import React,{Component} from "react";
const { View,Text } = require("react-native");



class index extends Component{
  render(){
    return(
      <View>
        <Text>index</Text>
        <Child/>
      </View>
    )
  }
}




class Child extends Component{
  render(){
    return(
      <View>
        <Text>I AM CHILD component</Text>
      </View>
    )
  }
}

export default index