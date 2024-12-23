import { Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/app/styles/colors";
import { styles } from "./style";

type props = {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap
}

export function Category(props: props) {
  return (
    <Pressable style={styles.container}>
      <MaterialIcons name={props.icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
}