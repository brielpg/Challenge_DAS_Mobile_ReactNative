import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Header from '../components/header';

const Cadastro = () => {
  return (
    <View className="flex-1 bg-azul-bebe-claro">
      <Header title="CADASTRO" showBackButton={true} />

      <View className="flex-1 items-center px-4">
        <Text className="mt-12 text-3xl text-roxo-texto font-semibold">Preencha os campos abaixo</Text>
        

        <TextInput
          placeholder="Nome da Clínica"
          className="w-5/6 h-14 bg-white rounded-lg mt-12 px-2 text-2xl text-gray-500"
        />
        <TextInput
          placeholder="CNPJ (00.000.000-0000-00)"
          keyboardType="numeric"
          className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
        />
        <TextInput
          placeholder="Telefone"
          keyboardType="phone-pad"
          className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
        />
        <TextInput
          placeholder="Razão Social"
          className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
        />

        <Link href="/cadastroendereco" className='mt-14' asChild>
            <TouchableOpacity className="w-72 h-16 bg-azul-bebe-escuro rounded-lg flex justify-center items-center border-2 border-roxo-texto">
                <Text className="text-2xl text-roxo-texto font-semibold text-center">AVANÇAR</Text>
            </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Cadastro;
