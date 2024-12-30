import { Modal, StyleSheet} from "react-native"

import { colors } from "@/app/styles/colors";
import { Header } from "react-native/Libraries/NewAppScreen";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    title: {
        color: colors.green[900],
        fontSize: 22,
    },
    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    logo: {
        height: 33,
        width: 40
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
    linksContent:{
        gap: 20,
        padding: 24,
        paddingBottom: 100,
    },
    modal: {},
    modalContent: {},
    modalHeader: {},
    modalCategory: {},
    modalLinkName: {},
    modalUrl: {},    
})