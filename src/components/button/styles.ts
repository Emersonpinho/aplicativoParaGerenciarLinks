import { StyleSheet } from "react-native"
import { colors } from "@/app/styles/colors"

export const styles = StyleSheet.create({
    container: {
        height: 52,
        width: "100%",
        backgroundColor: colors.gray[300],
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    title : {
        color: colors.green[900],
        fontSize: 16,
        fontWeight: "600",
    },
})