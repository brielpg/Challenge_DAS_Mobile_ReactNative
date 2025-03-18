import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import personImage from '../assets/images/person.png';
import passwordImage from '../assets/images/password.png';
import Header from '../components/header';

export default function App() {
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View className="flex-1 bg-azul-bebe-claro">
      
      <View className="absolute top-0 w-full">
        <Header title="LOGIN" />
      </View>

      <View className="flex-1 items-center justify-center">
        <Text className="mt-16 text-3xl text-roxo-texto font-semibold">Seja bem vindo ao D.A.S.</Text>
        
        <View className="flex-row items-center mt-8 w-5/6 bg-white rounded-lg shadow p-2">
          <Image source={personImage} className="w-12 h-12 tint-cinza-escuro-plus"/>
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
            <Image source={passwordImage} className="w-12 h-12 tint-cinza-escuro-plus"/>
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
        
        
        <Link href="/paginainicial" className='mt-20' asChild>
          <TouchableOpacity className="w-72 h-16 bg-azul-bebe-escuro rounded-lg flex justify-center items-center border-2 border-roxo-texto">
            <Text className="text-2xl text-roxo-texto font-semibold text-center">ENTRAR</Text>
          </TouchableOpacity>
        </Link>

        

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
