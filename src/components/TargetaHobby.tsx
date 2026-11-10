import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  titulo: string;
  descripcionDetallada: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
};

const TarjetaHobby = ({ titulo, descripcionDetallada, nombreIcono }: Props) => {
  const mostrarDetalles = () => {
    Alert.alert(titulo, descripcionDetallada);
  };

  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={mostrarDetalles} activeOpacity={0.7}>
      <View style={estilos.iconoContenedor}>
        <Ionicons name={nombreIcono} size={28} color="#2563eb" />
      </View>
      <Text style={estilos.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },
  iconoContenedor: {
    backgroundColor: '#eff6ff',
    padding: 10,
    borderRadius: 10,
    marginRight: 14,
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e293b',
  },
});