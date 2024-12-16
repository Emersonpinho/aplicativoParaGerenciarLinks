import { Text, View, StyleSheet } from "react-native"

export default function Index(){
    return (
        <view>
            <Text style={style.title}>Hello react native!</Text>
        </view>  
    )
}

const style = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 22,
    }
})