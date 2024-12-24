import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./style";
import { colors } from "@/app/styles/colors";
import { categories } from "@/utils/categories";

import { Category } from "@/components/category";

export default function Index(){
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={require("@/assets/logo.png")} style={style.logo} />

                <TouchableOpacity activeOpacity={0.3}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Category 
            name={categories[0].name} 
            icon={categories[0].icon} 
            isSelect 
            />
            <Category name="Site" icon="language" isSelect={false}/>
            <Category name="Vídio" icon="movie" isSelect={false}/>
        </View>  
    )
}

