import { FlatList } from 'react-native';

import { styles } from "./style";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

export function Categories() {
    return (
    <FlatList 
    data={categories}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
    <Category name={item.name} icon={item.icon} isSelect={false} /> 
    )}
    horizontal
    style={styles.container}
    contentContainerStyle={styles.content}
    showsHorizontalScrollIndicator={false}
  />
)  
}