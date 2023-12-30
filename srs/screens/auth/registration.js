import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Pressable,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import HorizontalSeparator from "../common/components/HorizontalSeparator";
  import colors from "../res/colors";
  import SelectDropdown from "react-native-select-dropdown";
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  import { RootStackScreenProps } from "../common/types";
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const Registration = () => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <View style={styles.login_container}>
        <Text style={styles.register}>Register</Text>
        <HorizontalSeparator />
        <Text style={styles.phone}>Phone Number</Text>
        <Image
          style={{ marginBottom: -2 }}
          source={require("../../assets/images/upperArrow.png")}
        />
        <HorizontalSeparator />

        <View style={styles.secondary_container}>
          <Text style={styles.what_is_your_phone}>
            What is your phone number?
          </Text>

          <View
            style={{ paddingVertical: 30, flexDirection: "row", width: "100%" }}
          >
            <SelectDropdown
              defaultButtonText=" "
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownStyle={{
                backgroundColor: colors["yellow.200"],
                borderRadius: 8,
                borderWidth: 2,
                borderColor: colors["brown.900"],
                minWidth: 150,
              }}
              data={countries}
              buttonStyle={{
                padding: 10,
                marginHorizontal: 10,
                width: 100,
                borderRadius: 20,
                backgroundColor: colors["brown.200"],
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
            />

            <TextInput
              style={{
                backgroundColor: colors["brown.200"],
                fontSize: 20,
                height: 50,
                lineHeight: 50,
                flex: 1,
                borderRadius: 15,
                padding: 10,
                marginHorizontal: 10,
                fontFamily: "Unbounded",
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Otp")}
            style={{
              backgroundColor: colors["yellow.500"],
              borderRadius: 20,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                padding: 10,
                color: colors["brown.900"],
                fontFamily: "Unbounded",
              }}
            >
              SEND CONFIRMATION CODE
            </Text>
          </TouchableOpacity>

          {/* <Link href={{ pathname: "Otp" }} asChild>
            <Pressable>
              <PrimaryButton title=" SEND CONFIRMATION CODE" />
            </Pressable>
          </Link> */}

          <Text style={styles.singing}>
            By signing up you agree with Bhairavan
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Text style={styles.terms}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.of}> of </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <Text style={styles.terms}>Privacy policy</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.already}>Already have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  ...styles.terms,
                  fontSize: 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: colors["yellow.200"],
      flex: 1,
      alignItems: "center",
    },
    logo: {
      marginTop: 40,
      marginBottom: 20,
    },
    login_container: {
      flex: 1,
      backgroundColor: colors["brown.900"],
      width: "100%",
      borderTopRightRadius: 60,
      borderTopLeftRadius: 60,
  
      alignItems: "center",
    },
    register: {
      paddingTop: 20,
      paddingBottom: 10,
      fontWeight: "600",
      fontSize: 32,
      color: colors["yellow.200"],
      fontFamily: "Unbounded",
    },
  
    phone: {
      fontSize: 20,
      fontWeight: "600",
      paddingTop: 20,
      paddingBottom: 10,
      color: colors["yellow.200"],
      fontFamily: "Unbounded",
    },
  
    secondary_container: {
      paddingVertical: 30,
      alignItems: "center",
    },
  
    what_is_your_phone: {
      fontSize: 15,
      fontWeight: "600",
      color: colors["yellow.200"],
      fontFamily: "Unbounded",
    },
    singing: {
      fontSize: 12,
      color: colors["yellow.200"],
      fontWeight: "300",
      paddingTop: 20,
      paddingBottom: 4,
      fontFamily: "Unbounded",
      justifyContent: "center",
    },
    already: {
      fontSize: 13,
      color: colors["yellow.200"],
      fontWeight: "500",
      fontFamily: "Unbounded",
      justifyContent: "center",
    },
    terms: {
      fontSize: 10,
      fontWeight: "700",
      color: colors["yellow.500"],
      fontFamily: "Unbounded",
      justifyContent: "center",
    },
    of: {
      fontSize: 10,
      fontWeight: "400",
      color: colors["yellow.200"],
      fontFamily: "Unbounded",
      justifyContent: "center",
    },
  });

export default Registration