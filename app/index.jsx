import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { useState } from 'react'

const index = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  return (
    <View>
      <Text>sign up</Text>
      <View>
        <Text>NAME:{name}</Text>
        <TextInput placeholder='name' style={styles.input} onChangeText={(val)=>{setName(val)}}/>
      </View>
      <View>
        <Text>Email:{email}</Text>
        <TextInput placeholder='email' style={styles.input} onChangeText={(val)=>{setEmail(val)}} keyboardType='emai-address'/>
      </View>
      <View>
        <Text>password:{password}</Text>
        <TextInput placeholder='password' style={styles.input} onChangeText={(val)=>{setPassword(val)}} secureTextEntry={true}/>
      </View>
      <Button title='click me'/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    padding:10,
    fontSize:12,
  }
})