import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import * as IconsO from "react-native-heroicons/outline";
import * as IconsS from "react-native-heroicons/solid";

export const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  lng,
  lat,
}) => {
  return (
    <TouchableOpacity className="mr-3 shadow bg-white">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-64 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <IconsS.StarIcon color="gray" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <IconsO.MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
