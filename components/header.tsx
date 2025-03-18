import React from 'react';
import { View, Image, Text } from 'react-native';
import { Link } from 'expo-router';
import backImage from '../assets/images/back.png';
import logoutImage from '../assets/images/logout.png';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showLogoutButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false, showLogoutButton = false }) => {
  return (
    <View className="w-full h-24 bg-azul-bebe-escuro py-2 flex justify-center items-center">
      <View className="absolute left-4 top-2 flex flex-row">
        {showBackButton && (
          <Link href="/">
            <Image source={backImage} className="w-20 h-20" />
          </Link>
        )}
        {showLogoutButton && (
          <Link href="/">
            <Image source={logoutImage} className="w-20 h-20" />
          </Link>
        )}
      </View>

      <Text className="text-4xl text-roxo-texto font-extrabold text-center">
        {title}
      </Text>
    </View>
  );
};

export default Header;
