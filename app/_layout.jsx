import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <>
    <Text>HEADER</Text>
    <Slot/>
    <Text>FOOTER</Text>
    </>
         
  )
}

export default RootLayout


