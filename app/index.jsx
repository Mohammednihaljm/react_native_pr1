import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-native'

const index = () => {
  const [counte, setcounte] = useState(0)
 function decrement(){
  return(
    setcounte(counte-1)
  )
 }
  return (
    <View>
      <Text>count:{counte}</Text>
      <View>
        <Button title='increment' onPress={()=>setcounte(counte+1)}/>
        <Button title='dicrement'onPress={decrement}/>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})