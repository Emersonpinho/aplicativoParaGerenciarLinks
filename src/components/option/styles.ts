import { StyleSheet } from "react-native"
import { colors } from "@/app/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    primaryTitle: {
        color: colors.green[300],
        fontSize: 16,
        fontWeight: "600",
    },
    secondaryTitle: {
        color: colors.green[300],
        fontSize: 16,
    },
    
})