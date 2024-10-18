import React,{Component} from "react";
const { View,Text, Button } = require("react-native");



class index extends Component{
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }
  handleDicrement=()=>{
    this.setState({count:this.state.count-1})
  }
  render(){
    return(
      <View>
        <Text>count:{this.state.count}</Text>
        <View>
          <Button title="increment" onPress={this.handleIncrement}/>
          <Button title="dicrement" onPress={this.handleDicrement}/>
        </View>
      </View>
      
    )
  }
}






export default index