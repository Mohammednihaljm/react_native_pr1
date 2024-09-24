import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState } from 'react'
import { Profile } from '../components/Profile'
import Card from '../components/Card'
import { externalStyle } from '../style'
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
      <Text style={{color:"pink",fontSize:25,backgroundColor:"black"}}>MY NAME IS:{name}</Text>
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
      <Text style={styles.heading}>I AM CHILD CODER:{name}</Text>
      <Text style={styles.heading}>I AM CHILD CODER:{name}</Text>
      <Text style={styles.heading}>I AM CHILD CODER:{name}</Text>
      <Text style={styles.heading}>I AM CHILD CODER:{name}</Text>
      <Text style={styles.heading}>I AM CHILD CODER:{name}</Text>
      <Text style={externalStyle.heading}>my age:{age}</Text>
    </View>
  )
}


export default index




const styles = StyleSheet.create({
  heading:{
    color:"red",
    backgroundColor:"black",
    fontSize:30,
    fontWeight:"500",
    textAlign:"center",
    padding:10,
    margin:10,
    borderRadius:10,
  }
})