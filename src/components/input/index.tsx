import { TextInput, TextInputProps } from "react-native"

import { styles } from "./styles"
import { colors } from "@/app/styles/colors"

export function input({ ...rest}: TextInputProps){
    return (
        <TextInput 
        style={styles.container} 
        placeholderTextColor={colors.gray[400]} 
        {...rest} />
    )
}