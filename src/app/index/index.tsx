import { View, Image, TouchableOpacity, FlatList, Modal, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./style";
import { colors } from "@/app/styles/colors";

import { Link } from "@/components/link";
import { Option } from "@/components/option";
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

         <Modal transparent visible={false}>
            <View style={style.modal}>
                <View style={style.modalContent}>
                    <View style={style.modalHeader}>
                        <Text style={style.modalCategory}>Curso</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                        </TouchableOpacity>
                    </View>

                    <Text style={style.modalLinkName}>Rocketseat
                    </Text>

                    <Text style={style.modalUrl}>https://www.rocketseat.com.br/
                    </Text>
                    <View style={style.modalFooter}>
                        <Option name="Excluir" icon="delete" variant="secondary" />
                        <Option name="Abrir" icon="language" />
                    </View>
                </View>
            </View>
         </Modal>
        </View>  
    )
}

