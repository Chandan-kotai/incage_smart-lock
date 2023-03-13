import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const TrackOrder = () => {
    return (
        <SafeAreaView style={styles.parent}>
            <Text style={styles.text}>TrackOrder</Text>
            <Text style={styles.text}>Work in progress....</Text>
            <Text style={styles.text}>Thank You</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        fontSize: 26,
        color: "#2D75FF"
    }
})

export default TrackOrder;