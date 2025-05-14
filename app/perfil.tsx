import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Footer from '../components/footer';
import Header from '../components/header';

import noProfilePicture from '../assets/images/noprofilepicture.png';
import phoneImage from '../assets/images/phone.png';
import mailImage from '../assets/images/mail.png';
import personImage from '../assets/images/person.png';
import { Link } from 'expo-router';

const Perfil = () => {
  const [clinica, setClinica] = useState({
    nome: "Nome Clínica",
    email: "clinica@email.com",
    telefone: "+55 00 00000-0000",
    cnpj: "00.000.000-0000-00"
  });

  return (
    <View className="flex-1 bg-azul-bebe-claro">
      <Header title="PERFIL" showLogoutButton={true} />

      <View className="items-center mt-4">
        <Image
          source={noProfilePicture}
          className="w-30 h-30 rounded-full"
          accessibilityLabel="Foto do perfil"
        />
        <Text className="mt-4 text-3xl text-black font-semibold">
          {clinica.nome},
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
      
      <View className='absolute bottom-0 w-full'>
          <Footer />
      </View>
      
    </View>
  );
};

export default Perfil;
