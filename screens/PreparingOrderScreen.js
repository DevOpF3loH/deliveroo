import React, { useEffect } from "react";
import SafeViewAndroid from "../components/SafeViewAndroid";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation, useRoute } from "@react-navigation/native";

export const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() =>{
            navigation.navigate("Delivery")
        }, 6000)
    }, [])

  return (
    <View className="flex-1 bg-[#00CCBB] justify-center items-center h-full">
      <Animatable.Image
        source={require("../assets/deliveroo.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </View>
  );
};
