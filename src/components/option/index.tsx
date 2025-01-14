import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"
import { colors } from "@/app/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"

type props = TouchableOpacityProps & {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
    variant?: "primary" | "secondary"
}