import { colors } from "@/app/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.gray[400],
    }
});