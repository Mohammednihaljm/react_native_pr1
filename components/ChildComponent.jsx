import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChildComponent = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}

export default ChildComponent

const styles = StyleSheet.create({})