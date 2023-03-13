import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import CustomButton from '../../utils/CustomButton'

const Register = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* // head */}
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={{ alignItems: "center", width: 20, height: 20 }} source={require('../../assets/icons/nav.png')} />
            </TouchableOpacity>
          </View>

          {/* // head Image */}
          <View style={{ alignItems: "center" }}>
            <Image style={styles.headImage} source={require('../../assets/images/Logo_page.png')} />
          </View>

          {/* // head text */}
          <Text style={{ textAlign: "center", fontSize: 24, letterSpacing: 1, color: "#3A3D3E", marginBottom: 30 }}>
            Create Account
          </Text>

          {/* // input sections */}
          <View style={styles.inputGrp}>

            {/* // first name */}
            <Text style={styles.labels}>First Name</Text>
            <TextInput
              style={styles.inputBox}

            />

            {/* // last name */}
            <Text style={styles.labels}>Last Name</Text>
            <TextInput
              style={styles.inputBox}

            />

            {/* // Email */}
            <Text style={styles.labels}>Email</Text>
            <TextInput
              style={styles.inputBox}

            />

            {/* // password */}
            <Text style={styles.labels}>Password</Text>
            <TextInput
              style={styles.inputBox}
              secureTextEntry={true}
            />

            {/* // confirm password */}
            <Text style={styles.labels}>Confirm Password</Text>
            <TextInput
              style={styles.inputBox}
              secureTextEntry={true}
            />
          </View>
          <View style={{marginTop: 20}}>
            <CustomButton btnText={"Create Account"} />
          </View>

          {/* // signin */}
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center", marginTop: 30 }}>
            <Text>Don't Have an Account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("signin")}>
              <Text style={{ color: "#2d75ff" }}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  parent: {
    // flex: 1,
    justifyContent: "center",
  },
  headImage: {
    width: 250,
    height: 50,
    marginBottom: 50,
  },
  inputGrp: {
    marginHorizontal: 28,
    alignSelf: "stretch"
  },
  labels: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 2,
    marginBottom: 10,
    color: "#3A3D3E",
  },
  inputBox: {
    paddingLeft: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2D75FF',
  },
})

export default Register
