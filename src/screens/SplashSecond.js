import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from '../utils/CustomButton'

const SplashSecond = ({ navigation }) => {
    const hello = () => {
        Alert.alert("hello");
        // navigation.navigate("splash");
    }

    return (
        <SafeAreaView style={splashsecond.parent}>
            <View style={splashsecond.head}>
                <Image style={splashsecond.image} source={require("../assets/images/Logo_page.png")} />
            </View>
            <ImageBackground
                source={require('../assets/images/Rectanglesp4.png')}
                style={splashsecond.body}
                resizeMode="stretch"
            >
                {/* <Image
                    style={splashsecond.bgimage}
                    source={require('../assets/images/Rectanglesp4.png')}
                /> */}
                <Text style={{ textAlign: "center", fontSize: 17, marginTop: 50, color: "#fff" }}>Lock  packages to your door</Text>
                <Text style={{ textAlign: "center", fontSize: 22, color: "#fff" }}>Seamlessly</Text>

                {/* //bottom part */}
                <View style={splashsecond.bottom}>
                    <CustomButton btnText="Create an Account" onPressFunc={hello} />
                    <TouchableOpacity onPress={()=> navigation.navigate('signin')}>
                        <Text style={{ textAlign: "center", fontSize: 14, marginTop: 10, color: "#fff" }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const splashsecond = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: "center",
    },
    head: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: '100%',
    },
    image: {
        width: 250,
        height: 50,
    },
    body: {
        flex: 6,
        position: "relative",
        alignItems: "center",
    },
    bottom:{
        position: "absolute",
        bottom: 50,
    }
})

export default SplashSecond
