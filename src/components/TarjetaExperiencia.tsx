import { StyleSheet, Text, View } from 'react-native';

type Props = {
  cargo: string;
  empresaProyecto: string;
  periodo: string;
  descripcion: string;
};

const TarjetaExperiencia = ({ cargo, empresaProyecto, periodo, descripcion }: Props) => {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.cargo}>{cargo}</Text>
      <Text style={estilos.empresa}>{empresaProyecto}</Text>
      <Text style={estilos.periodo}>{periodo}</Text>
      <Text style={estilos.descripcion}>{descripcion}</Text>
    </View>
  );
};

export default TarjetaExperiencia;

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 2,
  },
  cargo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  empresa: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '600',
    marginTop: 2,
  },
  periodo: {
    fontSize: 12,
    color: '#64748b',
    marginVertical: 4,
  },
  descripcion: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
    marginTop: 4,
  },
});