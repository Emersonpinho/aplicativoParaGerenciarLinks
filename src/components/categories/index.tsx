import { FlatList } from 'react-native'

import { styles } from "./style"
import { categories } from "@/utils/categories"
import { Category } from "@/components/category"

type Props = {
  selected: string
  onchange: (category: string) => void
}

export function Categories({selected, onchange }: Props){
    return (
    <FlatList 
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
      <Category 
        name={item.name} 
        icon={item.icon} 
        isSelect={item.name === selected} 
      /> 
    )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
  />
)  
}