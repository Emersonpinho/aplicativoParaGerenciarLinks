import { View, Image } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./style";
import { colors } from "@/app/styles/colors";

export default function Index(){
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={require("@/assets/logo.png")} style={style.logo} />


                <MaterialIcons name="add" size={32} color={colors.green[300]} />
            </View>
        </View>  
    )
}

