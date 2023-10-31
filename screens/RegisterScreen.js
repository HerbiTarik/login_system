import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={require("../assets/profil.png")} />
      </View>
      <KeyboardAvoidingView>
        <View style={styles.viewLogo}>
          <Text style={styles.textLogo}>Register to Your Account</Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={styles.viewForm}>
            <Ionicons
              style={styles.matIcon}
              name="person"
              size={24}
              color="gray"
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={[styles.textInput, { fontSize: email ? 16 : 16 }]}
              placeholderTextColor="gray"
              placeholder="Enter Your Name"
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
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
              style={[styles.textInput, { fontSize: email ? 16 : 16 }]}
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
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={[styles.textInput, { fontSize: password ? 16 : 16 }]}
              placeholderTextColor="gray"
              placeholder="Enter Your Password"
            />
          </View>
        </View>

        <View style={{ marginTop: 45 }}>
          <Pressable
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 15,
              marginTop: 40,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Register
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 10 }}
          >
            <Text style={{ textAlign: "center", fontSize: 16 }}>
              Already have an account? Sign in
            </Text>
          </Pressable>
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

export default RegisterScreen;
