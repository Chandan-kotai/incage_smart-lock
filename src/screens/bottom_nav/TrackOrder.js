import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const TrackOrder = ({ setTrackOrder }) => {

    return (
        <SafeAreaView style={styles.parent}>
            <View style={styles.headWrap}>
                <TouchableOpacity onPress={() => setTrackOrder(false)}>
                    <Image style={{ width: 20, height: 20 }} source={require("../../assets/icons/nav.png")} />
                </TouchableOpacity>
                <Text style={{ color: "#000" }}>Track Order</Text>
            </View>

            {/* // Product */}
            <View style={styles.product}>

                {/* // product Image */}
                <TouchableOpacity >
                    <Image style={{ width: 97, height: 113 }} source={require("../../assets/dummy/img1.png")} />
                </TouchableOpacity>

                {/* // product Info */}
                <View style={styles.productInfo}>
                    <Text style={{ fontSize: 16, color: "#000", width: 200 }} numberOfLines={2}>Women Kurta and Pant Set</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#1A0F97", fontSize: 13 }}>Color : </Text>
                        <Text style={{ fontSize: 13 }}>{"Green"}</Text>
                        <Text style={{ marginLeft: 10, color: "#1A0F97", fontSize: 13 }}>Size : </Text>
                        <Text style={{ fontSize: 13 }}>{"S"}</Text>
                    </View>
                    <Text style={{ fontSize: 13 }}>Seller : {"DSKSTUDIO"}</Text>
                    <Text style={{ fontSize: 15, color: "#000" }}>₹ {399}</Text>
                    <Text style={{ fontSize: 13, color: "#000" }}>Rate This Product</Text>
                    <Image style={{ width: 80, height: 20 }} source={require("../../assets/dummy/rating.png")} />
                </View>
            </View>

            {/* // Divider */}
            <View style={styles.separator}></View>

            {/* // Order Status */}
            <View style={styles.orderWrap}>

                {/* // order Placed */}
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <View style={styles.trackImageBg}>
                        <Image style={styles.trackImage} source={require("../../assets/icons/shoppingcart.png")} />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.status}>Order Placed</Text>
                        <Text style={styles.dates}> {"Wed, 8th Feb 23"}</Text>
                    </View>
                </View>

                {/* // connecter */}
                <View style={styles.connector}></View>

                {/* // order dispatched */}
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <View style={styles.trackImageBg}>
                        <Image style={styles.trackImage} source={require("../../assets/icons/store.png")} />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.status}>Order Dispatched</Text>
                        <Text style={styles.dates}> {"Fri, 10th Feb 23"}</Text>
                    </View>
                </View>

                {/* // connecter */}
                <View style={styles.connector}></View>

                {/* // order dispatched */}
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <View style={styles.trackImageBg}>
                        <Image style={styles.trackImage} source={require("../../assets/icons/delivery.png")} />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.status}>Order in transit</Text>
                        <Text style={styles.dates}> {"sun, 12th Feb 23"}</Text>
                    </View>
                </View>

                {/* // connecter */}
                <View style={styles.connectorDeactive}></View>

                {/* // order dispatched */}
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <View style={styles.trackImageBgDeactive}>
                        <Image style={styles.trackImage} source={require("../../assets/icons/checkdeactive.png")} />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.statusDeactive}>Delivery Pending</Text>
                        <Text style={styles.dates}> Exp : {"Mon, 13th Feb 23"}</Text>
                    </View>
                </View>

            </View>

            {/* // Divider */}
            <View style={styles.separator}></View>

            {/* // Recomendation */}
            <Text style={{ textAlign: "center", color: "#000", marginTop: 20 }}>Customers who bought this item also bought</Text>

            <View style={styles.product}>
                {/* // product Image */}
                <View style={{ position: "relative" }}>
                    <TouchableOpacity >
                        <Image style={{ width: 97, height: 113 }} source={require("../../assets/dummy/img2.png")} />
                    </TouchableOpacity>
                    <View style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        backgroundColor: "#fff",
                        padding: 3,
                        borderRadius: 50,
                        marginTop: 5,
                        marginRight: 5,
                    }}>
                        <TouchableOpacity>
                            <Image style={{ width: 12, height: 12 }} source={require("../../assets/icons/heartdeactive.png")} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* // product Info */}
                <View style={styles.productInfo}>
                    <Text style={{ fontSize: 16, color: "#000", width: 200, }} numberOfLines={2}>
                        Flyknit Lace-Up Sneakers
                        For Men (Grey)
                    </Text>
                    <Text style={{ fontSize: 13, color: "#078339" }}>Special Price</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 7 }}>
                        <Text style={{ color: "#000", fontSize: 15 }}>₹ {689}</Text>
                        <Text style={{ fontSize: 13, textDecorationLine: "line-through", marginHorizontal: 10 }}>{1500}</Text>
                        <Text style={{ color: "#078339", fontSize: 13 }}>{"79"}% OFF</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Buy Now")}>
                        <Text style={{ fontSize: 12 }}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

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
    orderWrap: {
        marginTop: 20,
        marginBottom: 20,
    },
    trackImage: {
        width: 16,
        height: 16
    },
    trackImageBg: {
        backgroundColor: "#2D75FF",
        padding: 8,
        borderRadius: 50,
        marginLeft: 20,
        marginTop: 5,
    },
    trackImageBgDeactive: {
        backgroundColor: "#C6C6C6",
        padding: 8,
        borderRadius: 50,
        marginLeft: 20,
        marginTop: 5,
    },
    connector: {
        width: 5,
        height: 42,
        backgroundColor: '#2D75FF',
        marginLeft: 33,
        marginBottom: "-2%",
    },
    connectorDeactive: {
        width: 5,
        height: 42,
        backgroundColor: "#C6C6C6",
        marginLeft: 33,
        marginBottom: "-2%",
    },
    status: {
        fontSize: 14,
        color: "#2D75FF"
    },
    statusDeactive: {
        fontSize: 14,
    },
    dates: {
        fontSize: 8,
        color: "#000"
    },
    button: {
        backgroundColor: "#FFA41C",
        borderColor: "#033EAE",
        borderWidth: 1,
        width: 80,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 4,
    }
})

export default TrackOrder;