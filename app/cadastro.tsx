import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../components/header';

const Cadastro = () => {
  const router = useRouter();

  const [nomeClinica, setNomeClinica] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [senha, setSenha] = useState('');

  const handleAvancar = () => {
    router.push({
      pathname: '/cadastroendereco',
      params: {
        nomeClinica,
        cnpj,
        email,
        telefone,
        razaoSocial,
        senha,
      },
    });
  };

  return (
    <View className="flex-1 bg-azul-bebe-claro">
      <Header title="CADASTRO" showBackButton={true} />

      <View className="flex-1 items-center px-4">
        <Text className="mt-12 text-3xl text-roxo-texto font-semibold">Preencha os campos abaixo</Text>

        <TextInput
          placeholder="Nome da Clínica"
          className="w-5/6 h-14 bg-white rounded-lg mt-12 px-2 text-2xl text-gray-500"
          value={nomeClinica}
          onChangeText={setNomeClinica}
        />
        <TextInput
          placeholder="CNPJ (00.000.000-0000-00)"
          keyboardType="numeric"
          className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          value={cnpj}
          onChangeText={setCnpj}
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Telefone"
          keyboardType="phone-pad"
          className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          value={telefone}
          onChangeText={setTelefone}
        />
        <TextInput
          placeholder="Razão Social"
          className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          value={razaoSocial}
          onChangeText={setRazaoSocial}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          className="w-72 h-16 bg-azul-bebe-escuro rounded-lg flex justify-center items-center border-2 border-roxo-texto mt-14"
          onPress={handleAvancar}
        >
          <Text className="text-2xl text-roxo-texto font-semibold text-center">AVANÇAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cadastro;
