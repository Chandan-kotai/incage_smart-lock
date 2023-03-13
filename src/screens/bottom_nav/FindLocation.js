import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../utils/CustomButton'
import LockUnlock from './LockUnlock';


const FindLocation = () => {
    const [isFind, setIsFind] = useState(true);
    const [isLocked, setIsLocked] = useState(true)

    const findAndLocate = () => {
        setTimeout(() => {
            setIsFind(false)
        }, 3000)
    }

    useEffect(()=>{
        if(isFind === false){
            setTimeout(()=>{
                setIsLocked(false)
            }, 2000)
        }
    }, [isFind, isLocked])

    return (
        <>
            {isLocked ?
                <View style={styles.bodyWrap}>
                    <View style={{ marginTop: 100 }}>
                        <Image
                            style={{}}
                            source={isFind ?
                                require("../../assets/icons/locate.png")
                                :
                                require("../../assets/icons/located.png")
                            }
                        />
                    </View>
                    {isFind ?
                        <View style={{ marginTop: 40 }}>
                            <CustomButton btnText={"Locate my Incage"} onPressFunc={findAndLocate} />
                        </View>
                        :
                        <Text style={{ marginTop: 20, color: "#2D75FF", fontSize: 18 }}>
                            {isFind ?
                                "Locating..."
                                :
                                "incage™ located successfully"
                            }
                        </Text>
                    }
                </View>
                :
                <LockUnlock />
            }
        </>
    )
}

const styles = StyleSheet.create({
    bodyWrap: {
        alignItems: 'center',
    }
})

export default FindLocation;