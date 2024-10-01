import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'

const index = () => {
  return (
    <View>
      <Text>sign up</Text>
      <View>
        <Text>NAME:</Text>
        <TextInput placeholder='name' style={styles.input} />
      </View>
      <View>
        <Text>Email:</Text>
        <TextInput placeholder='email' style={styles.input} />
      </View>
      <View>
        <Text>password:</Text>
        <TextInput placeholder='password' style={styles.input} />
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