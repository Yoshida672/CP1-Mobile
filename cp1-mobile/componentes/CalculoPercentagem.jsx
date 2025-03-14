import { Text, View } from "react-native";
import { estilo } from "../estilo";
export default function CalculoPercentagem({ produto, valor, numero, valorAumento, valorFinal }) {

    return (
        <View>
            <Text style={estilo.resultText}>Percentual de Aumento: {numero} %</Text>
            <Text style={estilo.resultText}>Produto: {produto} {valor} R$</Text>
            <Text style={estilo.resultText}>Valor do Aumento: {valorAumento} R$</Text>
            <Text style={estilo.resultText}>Produto com Aumento: {valorFinal} R$</Text>
        </View>
    )
}

