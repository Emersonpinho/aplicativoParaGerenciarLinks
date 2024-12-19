import { View, Image } from "react-native";

import { style } from "./style";

export default function Index(){
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={require("@/assets/logo.png")} />
            </View>
        </View>  
    )
}

