import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Booking</Link>
    </View>
  );
};

export default HomeScreen;
