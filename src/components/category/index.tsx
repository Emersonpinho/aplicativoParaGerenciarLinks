import { Text, Pressable, PressableProps} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/app/styles/colors";
import { styles } from "./style";

type props = PressableProps & {
  name: string
  isSelect: boolean
  icon: keyof typeof MaterialIcons.glyphMap
}

export function Category({name, icon, isSelect,...rest}: props) {
  const color = isSelect ? colors.green[300] : colors.gray[400]

  return (
    <Pressable style={styles.container} {...rest}>

      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{name}</Text>
      
    </Pressable>
  );
}