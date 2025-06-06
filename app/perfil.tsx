import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Footer from '../components/footer';
import Header from '../components/header';

import noProfilePicture from '../assets/images/noprofilepicture.png';
import phoneImage from '../assets/images/phone.png';
import mailImage from '../assets/images/mail.png';
import personImage from '../assets/images/person.png';
import { Link, useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Perfil = () => {
  const [clinica, setClinica] = useState({
    nomeClinica: "Nome Clínica",
    email: "clinica@email.com",
    telefone: "+55 00 00000-0000",
    cnpj: "00.000.000-0000-00"
  });

  const router = useRouter();

  useEffect(() => {
    const fetchClinica = async () => {
      try {
        const id = await AsyncStorage.getItem('clinicaId');
        if (id) {
          const response = await axios.get(`http://localhost:8080/clinica/${id}`);
          setClinica(response.data);
        }
      } catch (error) {
        Alert.alert('Erro', 'Falha ao carregar dados da clínica.');
      }
    };
    fetchClinica();
  }, []);

  const handleDelete = async () => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir sua conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              const id = await AsyncStorage.getItem('clinicaId');
              if (id) {
                await axios.delete(`http://localhost:8080/clinica/delete/${id}`);
                await AsyncStorage.removeItem('clinicaId');
                router.push('/index');
              }
            } catch (error) {
              Alert.alert('Erro', 'Falha ao excluir conta.');
            }
          }
        }
      ]
    );
  };

  return (
    <View className="flex-1 bg-azul-bebe-claro">
      <Header title="PERFIL" showLogoutButton={true} />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-4">
        <View className="items-center mt-4">
          <Image
            source={noProfilePicture}
            className="w-30 h-30 rounded-full"
            accessibilityLabel="Foto do perfil"
          />
          <Text className="mt-4 text-3xl text-black font-semibold">
            {clinica.nomeClinica}
          </Text>
        </View>

        <View className="mt-6 px-6">
          <Text className="text-2xl text-black font-semibold">Telefone:</Text>
          <View className="flex-row items-center mt-2 bg-white p-2 rounded-lg">
            <Image
              source={phoneImage}
              className="w-12 h-12 mr-4"
              accessibilityLabel="Ícone de telefone"
            />
            <Text className="text-2xl text-black">{clinica.telefone}</Text>
          </View>
        </View>

        <View className="mt-6 px-6">
          <Text className="text-2xl text-black font-semibold">Email:</Text>
          <View className="flex-row items-center mt-2 bg-white p-2 rounded-lg">
            <Image
              source={mailImage}
              className="w-12 h-12 mr-4"
              accessibilityLabel="Ícone de email"
            />
            <Text className="text-2xl text-black">{clinica.email}</Text>
          </View>
        </View>

        <View className="mt-6 px-6">
          <Text className="text-2xl text-black font-semibold">CNPJ:</Text>
          <View className="flex-row items-center mt-2 bg-white p-2 rounded-lg">
            <Image
              source={personImage}
              className="w-12 h-12 mr-4"
              accessibilityLabel="Ícone de CNPJ"
            />
            <Text className="text-2xl text-black">{clinica.cnpj}</Text>
          </View>
        </View>

        <Link href="/editarperfil" className='mt-14' asChild>
          <TouchableOpacity className="mt-8 w-72 h-16 bg-azul-bebe-escuro rounded-lg self-center justify-center items-center border-2 border-roxo-texto">
            <Text className="text-2xl text-roxo-texto font-semibold text-center">Alterar Dados</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity onPress={handleDelete} className="mt-8 w-72 h-16 bg-azul-bebe-escuro rounded-lg self-center justify-center items-center border-2 border-roxo-texto">
          <Text className="text-2xl text-roxo-texto font-semibold text-center">Excluir Conta</Text>
        </TouchableOpacity>
      </ScrollView>

      <View className='absolute bottom-0 w-full'>
        <Footer />
      </View>

    </View>
  );
};

export default Perfil;
