import { Text, View, StyleSheet } from "react-native"

import { style } from "./style";

export default function Index(){
    return (
        <view style={style.container}>
            <Text style={style.title}>Hello</Text>
            <Text style={style.title}>react native!</Text>
        </view>  
    )
}

