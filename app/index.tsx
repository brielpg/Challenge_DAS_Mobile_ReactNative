import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import personImage from '../assets/images/person.png';
import passwordImage from '../assets/images/password.png';
import Header from '../components/header';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!cnpj || !senha) {
      Alert.alert('Erro', 'Por favor, preencha CNPJ e senha.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/login', { cnpj, senha });
      const { id } = response.data;
      if (id) {
        await AsyncStorage.setItem('clinicaId', id.toString());
        router.push('/paginainicial');
      } else {
        Alert.alert('Erro', 'ID não recebido do servidor.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <View className="flex-1 bg-azul-bebe-claro">
      <View className="absolute top-0 w-full">
        <Header title="LOGIN" />
      </View>

      <View className="flex-1 items-center justify-center">
        <Text className="mt-16 text-3xl text-roxo-texto font-semibold">Seja bem vindo ao D.A.S.</Text>

        <View className="flex-row items-center mt-8 w-5/6 bg-white rounded-lg shadow p-2">
          <Image source={personImage} className="w-12 h-12 tint-cinza-escuro-plus" />
          <TextInput
            placeholder="CNPJ"
            onChangeText={setCnpj}
            value={cnpj}
            keyboardType="numeric"
            className="flex-1 ml-4 text-2xl text-gray-700"
          />
        </View>

        <View>
          <View className="flex-row items-center mt-4 w-5/6 bg-white rounded-lg shadow p-2">
            <Image source={passwordImage} className="w-12 h-12 tint-cinza-escuro-plus" />
            <TextInput
              placeholder="Senha"
              secureTextEntry
              onChangeText={setSenha}
              value={senha}
              className="flex-1 ml-4 text-2xl text-gray-700"
            />
          </View>
          <Text className="self-start mt-1 text-2xl text-gray-600 underline">Esqueci a senha</Text>
        </View>

        <TouchableOpacity
          onPress={handleLogin}
          className="mt-20 w-72 h-16 bg-azul-bebe-escuro rounded-lg flex justify-center items-center border-2 border-roxo-texto"
        >
          <Text className="text-2xl text-roxo-texto font-semibold text-center">ENTRAR</Text>
        </TouchableOpacity>

        <View className="absolute bottom-4 w-5/6 px-4">
          <Text className="self-center mt-4 text-2xl text-gray-600">Ainda não tem cadastro?</Text>
          <Link href="/cadastro" asChild>
            <TouchableOpacity className="w-full h-12 bg-white rounded-lg justify-center items-center">
              <Text className="text-2xl text-gray-600 font-semibold text-center">Cadastre-se</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};
