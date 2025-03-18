import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Footer from '../components/footer';
import Header from '../components/header';

const PaginaInicial = () => {
  return (
    <View className="flex-1 bg-azul-bebe-claro">
      <Header title="PÁGINA INICIAL" />

      <View className="flex-1 items-center justify-center">
        <TouchableOpacity className="w-5/6 h-1/6 bg-white rounded-lg mt-8 justify-center">
          <Text className="text-2xl text-black text-center">Cadastrar Paciente</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-5/6 h-1/6 bg-white rounded-lg mt-8 justify-center">
          <Text className="text-2xl text-black-700 text-center">Enviar Relatório</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-5/6 h-1/6 bg-white rounded-lg mt-8 justify-center">
          <Text className="text-2xl text-black text-center">Status</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-5/6 h-1/6 bg-white rounded-lg mt-8 justify-center">
          <Text className="text-2xl text-black text-center">Histórico de Relatórios</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
};

export default PaginaInicial;
