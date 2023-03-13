import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import CustomButton from '../../utils/CustomButton'


const ConnectToWifi = ({navigation}) => {
    const connectWifi = ()=>{

    }

    return (
        <SafeAreaView style={styles.parent}>
            <View style={styles.headWrap}>
                <Image resizeMode='cover' style={{}} source={require("../../assets/images/headimage.jpg")} />
                <View style={styles.iconsWrap}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Image style={{ width: 20, height: 20, marginLeft: 15, marginTop: 5 }} source={require("../../assets/icons/navw.png")} />
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=> Alert.alert("Menu Bar")}>
                        <Image style={{ width: 20, height: 20, marginRight: 15, marginTop: 5 }} source={require("../../assets/icons/menu.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bodyWrap}>
                <View style={{marginTop: 100, marginBottom: 50}}>
                    <Image style={{}} source={require("../../assets/icons/connect.png")}/>
                </View>
                <CustomButton btnText={"Tap to Connect"} onPressFunc={connectWifi}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: "center",
    },
    headWrap: {
        position: "relative",
        width: "100%",
    },
    iconsWrap: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "100%",
        position: 'absolute',
        top: 0,
    },
    bodyWrap:{
        alignItems:'center',
    }
})

export default ConnectToWifi
