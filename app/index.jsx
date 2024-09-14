import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text style={styles.text}>this first program</Text>
      <Text style={{fontSize:30}}>this first program</Text>
      <Button title='CLICK'/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  text:{
    fontSize:40,
  }
})