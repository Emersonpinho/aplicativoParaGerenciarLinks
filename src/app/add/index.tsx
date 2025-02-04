import { useState } from "react"
import { View, Text, TouchableOpacity, Alert } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/app/styles/colors"
import { style } from "../index/style"
import { LinkStorage } from "@/storage/link-storage"

import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Add() {

    const [category, setcategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    
    async function handleAdd(){
        try{
        if(!category){
            return Alert.alert("Categoria", "Selecione uma categoria!!")
        }

        if(!name.trim()){
            return Alert.alert("Nome", "informe um Nome!!")
        }

        if(!url.trim()){
            return Alert.alert("URL", "Informe uma URL!!")
        }

        await LinkStorage.save({
            name,
            url,
            category,
        })

        // const data = await LinkStorage.get()
        // console.log(data)
    } catch (error){
        Alert.alert("Erro", "Não foi possível salvar o link!!")
        console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>

            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories onchange={setcategory} selected={category} />

            <View style={styles.form}>
                <Input  placeholder="Nome" onChangeText={setName} autoCorrect={false} />
                <Input  placeholder="URL" onChangeText={setUrl} autoCorrect={false}/>
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>
        </View>
    )
}