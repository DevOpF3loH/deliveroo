import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 1"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 2"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 3"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 4"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 5"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 6"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 7"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 8"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 9"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 10"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 11"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Testing 12"/>
    </ScrollView>
  );
};

export default Categories;
