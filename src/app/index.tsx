import { Ionicons } from '@expo/vector-icons';
import { Alert, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import MiBoton from '../components/MiBoton';

export default function Inicio() {
  const abrirEnlace = (url: string) => {
    Linking.openURL(url).catch(() => Alert.alert("Error", "No se pudo abrir el enlace"));
  };

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Lizeth Valeria López Contreras</Text>
        <Text style={estilos.profesion}>Tecnóloga en ADSO - SENA</Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiza del SENA apasionada por el desarrollo de aplicaciones móviles y web. Con habilidades en React Native, JavaScript, HTML5, CSS, Python, Node.js y gestión de bases de datos relacionales y no relacionales.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto e Interacción</Text>

        {/* Abre directamente el correo para enviar mensaje */}
        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#eab308"
          onPress={() => abrirEnlace("mailto:lizethlopez1227@gmail.com")}
        />

        {/* Abre directamente el marcador telefónico con tu número */}
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#2563eb"
          onPress={() => abrirEnlace("tel:3028365535")}
        />

        {/* Abre tu repositorio de GitHub */}
        <MiBoton
          textoBoton="Ver Repositorio GitHub"
          nombreIcono="logo-github"
          colorBoton="#0f172a"
          onPress={() => abrirEnlace("https://github.com/lizethlopez1226-ui/Navegacion-y-Componentes-React-Native.git")}
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 22, fontWeight: "bold", color: "#0f172a", marginTop: 8, textAlign: "center" },
  profesion: { fontSize: 16, color: "#2563eb", fontWeight: "600", marginTop: 4 },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  subtitulo: { fontSize: 16, fontWeight: "bold", color: "#1e293b", marginBottom: 8 },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
});