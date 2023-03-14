import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const MyDevice = () => {
    return (
        <SafeAreaView style={styles.parent}>
            <Text style={styles.text}>MyDevice</Text>
            <Text style={styles.text}>Work in progress....</Text>
            <Text style={styles.text}>Thank You</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        color:"#033EAE",
        fontSize: 30,
    }
})

export default MyDevice;