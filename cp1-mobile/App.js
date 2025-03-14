import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import CalculoPercentagem from './componentes/CalculoPercentagem';
import { estilo } from './estilo.js';

export default function App() {
  const [valor, setValor] = useState(0);
  const [numero, setNumero] = useState(0);
  const [produto, setProduto] = useState('');

  function onPress() {

  }
  return (
    <View style={estilo.body}>
      <Text style={estilo.text}>Produto: </Text>
      <TextInput placeholder='Produto' defaultValue='' onChangeText={produto => setProduto(produto)} />
      <Text>Valor do Produto: </Text>
      <TextInput keyboardType='numeric' placeholder='Valor' defaultValue={0} onChangeText={numero => setValor(numero)} />
      <Text>Porcentagem de aumento: </Text>
      <TextInput keyboardType='numeric' placeholder='Percentagem' defaultValue={0} onChangeText={numero => setNumero(numero)} />
      <Button title='Clique aqui' color={'green'} onPress={onPress} />
      <CalculoPercentagem produto={produto} valor={valor} numero={numero} />
    </View>
  );
}


