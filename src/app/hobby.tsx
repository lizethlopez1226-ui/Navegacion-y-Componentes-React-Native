import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

type TarjetaHobbyProps = {
  titulo: string;
  nombreIcono: string;
  descripcionDetallada: string;
};

function TarjetaHobby({ titulo, nombreIcono, descripcionDetallada }: TarjetaHobbyProps) {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  return (
    <Pressable
      style={estilos.tarjeta}
      onPress={() => setMostrarDetalle(!mostrarDetalle)}
      accessibilityRole="button"
      accessibilityLabel={`${titulo}. ${mostrarDetalle ? 'Ocultar' : 'Ver'} detalles`}
    >
      <View style={estilos.filaTarjeta}>
        <Text style={estilos.icono}>{nombreIcono}</Text>
        <Text style={estilos.tituloTarjeta}>{titulo}</Text>
      </View>
      {mostrarDetalle && <Text style={estilos.detalle}>{descripcionDetallada}</Text>}
    </Pressable>
  );
}

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
  tarjeta: { backgroundColor: "#ffffff", borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2 },
  filaTarjeta: { flexDirection: "row", alignItems: "center" },
  icono: { color: "#2563eb", fontSize: 12, marginRight: 10 },
  tituloTarjeta: { flex: 1, fontSize: 15, fontWeight: "600", color: "#0f172a" },
  detalle: { color: "#475569", fontSize: 13, lineHeight: 19, marginTop: 10 },
});