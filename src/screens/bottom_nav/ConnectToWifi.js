import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomButton from '../../utils/CustomButton'
import FindLocation from './FindLocation';


const ConnectToWifi = ({ navigation }) => {
    const [isConnect, setIsConnect] = useState(true);
    const [isLocation, setIsLocation] = useState(true);

    const connectWifi = () => {
        setIsConnect(false)
        setTimeout(() => {
            setIsConnect(null);

        }, 3000)
    }

    useEffect(() => {
        setTimeout(() => {
            if (isConnect === null) setIsConnect("findloc")
        }, 1000);

        if (isConnect === "findloc") {
            setIsLocation(false)
        }

    }, [isConnect, isLocation])

    return (
        <SafeAreaView style={styles.parent}>
            <View style={styles.headWrap}>
                <Image resizeMode='cover' style={{}} source={require("../../assets/images/headimage.jpg")} />

                <View style={styles.iconsWrap}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={{ width: 20, height: 20, marginLeft: 15, marginTop: 5 }} source={require("../../assets/icons/navw.png")} />
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.imageBg} onPress={() => Alert.alert("Menu Bar")}>
                        <Image style={styles.image} source={require("../../assets/icons/menu.png")} />
                    </TouchableOpacity>
                </View>
                {isConnect === "findloc" ?
                    <View style={styles.battery}>
                        <Image style={{ width: 20, height: 20 }} source={require("../../assets/icons/lighting.png")} />
                        <Text style={{ color: "#fff", marginLeft: 5 }}>{50}% battery level</Text>
                    </View>
                    : null
                }

            </View>

            {isConnect !== "findloc" ?
                <View style={styles.bodyWrap}>
                    <View style={{ marginTop: 100 }}>
                        <Image
                            style={{}}
                            source={isConnect ?
                                require("../../assets/icons/connect.png")
                                : isConnect === null ?
                                    require("../../assets/icons/connected.png")
                                    :
                                    require("../../assets/icons/connecting.png")
                            }
                        />
                    </View>
                    {isConnect ?
                        <View style={{ marginTop: 40 }}>
                            <CustomButton btnText={"Tap to Connect"} onPressFunc={connectWifi} />
                        </View>
                        :
                        <Text style={{ marginTop: 20, }}>
                            {isConnect === null ?
                                "Connected"
                                :
                                "Connecting..."
                            }
                        </Text>
                    }

                </View>
                : null
            }

            {isConnect === "findloc" && !isLocation ?
                <FindLocation />
                :
                null
            }
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
    image: {
        width: 16,
        height: 16,
    },
    imageBg: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        padding: 10,
        borderRadius: 50,
        marginRight: 15,
        marginTop: 5,
    },
    iconsWrap: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "100%",
        position: 'absolute',
        top: 0,
    },
    battery: {
        flexDirection: "row",
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    bodyWrap: {
        alignItems: 'center',
    }
})

export default ConnectToWifi
