import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={require("../assets/profil.png")} />
      </View>
      <KeyboardAvoidingView>
        <View style={styles.viewLogo}>
          <Text style={styles.textLogo}>Login to Your Account</Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={styles.viewForm}>
            <MaterialIcons
              style={styles.matIcon}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
              placeholderTextColor="gray"
              placeholder="Enter Your Email"
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={styles.viewForm}>
            <AntDesign
              style={styles.matIcon}
              name="lock"
              size={24}
              color="gray"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
              placeholderTextColor="gray"
              placeholder="Enter Your Password"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ fontWeight: "500", color: "#007fff" }}>
            Forgot Password
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  viewLogo: {
    alignItems: "center",
    justifyContent: "center",
  },
  textLogo: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 25,
  },
  viewForm: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 5,
  },
  matIcon: {
    marginLeft: 8,
  },
  textInput: {
    color: "gray",
    marginVertical: 10,
    width: 300,
  },
});

export default LoginScreen;
