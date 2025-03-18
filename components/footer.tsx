import { Link } from 'expo-router';
import React from 'react';
import { View, Image } from 'react-native';
import homeImage from '../assets/images/home.png';
import profileImage from '../assets/images/person.png';

const Footer = () => {
  return (
    <View className="bg-azul-bebe-escuro flex-row items-center justify-center py-3">
      <Link href="/paginainicial" className="mr-14">
        <Image
          source={homeImage}
          className="w-12 h-12 tint-black"
          accessibilityLabel="Botão Home"
        />
      </Link>
      <Link href="/perfil" className="ml-14">
        <Image
          source={profileImage}
          className="w-12 h-12 tint-black"
          accessibilityLabel="Botão Perfil"
        />
      </Link>
    </View>
  );
};

export default Footer;
