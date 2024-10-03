import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

const DATA=[
  {id:"1",title:'alfam'},
  {id:"2",title:'mandhi'},
  {id:"3",title:'biriyan'},
  {id:"4",title:'rice'},
  {id:"5",title:'porotta'},
  {id:"6",title:'chicken curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
  {id:"7",title:'beef curry'},
]

const index = () => {
  const renderItem=({item})=>(
    <View style={styles.item}>
      <Text style={styles.title}>{item.id}+{item.title}</Text>
    </View>
  )
  return (
    <FlatList data={DATA} renderItem={renderItem} keyExtractor={item=>item.id}/>
    
  )
}

export default index

const styles = StyleSheet.create({
  item:{
    padding:20,
    borderWidth:1,
    color:'black',
    borderBottomColor:"#ccc"
  },
  title:{
    fontSize:18,
  },
})