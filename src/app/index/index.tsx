import { Text, View } from "react-native";

import { style } from "./style";

export default function Index(){
    return (
        <View style={style.container}>
            <Text style={style.title}>Hello</Text>
            <Text style={style.title}>react native!</Text>
        </View>  
    )
}

