import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { RestaurantCard } from './RestaurantCard';

export const FeaturedRow = ({id, title, description, featuredCategory}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <Icons.ArrowRightIcon color="#00CCBB"/>
        </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView horizontal contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        >

            {/*Restaurant Cards*/}
            <RestaurantCard 
            id={1}
            imgUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Healthy Eating"
            rating={4.8}
            genre="Japanese"
            address="123 Main St"
            short_description="High vibe food!!"
            dishes={[]}
            lng={20}
            lat={40}
            />
            <RestaurantCard 
            id={2}
            imgUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Healthy Eating"
            rating={4.8}
            genre="Japanese"
            address="123 Main St"
            short_description="High vibe food!!"
            dishes={[]}
            lng={20}
            lat={40}
            />
            <RestaurantCard 
            id={3}
            imgUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Healthy Eating"
            rating={4.8}
            genre="Japanese"
            address="123 Main St"
            short_description="High vibe food!!"
            dishes={[]}
            lng={20}
            lat={40}
            />
            <RestaurantCard 
            id={4}
            imgUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Healthy Eating"
            rating={4.8}
            genre="Japanese"
            address="123 Main St"
            short_description="High vibe food!!"
            dishes={[]}
            lng={20}
            lat={40}
            />
        </ScrollView>
        </View>
  )
}
