import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {

  useEffect(() => {

    setTimeout(()=>{
      navigation.navigate("splashscnd")
    }, 3000)

  }, [])

  return (
    <SafeAreaView style={splash.parent}>
      <Image source={require('../assets/images/Logo.png')} />
    </SafeAreaView>
  )
}


const splash = StyleSheet.create({
  parent: {
    backgroundColor: "#2D75FF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {

  }
})

export default Splash
