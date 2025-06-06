import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Header from '../components/header';

const CadastroEndereco = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');

  const handleEnviar = async () => {
    const body = {
      nomeClinica: params.nomeClinica,
      cnpj: params.cnpj,
      email: params.email,
      telefone: params.telefone,
      razaoSocial: params.razaoSocial,
      senha: params.senha,
      endereco: {
        cep,
        logradouro,
        bairro,
        cidade,
        estado,
        numero,
        complemento: complemento || undefined,
      },
    };

    try {
      const response = await fetch('http://localhost:8080/clinica/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        router.push('/');
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', errorData.message || 'Erro ao realizar cadastro.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao realizar cadastro. Verifique sua conexão.');
    }
  };

  return (
    <View className="flex-1 bg-azul-bebe-claro">
      <Header title="CADASTRO" showBackButton={true} />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-4">
        <View className="items-center">
          <Text className="mt-12 text-3xl text-roxo-texto font-semibold">Informações do Endereço</Text>

          <TextInput
            placeholder="CEP (00000-000)"
            className="w-5/6 h-14 bg-white rounded-lg mt-12 px-2 text-2xl text-gray-500"
            value={cep}
            onChangeText={setCep}
          />
          <TextInput
            placeholder="Logradouro"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
            value={logradouro}
            onChangeText={setLogradouro}
          />
          <TextInput
            placeholder="Bairro"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
            value={bairro}
            onChangeText={setBairro}
          />
          <TextInput
            placeholder="Cidade"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
            value={cidade}
            onChangeText={setCidade}
          />
          <TextInput
            placeholder="Estado (UF)"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
            value={estado}
            onChangeText={setEstado}
          />
          <TextInput
            placeholder="Número"
            keyboardType="numeric"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
            value={numero}
            onChangeText={setNumero}
          />
          <TextInput
            placeholder="Complemento"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
            value={complemento}
            onChangeText={setComplemento}
          />

          <TouchableOpacity
            className="w-72 h-16 bg-azul-bebe-escuro rounded-lg flex justify-center items-center border-2 border-roxo-texto mt-12 mb-8"
            onPress={handleEnviar}
          >
            <Text className="text-2xl text-roxo-texto font-semibold text-center">ENVIAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CadastroEndereco;
