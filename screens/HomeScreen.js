import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import * as Icons from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import { FeaturedRow } from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View className="pt-5 bg-slate-50">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-row justify-between w-11/12">
            <View>
              <Text className="font-bold text-gray-400 text-xs">
                Deliver Now!
              </Text>
              <View className="flex-row items-center space-x-1">
                <Text className="font-bold text-xl">Current Location!</Text>
                <Icons.ChevronDownIcon size={25} color="#00CCBB" />
              </View>
            </View>
            <View>
              <Icons.UserIcon size={35} color="#00CCBB" />
            </View>
          </View>
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <Icons.MagnifyingGlassIcon color="gray" size={25} />
            <TextInput
              placeholder="Resturants and cuisines"
              keyboardType="default"
            />
          </View>
          <Icons.AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView>
          {/* Categories */}
          <Categories />

          {/* Featured Rows */}
          <FeaturedRow
            title="Featured"
            description="Paid placements from our partners"
            featuredCategory="Featured"
          />

          {/* Tasty Discounts */}
          <FeaturedRow
            title="Tasty Discounts"
            description="Everyone's been enjoying these juicy discounts!"
            featuredCategory="Featured"
          />

          {/* Offers near you */}
          <FeaturedRow
            title="Offers near you!"
            description="Why not support your local restaurant tonight"
            featuredCategory="Featured"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
