import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        gap: 4
    },
    name:{
        flex: 1,
        fontSize: 16,
        color: '#fff',
        marginLeft: 16,
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText:{
        color: '#fdfcfe',
        fontSize: 24
    },
    confirmButton:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: "center",
        justifyContent: "center"
    },
    confirmButtonText:{
        color: '#fdfcfe',
        fontSize: 16
    },
    
})