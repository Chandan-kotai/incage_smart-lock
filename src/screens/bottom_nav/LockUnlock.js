import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const LockUnlock = () => {
    const [isLock, setIsLock] = useState(true);

    const unlock = () => {
        setTimeout(() => {
            setIsLock(false)
        }, 2000)
    }

    return (
        <View style={styles.bodyWrap}>
            <View style={{ marginTop: 100 }}>
                <TouchableOpacity onPress={unlock}>
                    <Image
                        style={{width:300, height: 300}}
                        source={isLock ?
                            require("../../assets/icons/lock.png")
                            :
                            require("../../assets/icons/unlock.png")
                        }
                    />
                </TouchableOpacity>
            </View>
            <Text style={{ marginTop: 0, fontSize: 18 }}>
                {isLock ?
                    "Locked"
                    :
                    "Unlocked"
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bodyWrap: {
        alignItems: 'center',
    }
})

export default LockUnlock;