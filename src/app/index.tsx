import { Text, View, StyleSheet } from "react-native"

import { colors } from "../app/styles/colors"

export default function Index(){
    return (
        <view style={style.container}>
            <Text style={style.title}>Hello</Text>
            <Text style={style.title}>react native!</Text>
        </view>  
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: colors.green[900],
        fontSize: 22,
    }
})