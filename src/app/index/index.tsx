import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./style";
import { colors } from "@/app/styles/colors";

import { Link } from "@/components/link";
import { Categories } from "@/components/categories";

export default function Index(){
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={require("@/assets/logo.png")} style={style.logo} />

                <TouchableOpacity activeOpacity={0.3}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories />

            <Link name="Rocketseat" url="https://www.rocketseat.com.br/" onDetails={() => console.log("clicou!")} />
        </View>  
    )
}

