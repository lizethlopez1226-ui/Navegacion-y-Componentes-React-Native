import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

type TarjetaEstudioProps = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

function TarjetaEstudio({ titulo, institucion, anio, enCurso }: TarjetaEstudioProps) {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.institucion}>{institucion}</Text>
      <Text style={estilos.detalle}>{enCurso ? 'En curso' : 'Finalizado'} · {anio}</Text>
    </View>
  );
}

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
        titulo="Curso de Inglés (A2 - High Beginner)"
        institucion="American School Way"
        anio={2026}
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Institución Educativa Distrital"
        anio={2022}
        enCurso={false}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { fontSize: 18, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
  tarjeta: { backgroundColor: "#fff", borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: "#e2e8f0" },
  titulo: { fontSize: 16, fontWeight: "bold", color: "#0f172a", marginBottom: 6 },
  institucion: { fontSize: 14, color: "#334155", marginBottom: 8 },
  detalle: { fontSize: 13, color: "#64748b" },
});