import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(Math.floor(Math.random() * 100) + 1);
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('Tente adivinhar um número entre 1 e 100.');
  const [tentativasRestantes, setTentativasRestantes] = useState(5);

  const verificarPalpite = () => {
    const palpiteNumero = parseInt(palpite);
    setTentativasRestantes(tentativasRestantes - 1);

    if (isNaN(palpiteNumero) || palpiteNumero < 1 || palpiteNumero > 100) {
      setMensagem('Por favor, digite um número entre 1 e 100.');
    } else if (palpiteNumero === numeroSecreto) {
      setMensagem(`Parabéns! Você adivinhou o número ${numeroSecreto} em ${tentativasRestantes} tentativas!`);
    } else if (palpiteNumero < numeroSecreto) {
      setMensagem(`O número é maior que ${palpiteNumero}. Tente novamente!`);
    } else {
      setMensagem(`O número é menor que ${palpiteNumero}. Tente novamente!`);
    }

    if (tentativasRestantes === 0) {
      setMensagem(`Acabaram suas tentativas! O número secreto era ${numeroSecreto}.`);
    }

    setPalpite('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo de Adivinhação</Text>
      <Text style={styles.instrucao}>{mensagem}</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Digite seu palpite"
        value={palpite}
        onChangeText={(texto) => setPalpite(texto)}
      />
      <TouchableOpacity style={styles.botao} onPress={verificarPalpite}>
        <Text style={styles.textoBotao}>Enviar Palpite</Text>
      </TouchableOpacity>
      <Text style={styles.tentativasRestantes}>Tentativas restantes: {tentativasRestantes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc9c7d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  instrucao: {
    color: '#473326',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    color: '#473326',
    width: 200,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#8f6448',
    padding: 15,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  tentativasRestantes: {
    color: '#473326',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});
