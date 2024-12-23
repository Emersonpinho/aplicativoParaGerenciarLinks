import { Text, Pressable, PressableProps} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/app/styles/colors";
import { styles } from "./style";

type props = PressableProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap
}

export function Category({name, icon, ...rest}: props) {
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}