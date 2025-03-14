import { Text, View } from "react-native";
export default function CalculoPercentagem({ produto, valor, numero }) {
    const valorFinal = valor * ((numero / 100) + 1);
    return (
        <View>
            <Text>Produto: {produto} {valor}R$</Text>
            <Text>Produto com Aumento: {valorFinal}</Text>
        </View>
    )
}

