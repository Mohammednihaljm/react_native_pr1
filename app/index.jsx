import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {

  const DATA=[
    {
      title:"vegetable",
      data:["onino","tomato","potato"]
    },
    {
      title:"fruits",
      data:["pinapple","pappaya","apple"]
    },
    {
      title:"diary",
      data:["milk","cheese"]
    }
  ]
  const RenderItem=({item})=>{
    return(
      <View>
        <Text>
         {item}
        </Text>
      </View>
    )
  }
  return (
    <View>
      <Text>
        <SectionList sections={DATA} renderItem={RenderItem} renderSectionHeader={({section:{title}})=>{
            return(
              <View>
                <Text>{title}</Text>
              </View>
            )
        }}/>
      </Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})