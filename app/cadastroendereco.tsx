import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Header from '../components/header';

const CadastroEndereco = () => {
  return (
    <View className="flex-1 bg-azul-bebe-claro">
      <Header title="CADASTRO" showBackButton={true} />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-4">
        <View className="items-center">
          <Text className="mt-12 text-3xl text-roxo-texto font-semibold">Informações do Endereço</Text>
          
          <TextInput
            placeholder="CEP (00000-000)"
            className="w-5/6 h-14 bg-white rounded-lg mt-12 px-2 text-2xl text-gray-500"
          />
          <TextInput
            placeholder="Logradouro"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          />
          <TextInput
            placeholder="Bairro"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          />
          <TextInput
            placeholder="Cidade"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          />
          <TextInput
            placeholder="Estado (UF)"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          />
          <TextInput
            placeholder="Número"
            keyboardType="numeric"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          />
          <TextInput
            placeholder="Complemento"
            className="w-5/6 h-14 bg-white rounded-lg mt-8 px-2 text-2xl text-gray-500"
          />

          <Link href="/" className='mt-12 mb-8' asChild>
            <TouchableOpacity className="w-72 h-16 bg-azul-bebe-escuro rounded-lg flex justify-center items-center border-2 border-roxo-texto">
              <Text className="text-2xl text-roxo-texto font-semibold text-center">ENVIAR</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default CadastroEndereco;
