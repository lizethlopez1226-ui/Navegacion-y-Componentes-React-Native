import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => {
  return (
    <View style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}>
      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>{titulo}</Text>
        {enCurso && (
          <View style={estilos.badgeCapsula}>
            <Text style={estilos.badgeTexto}>En Curso</Text>
          </View>
        )}
      </View>
      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  finalizado: {
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
  },
  enCurso: {
    backgroundColor: '#eef2ff',
    borderColor: '#6366f1',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
    flex: 1,
  },
  subtitulo: {
    fontSize: 14,
    color: '#475569',
    marginTop: 2,
  },
  anio: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 6,
  },
  badgeCapsula: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 11,
  },
});