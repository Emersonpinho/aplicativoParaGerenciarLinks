import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"
import { colors } from "@/app/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"

type props = TouchableOpacityProps & {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
    variant?: "primary" | "secondary"
}

export function Option({ name, icon, variant = "primary", ...rest }: props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <MaterialIcons 
            name={icon} 
            size={20} 
            color={variant === "primary" ? colors.green[300] : colors.gray[400]} 
            />

            <Text style={variant === "primary" ? styles.primaryTitle : styles.secondaryTitle    
            }>
            {name}
            </Text>
        </TouchableOpacity>
    )
}
