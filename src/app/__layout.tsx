import { Stack } from "expo-router";

import { colors } from "@/app/styles/colors";

export default function Layout() {
    return (
      <Stack 
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.gray[950]}
          }}
        />
     )
}