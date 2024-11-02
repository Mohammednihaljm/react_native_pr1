import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const index = () => {
  const [isLoggedin,setLoggedin]=useState(false)
  return (
    <View>
      <Text>index</Text>
      {isLoggedin?(<Button title='logout' onPress={()=>setLoggedin(false)} />):(<Button title='login' onPress={()=>setLoggedin(true)}/>)}
      
      
    </View>
  )
}

export default index

const styles = StyleSheet.create({})