import { Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/app/styles/colors";
import { styles } from "./style";

type props = {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap
  onPress?: () => void;
}

export function Category({name, icon, onPress}: props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}