import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import CalculoPercentagem from './componentes/CalculoPercentagem.jsx';
import { estilo } from './estilo.js';

export default function App() {
  const [valor, setValor] = useState(0);
  const [numero, setNumero] = useState(0);
  const [produto, setProduto] = useState('');
  const [resultado, setResultado] = useState(null);
  function calcularPercentagem(valor, numero, produto) {
    if (produto == '') {
      alert("Nome do Produto Obrigatório")
    }
    else {
      if (valor == 0) {
        alert("Valor do Produto Obrigatório")
      }
      else {
        if (numero == 0) {
          alert("Porcentagem de Aumento Obrigatório")
        }
        else {
          const valorFinal = valor * ((numero / 100) + 1);
          const valorAumento = valorFinal - valor;
          setResultado({ valorFinal, valorAumento });
        }
      }
    }
  }
  return (
    <View style={estilo.body}>
      <Text style={estilo.title}>Calculadora de Preços</Text>

      <Text style={estilo.text}>Produto: </Text>
      <TextInput style={estilo.input} placeholder='Produto' defaultValue='' onChangeText={produto => setProduto(produto)} />
      <Text style={estilo.text}>Valor do Produto: </Text>
      <TextInput style={estilo.input} keyboardType='numeric' placeholder='Valor' defaultValue={0} onChangeText={numero => setValor(numero)} />
      <Text style={estilo.text}>Porcentagem de aumento: </Text>
      <TextInput style={estilo.input} keyboardType='numeric' placeholder='Percentagem' defaultValue={0} onChangeText={numero => setNumero(numero)} />
      <Button style={estilo.button} title='Clique aqui' color={'green'} onPress={() => calcularPercentagem(valor, numero, produto)} />
      {resultado && (
        <CalculoPercentagem
          produto={produto}
          valor={valor}
          numero={numero}
          valorAumento={resultado.valorAumento}
          valorFinal={resultado.valorFinal}
        />
      )}
    </View>

  );
}


