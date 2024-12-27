import { StyleSheet } from "react-native"
import { colors } from "@/app/styles/colors"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    color: colors.gray[100],
    fontSize: 16,
    fontWeight: "600",
  },
  url: {
    color: colors.gray[400],
    fontSize: 14,
  },
})