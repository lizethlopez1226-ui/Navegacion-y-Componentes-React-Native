import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TarjetaHobby from '../components/TargetaHobby';

export default function Hobbies() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.encabezado}>Intereses y Pasatiempos</Text>
      <Text style={estilos.instruccion}>Toca cualquier pasatiempo para ver más detalles.</Text>

      <TarjetaHobby
        titulo="Desarrollo Web y Prototipado"
        nombreIcono="code-slash"
        descripcionDetallada="Me encanta practicar con tecnologías frontend y probar herramientas de diseño como Figma y Adobe."
      />

      <TarjetaHobby
        titulo="Maquillaje de Efectos Especiales"
        nombreIcono="brush"
        descripcionDetallada="Practico técnicas de caracterización y maquillaje FX utilizando gelatinas, texturas y adhesivos cosméticos."
      />

      <TarjetaHobby
        titulo="Cine y Películas"
        nombreIcono="film"
        descripcionDetallada="Disfruto ir al cine a ver estrenos en Cinemark y Cine Colombia en Plaza de las Américas."
      />

      <TarjetaHobby
        titulo="Música y Práctica Vocal"
        nombreIcono="musical-notes"
        descripcionDetallada="Escucho música en inglés y pop urbano para practicar mi pronunciación y entrenamiento vocal."
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { fontSize: 18, fontWeight: "bold", color: "#0f172a", marginBottom: 4 },
  instruccion: { fontSize: 13, color: "#64748b", marginBottom: 14 },
});