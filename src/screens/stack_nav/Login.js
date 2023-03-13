import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../utils/CustomButton'

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  // console.log(showPassword)

  const login = () => {
    navigation.navigate("tabnav");
  }

  return (
    <SafeAreaView style={styles.parent}>
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
          <Text style={{ textAlign: "center", fontSize: 20, letterSpacing: 1, color: "#3A3D3E", marginBottom: 30 }}>Sign in to continue</Text>

          {/* // input sections */}
          <View style={styles.inputGrp}>
            <Text style={styles.labels}>Email</Text>
            <View style={[styles.inputBoxWrap, { height: 40, marginBottom: 30 }]}>
              <TextInput
                style={styles.inputBox}

              />
            </View>

            <Text style={styles.labels}>Password</Text>
            <View style={[styles.inputBoxWrap, { position: "relative" }]}>

              {/* <TouchableOpacity style={styles.eye} onPress={() => Alert.alert("hello")}> */}
              <TouchableOpacity style={styles.eye} onPress={() => setShowPassword(!showPassword)}>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={showPassword ? require("../../assets/icons/view.png") : require("../../assets/icons/hide.png")} 
                />
              </TouchableOpacity>

              <TextInput
                style={styles.inputBox}
                secureTextEntry={showPassword ? false : true}
              />
            </View>
          </View>

          {/* // buttons */}
          <View style={{ marginTop: 30 }}>
            <CustomButton btnText={"Login here"} onPressFunc={login} />

            {/* // forget password */}
            <TouchableOpacity>
              <Text style={{ textAlign: "center", marginTop: 10 }}>Forget Password ?</Text>
            </TouchableOpacity>
          </View>

          {/* // divider */}
          <View style={styles.sepWrap}>
            <View style={styles.separator}></View>
            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>or</Text>
            <View style={styles.separator}></View>
          </View>

          {/* // social media login */}
          <View>
            <Text style={{ textAlign: "center", marginTop: 15 }}>Social media Login</Text>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center", marginTop: 30 }}>
              <TouchableOpacity>
                <Image style={{ width: 28, height: 28, marginRight: 10 }} source={require("../../assets/icons/google.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{ width: 28, height: 28, marginLeft: 10 }} source={require("../../assets/icons/apple.png")} />
              </TouchableOpacity>
            </View>
          </View>

          {/* // signup */}
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center", marginTop: 30 }}>
            <Text>Don't Have an Account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("register")}>
              <Text style={{ color: "#2d75ff" }}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
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
  inputBoxWrap: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2D75FF',
  },
  inputBox: {
    paddingLeft: 10,
    marginRight: 45,
    paddingVertical: 5,
  },
  eye: {
    position: "absolute",
    top: 2,
    right: 10,
    padding: 5,
  },
  sepWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  separator: {
    flex: 1,
    height: 1,
    marginHorizontal: 20,
    backgroundColor: 'black',
  },
})


export default Login
