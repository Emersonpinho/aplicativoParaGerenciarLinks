import { View, Image, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./style";
import { colors } from "@/app/styles/colors";

import { Link } from "@/components/link";
import { Categories } from "@/components/categories";
import { styles } from "@/components/categories/style";

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


            <FlatList
                data={["1", "2", "3", "4", "5"]}
                keyExtractor={item => item}
                renderItem={() => (
                <Link
                    name="Rocketseat" url="https://www.rocketseat.com.br/" onDetails={() => console.log("clicou!")} 
                />
            )}
            style={style.links}
            contentContainerStyle={style.linksContent}
            showsVerticalScrollIndicator={false}
         />
        </View>  
    )
}

