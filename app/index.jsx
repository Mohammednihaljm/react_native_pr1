import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { Profile } from '../components/Profile'
import Card from '../components/Card'
const index = () => {
  const handleClick=()=>{
    console.log("waiting")
  }
  return (
    <View>
      <Text style={styles.text}>this first program</Text>
      <Text style={{fontSize:30}}>this first program</Text>
      <Button title='PAY NOW' onPress={handleClick} />
      <Profile/>
      <Card/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  text:{
    fontSize:50,
  }
})