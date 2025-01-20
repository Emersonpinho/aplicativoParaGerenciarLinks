import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "@/app/styles/colors"
import { style } from "../index/style"

export default function add(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>
        </View>
    )
}