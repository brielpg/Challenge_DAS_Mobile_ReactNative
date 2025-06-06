import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import Header from '../components/header';
import phoneImage from '../assets/images/phone.png';
import mailImage from '../assets/images/mail.png';
import personImage from '../assets/images/person.png';
import documentImage from '../assets/images/document.png';
import cakeImage from '../assets/images/cake.png';
import MaskInput from 'react-native-mask-input';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditarPerfil = () => {
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const router = useRouter();

  const handleSave = async () => {
    try {
      const id = await AsyncStorage.getItem('clinicaId');
      if (!id) {
        Alert.alert('Erro', 'ID da clínica não encontrado.');
        return;
      }
      const body: Record<string, string> = {};
      if (telefone) body.telefone = telefone;
      if (email) body.email = email;
      if (cpf) body.cpf = cpf;
      if (rg) body.rg = rg;
      if (dataNascimento) body.dataNascimento = dataNascimento;

      await axios.put(`http://localhost:8080/clinica/update/${id}`, body);
      Alert.alert('Sucesso', 'Dados atualizados com sucesso.');
      router.push('/perfil');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao atualizar dados.');
    }
  };

  return (
    <View className="flex-1 bg-azul-bebe-claro">
      <Header title="EDITAR PERFIL" showBackButton={true} />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-4">
        <View className="items-center">
          <Text className="mt-12 text-3xl text-roxo-texto text-center font-semibold">Preencha apenas os dados que deseja modificar:</Text>

          <View className="w-5/6 mt-12">
            <Text className="text-2xl text-black font-semibold mb-2">Telefone:</Text>
            <View className="flex-row items-center bg-white rounded-lg">
              <Image source={phoneImage} className="w-12 h-12 ml-2 tint-cinza-escuro-plus" />
              <TextInput
                placeholder="(00) 00000-0000"
                keyboardType="phone-pad"
                className="flex-1 h-14 px-2 text-2xl text-gray-500"
                value={telefone}
                onChangeText={setTelefone}
              />
            </View>
          </View>

          <View className="w-5/6 mt-8">
            <Text className="text-2xl text-black font-semibold mb-2">Email:</Text>
            <View className="flex-row items-center bg-white rounded-lg">
              <Image source={mailImage} className="w-12 h-12 ml-2 tint-cinza-escuro-plus" />
              <TextInput
                placeholder="Digite seu email"
                keyboardType="email-address"
                className="flex-1 h-14 px-2 text-2xl text-gray-500"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View className="w-5/6 mt-8">
            <Text className="text-2xl text-black font-semibold mb-2">CPF:</Text>
            <View className="flex-row items-center bg-white rounded-lg">
              <Image source={personImage} className="w-12 h-12 ml-2 tint-cinza-escuro-plus" />
              <TextInput
                placeholder="000.000.000-00"
                keyboardType="numeric"
                className="flex-1 h-14 px-2 text-2xl text-gray-500"
                value={cpf}
                onChangeText={setCpf}
              />
            </View>
          </View>

          <View className="w-5/6 mt-8">
            <Text className="text-2xl text-black font-semibold mb-2">RG:</Text>
            <View className="flex-row items-center bg-white rounded-lg">
              <Image source={documentImage} className="w-10 h-10 ml-2 tint-cinza-escuro-plus" />
              <TextInput
                placeholder="00.000.000-0"
                keyboardType="numeric"
                className="flex-1 h-14 px-2 text-2xl text-gray-500"
                value={rg}
                onChangeText={setRg}
              />
            </View>
          </View>

          <View className="w-5/6 mt-8">
            <Text className="text-2xl text-black font-semibold mb-2">Data de Nascimento:</Text>
            <View className="flex-row items-center bg-white rounded-lg">
              <Image source={cakeImage} className="w-10 h-10 ml-2 tint-cinza-escuro-plus" />
              <MaskInput
                value={dataNascimento}
                onChangeText={(masked, unmasked) => {
                  setDataNascimento(masked);
                }}
                placeholder="DD/MM/AAAA"
                keyboardType="numeric"
                className="flex-1 h-14 px-2 text-2xl text-gray-500"
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              />
            </View>
          </View>

          <TouchableOpacity onPress={handleSave} className="mt-12 mb-8 w-72 h-16 bg-azul-bebe-escuro rounded-lg flex justify-center items-center border-2 border-roxo-texto">
            <Text className="text-2xl text-roxo-texto font-semibold text-center">SALVAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditarPerfil;
