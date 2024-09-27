import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { useState } from 'react'
import { Button } from 'react-native'

const index = () => {
  const [name,setName]=useState("")
  const handelInput=(val)=>{
        setName(val)
  }
  console.log(name)
  const onChange=()=>{
    setName("")
  }
  return (
    <View>
      <Text>hi</Text>
      <TextInput placeholder='enter your name' style={{color:"black",borderWidth:1,backgroundColor:"white"}} value={name} onChangeText={handelInput}/>
      <Button title='CLEAR'onPress={onChange}/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})