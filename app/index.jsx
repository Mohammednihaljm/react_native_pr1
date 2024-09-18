import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { Profile } from '../components/Profile'
import Card from '../components/Card'
const index = () => {

  const handleClick=()=>{
    console.log("clicked")
  }
  const onClick=(name,age)=>{
    console.warn(name,age)
  }
  return (
    <View>
      <Text style={styles.text}>this first program</Text>
      <Text style={{fontSize:30}}>this first program</Text>
      <Button title='PAY NOW' onPress={handleClick} />
      <Profile/>
      <Card/>
      <Button title='click' color={"black"} onPress={()=>onClick('nihal',30)}/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  text:{
    fontSize:50,
  }
})