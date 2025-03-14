import { StyleSheet } from "react-native"

export const estilo = StyleSheet.create(
    {
        body: {
            flexGrow: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            color: 'green',
            fontSize: 20
        },
        input: {
            textAlign: 'center',
            backgroundColor: 'white',
            width: 200,
            margin: 5,
            marginBottom: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#000'
        },
        button: {
            width: 200,
            borderRadius: 10
        },
        title: {
            fontSize: 30,
            color: 'green',
            marginBottom: 20
        },
        resultText: {
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin: 10,
            textAlign: 'justify',
            fontSize: 15,
            color: 'black'
        }
    }
)
