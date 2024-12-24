import { MaterialIcons } from "@expo/vector-icons";

type Category = {
    id: string
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
}


export const categories: Category[] = [
    { id: "1", name: "curso", icon: "code" },
]