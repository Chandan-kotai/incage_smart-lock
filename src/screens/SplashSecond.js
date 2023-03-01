import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground } from 'react-native'
import React from 'react'

const SplashSecond = ({ naviagtion }) => {
    return (
        <SafeAreaView style={splashsecond.parent}>
            <View style={splashsecond.head}>
                <Image style={splashsecond.image} source={require("../assets/images/Logo_page.png")} />
            </View>
            {/* <View style={splashsecond.body}>
                <Image
                    style={splashsecond.bgimage}
                    source={require('../assets/images/Rectanglesp4.png')}
                />
            </View> */}
        </SafeAreaView>
    )
}

const splashsecond = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    head: {
        // height: "15%",
        // flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    image: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
    body: {
        // height: "85%",
        // flex: 6,
        // position: "relative",
        // justifyContent: "center",
        // alignItems: "center",
    },
    bgimage: {
        // flex: 1,
        // justifyContent: "center",
        // width: "428",
        // height: "926",
    },
})

export default SplashSecond
