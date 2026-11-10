import { ScrollView, StyleSheet, Text } from 'react-native';
import TarjetaEstudio from '../components/TargetaEstudio';

export default function Estudios() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.encabezado}>Formación Académica</Text>
      
      <TarjetaEstudio
        titulo="Tecnología en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA - CGMLTI"
        anio={2026}
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="Curso de Inglés (High Beginner)"
        institucion="American School Way"
        anio={2026}
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="Tecnico en Desarrollo de Software"
        institucion="SENA"
        anio={2025}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Colegio Fe y Alegria San ignacio"
        anio={2025}
        enCurso={false}
      />


    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { fontSize: 18, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
});