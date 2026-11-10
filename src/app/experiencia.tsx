import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TarjetaExperiencia from '../components/tarjetaExperiencia';

export default function Experiencia() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.encabezado}>Proyectos y Experiencia</Text>

      <TarjetaExperiencia
        cargo="Desarrolladora Lead - Proyecto DataVentor"
        empresaProyecto="SENA CGMLTI"
        periodo="Marzo 2026 - Junio 2026"
        descripcion="Aplicación web desarrollada para la gestión y reporte de incidentes técnicos en los ambientes de formación del centro SENA."
      />

      <TarjetaExperiencia
        cargo="Diseñadora de Backlog & Frontend - Aplicativo ENI"
        empresaProyecto="SENA CGMLTI"
        periodo="Octubre 2026 - Noviembre 2026"
        descripcion="Aplicativo web para la gestión de convocatorias de instructores y administrativos, estructurando un Product Backlog de 11 PBIs."
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { fontSize: 18, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
});