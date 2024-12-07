import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    taskName:{
        color: '#fdfcfe',
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },
    input:{
        flex: 1,
        backgroundColor: '#1f1e24',
        height: 56,
        borderRadius: 5,
        paddingHorizontal: 15,
        color: '#fdfcfe',
        fontSize: 16
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText:{
        color: '#fdfcfe',
        fontSize: 24,
        textAlign: "center"
    },
    form:{
        width: '100%',
        flexDirection: "row",
        gap: 12,
        marginTop: 36,
        marginBottom: 42
    },
    listEmptyText: {
        color: '#fff',
        fontSize: 14,
        textAlign: "center"
    },
    tabButtonsContainer: {
        width: '100%',
        flexDirection: "row",
        gap: 5,
        marginBottom: 10,
    },
    activeTabButton: {
        flex: 1,
        width: '100%',
        height: 56,
        backgroundColor: '#31cf67',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,

    },
    completedTabButton:{
        flex: 1,
        width: '100%',
        height: 56,
        backgroundColor: '#e23c44',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
})