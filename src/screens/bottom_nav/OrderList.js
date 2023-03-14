import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import TrackOrder from './TrackOrder';

const OrderList = ({navigation}) => {
    const [trackOrder, setTrackOrder] = useState(false);

    const trackOrderGo = () => {
        setTrackOrder(true)
    }

    return (
        <SafeAreaView style={styles.parent}>
            {!trackOrder ?
                <View>
                    <View style={styles.headWrap}>
                        <TouchableOpacity onPress={() => navigation.navigate("signin")}>
                            <Image style={{ width: 20, height: 20 }} source={require("../../assets/icons/nav.png")} />
                        </TouchableOpacity>
                        <Text style={{ color: "#000" }}>Order List</Text>
                    </View>

                    {/* // Product */}
                    <View>
                        <View style={styles.product}>
                            {/* // product Image */}
                            <TouchableOpacity onPress={() => trackOrderGo()}>
                                <Image style={{ width: 97, height: 113 }} source={require("../../assets/dummy/img1.png")} />
                            </TouchableOpacity>

                            {/* // product Info */}
                            <View style={styles.productInfo}>
                                <Text style={{ fontSize: 16, color: "#000", width: 200 }} numberOfLines={2}>Women Kurta and Pant Set</Text>
                                <Text style={{ fontSize: 11 }}>Order Placed : {"03:10 PM, 08 January,2023"}</Text>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "#1A0F97", fontSize: 13 }}>Color : </Text>
                                    <Text style={{ fontSize: 13 }}>{"Green"}</Text>
                                    <Text style={{ marginLeft: 10, color: "#1A0F97", fontSize: 13 }}>Size : </Text>
                                    <Text style={{ fontSize: 13 }}>{"S"}</Text>
                                </View>

                                <Text style={{ fontSize: 13 }}>Seller : {"DSKSTUDIO"}</Text>
                                <Text style={{ fontSize: 15, color: "#000" }}>₹ {399}</Text>

                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Buy Again")}>
                                        <Text style={{ fontSize: 12 }}>
                                            Buy Again
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.status}>{"Pending Delivery"}</Text>
                                </View>
                            </View>
                        </View>

                        {/* // Divider */}
                        <View style={styles.separator}></View>
                    </View>

                    <View>
                        <View style={styles.product}>
                            {/* // product Image */}
                            <TouchableOpacity onPress={() => trackOrderGo()}>
                                <Image style={{ width: 97, height: 113 }} source={require("../../assets/dummy/img2.png")} />
                            </TouchableOpacity>

                            {/* // product Info */}
                            <View style={styles.productInfo}>
                                <Text style={{ fontSize: 16, color: "#000", width: 200 }} numberOfLines={2}>Sneakers For Men (Multicolor)</Text>
                                <Text style={{ fontSize: 11 }}>Order Placed : {"03:10 PM, 08 January,2023"}</Text>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "#1A0F97", fontSize: 13 }}>Color : </Text>
                                    <Text style={{ fontSize: 13 }}>{"Green"}</Text>
                                    <Text style={{ marginLeft: 10, color: "#1A0F97", fontSize: 13 }}>Size : </Text>
                                    <Text style={{ fontSize: 13 }}>{"S"}</Text>
                                </View>

                                <Text style={{ fontSize: 13 }}>Seller : {"DSKSTUDIO"}</Text>
                                <Text style={{ fontSize: 15, color: "#000" }}>₹ {399}</Text>

                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Buy Again")}>
                                        <Text style={{ fontSize: 12 }}>
                                            Buy Again
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.statusDeliver}>{"Delivered incage™"}</Text>
                                </View>
                            </View>
                        </View>

                        {/* // Divider */}
                        <View style={styles.separator}></View>
                    </View>

                    <View>
                        <View style={styles.product}>
                            {/* // product Image */}
                            <TouchableOpacity onPress={() => trackOrderGo()}>
                                <Image style={{ width: 97, height: 113 }} source={require("../../assets/dummy/img3.png")} />
                            </TouchableOpacity>

                            {/* // product Info */}
                            <View style={styles.productInfo}>
                                <Text style={{ fontSize: 16, color: "#000", width: 200 }} numberOfLines={2}>305-Black Moon Stylish Girls Watch </Text>
                                <Text style={{ fontSize: 11 }}>Order Placed : {"03:10 PM, 08 January,2023"}</Text>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "#1A0F97", fontSize: 13 }}>Color : </Text>
                                    <Text style={{ fontSize: 13 }}>{"Green"}</Text>
                                    <Text style={{ marginLeft: 10, color: "#1A0F97", fontSize: 13 }}>Size : </Text>
                                    <Text style={{ fontSize: 13 }}>{"S"}</Text>
                                </View>

                                <Text style={{ fontSize: 13 }}>Seller : {"DSKSTUDIO"}</Text>
                                <Text style={{ fontSize: 15, color: "#000" }}>₹ {399}</Text>

                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Buy Again")}>
                                        <Text style={{ fontSize: 12 }}>
                                            Buy Again
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.statusDeliver}>{"Delivered incage™"}</Text>
                                </View>
                            </View>
                        </View>

                        {/* // Divider */}
                        <View style={styles.separator}></View>
                    </View>
                </View>
                :
                <TrackOrder setTrackOrder={setTrackOrder} />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
    headWrap: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 10
    },
    product: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        marginHorizontal: 20,
    },
    productInfo: {
        marginLeft: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#B8B5B5',
        marginTop: 20,
    },
    button: {
        // backgroundColor: "#FFA41C",
        borderColor: "#033EAE",
        borderWidth: 1,
        width: 80,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 3,
    },
    status: {
        fontSize: 12,
        color: "#FE4141",
        marginLeft: 10
    },
    statusDeliver: {
        fontSize: 12,
        color: "#079540",
        marginLeft: 10
    },
})

export default OrderList
