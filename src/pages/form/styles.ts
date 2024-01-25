import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#e0e0e1',
        justifyContent: 'center',
    },
    form: {
        margin: 20,
        padding: 10,
    },
    title: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600',
        alignSelf: 'center',
    },
    input: {
        height: 40,
        width: '100%',
        marginTop: 15,
        borderRadius: 5,
        paddingLeft: 7,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    labelError: {
        fontSize: 13,
        marginTop: 10,
        color: '#f42000',
    },
    footer: {
        height: 70,
        width: '100%',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonFooter: {
        height: 40,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32af32',
    },
    textButtonFooter: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '700',
    },
});

export default styles;
