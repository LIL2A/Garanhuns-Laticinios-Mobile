import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";

export const AddProd = () => {
  const [nome, setNome] = useState('');
  const [ncm, setNcm] = useState('');
  const [lote, setLote] = useState('');
  const [validade, setValidade] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState(null);
  const [filename, setFilename] = useState('');

  const handleCadastro = () => {
    const produto = {
      nome,
      ncm,
      lote,
      validade,
      classificacao,
      descricao,
      foto,
    };

    axios.post('http://192.168.1.8:3000/produto/add', produto)
      .then(response => {
        console.log(response.data);
        // Realizar ações adicionais, se necessário
      })
      .catch(error => {
        console.error(error);
        // Realizar ações adicionais em caso de erro
      });

      
  };

  const navigation = useNavigation();
  
  const handleDesfazer = () => {
    // Limpar os campos de entrada
    setNome('');
    setNcm('');
    setLote('');
    setValidade('');
    setClassificacao('');
    setDescricao('');
    setFoto('');
    setFilename('');
  };

  const handleVoltar = () => {
    navigation.navigate("Home")
    console.log('Voltar à página anterior');
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFoto(result.uri);
      const filename = result.uri.split('/').pop();
      setFilename(filename);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto."
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="NCM do produto."
        value={ncm}
        onChangeText={setNcm}
      />
      <TextInput
        style={styles.input}
        placeholder="Lote do produto."
        value={lote}
        onChangeText={setLote}
      />
      <TextInput
        style={styles.input}
        placeholder="Validade do produto."
        value={validade}
        onChangeText={setValidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Classificação"
        value={classificacao}
        onChangeText={setClassificacao}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do produto"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TouchableOpacity style={styles.button} onPress={handlePickImage}>
        <Text style={styles.buttonText}>Selecionar Foto</Text>
        <View>
          <Text style={{ color: 'white' }}>{filename}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleVoltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Inserir Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleDesfazer}>
        <Text style={styles.buttonText}>Desfazer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#C8F7FE'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0892B1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
});

export default AddProd;


