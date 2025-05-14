import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import Header from '../components/header';
import phoneImage from '../assets/images/phone.png';
import mailImage from '../assets/images/mail.png';
import personImage from '../assets/images/person.png';
import documentImage from '../assets/images/document.png';
import cakeImage from '../assets/images/cake.png';
import MaskInput from 'react-native-mask-input';
import { useState } from 'react';

const EditarPerfil = () => {
  const [dataNascimento, setDataNascimento] = useState('');

  return (
    <View className="flex-1 bg-azul-bebe-claro">
      <Header title="EDITAR PERFIL" showBackButton={true} />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-4">
        <View className="items-center">
          <Text className="mt-12 text-3xl text-roxo-texto text-center font-semibold">Preencha apenas os dados que deseja modificar:</Text>
          
          <View className="w-5/6 mt-12">
            <Text className="text-2xl text-black font-semibold mb-2">Telefone:</Text>
            <View className="flex-row items-center bg-white rounded-lg">
              <Image source={phoneImage} className="w-12 h-12 ml-2 tint-cinza-escuro-plus"/>
              <TextInput
                placeholder="(00) 00000-0000"
                keyboardType="phone-pad"
                className="flex-1 h-14 px-2 text-2xl text-gray-500"
              />
            </View>
          </View>

          <View className="w-5/6 mt-8">
            <Text className="text-2xl text-black font-semibold mb-2">Email:</Text>
            <View className="flex-row items-center bg-white rounded-lg">
              <Image source={mailImage} className="w-12 h-12 ml-2 tint-cinza-escuro-plus"/>
              <TextInput
                placeholder="Digite seu email"
                keyboardType="email-address"
                className="flex-1 h-14 px-2 text-2xl text-gray-500"
              />
            </View>
          </View>

          <View className="w-5/6 mt-8">
            <Text className="text-2xl text-black font-semibold mb-2">CPF:</Text>
            <View className="flex-row items-center bg-white rounded-lg">
              <Image source={personImage} className="w-12 h-12 ml-2 tint-cinza-escuro-plus"/>
              <TextInput
                placeholder="000.000.000-00"
                keyboardType="numeric"
                className="flex-1 h-14 px-2 text-2xl text-gray-500"
              />
            </View>
          </View>

          <View className="w-5/6 mt-8">
            <Text className="text-2xl text-black font-semibold mb-2">RG:</Text>
            <View className="flex-row items-center bg-white rounded-lg">
              <Image source={documentImage} className="w-10 h-10 ml-2 tint-cinza-escuro-plus"/>
              <TextInput
                placeholder="00.000.000-0"
                keyboardType="numeric"
                className="flex-1 h-14 px-2 text-2xl text-gray-500"
              />
            </View>
          </View>

          <View className="w-5/6 mt-8">
            <Text className="text-2xl text-black font-semibold mb-2">Data de Nascimento:</Text>
            <View className="flex-row items-center bg-white rounded-lg">
              <Image source={cakeImage} className="w-10 h-10 ml-2 tint-cinza-escuro-plus"/>
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

          <Link href="/" className='mt-12 mb-8' asChild>
            <TouchableOpacity className="w-72 h-16 bg-azul-bebe-escuro rounded-lg flex justify-center items-center border-2 border-roxo-texto">
              <Text className="text-2xl text-roxo-texto font-semibold text-center">SALVAR</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditarPerfil;
