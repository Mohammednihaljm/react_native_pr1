import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState } from 'react'
import { Profile } from '../components/Profile'
import Card from '../components/Card'
const index = () => {

  const[name,setState]=useState('nihal')

  const clickMe=()=>{

    setState('mohammed nihal jm')
    // console.warn(`${name}`)

  }

  // const handleClick=()=>{
  //   console.log("clicked")
  // }
  // const onClick=(name,age)=>{
  //   console.warn(name,age)
  // }
  return (
    <View>
      <Text>MY NAME IS:{name}</Text>
      <Button title='click' onPress={clickMe}/>
      {/* <Text style={styles.text}>this first program</Text>
      <Text style={{fontSize:30}}>this first program</Text>
      <Button title='PAY NOW' onPress={handleClick} />
      <Profile/>
      <Card/>
      <Button title='click' color={"black"} onPress={()=>onClick('nihal',30)}/> */}
      <Child name={name} age={25}/>
    </View>
  )
}

const Child=({name,age})=>{
  console.warn(name,age)
  return(
    <View>
      <Text>I AM CHILD CODER:{name}</Text>
      <Text>my age:{age}</Text>
    </View>
  )
}


export default index




const styles = StyleSheet.create({
  text:{
    fontSize:50,
  }
})