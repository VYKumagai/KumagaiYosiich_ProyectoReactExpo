import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileSettingsScreen() {
  const router = useRouter();

  const [nombre, setNombre] = useState("Vampel");
  const [gremio, setGremio] = useState("[OATH]");
  const [biografia, setBiografia] = useState(
    "Jugador principal de Aion 2, Warzone y Last Epoch.",
  );

  const handleGuardarTemporal = () => {
    Alert.alert(
      "Perfil Actualizado 💾",
      "Los cambios se guardaron temporalmente.",
    );
  };

  // VALIDACIÓN DE CIERRE DE SESIÓN CON ALERTDIALOG
  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que deseas salir de Game Tracker?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          style: "destructive",
          onPress: () => router.replace("/"),
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Ajustes & Perfil ⚙️</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Nombre de Usuario</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
          />

          <Text style={styles.label}>Clan / Gremio</Text>
          <TextInput
            style={styles.input}
            value={gremio}
            onChangeText={setGremio}
          />

          <Text style={styles.label}>Biografía</Text>
          <TextInput
            style={[styles.input, { height: 70 }]}
            multiline
            value={biografia}
            onChangeText={setBiografia}
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleGuardarTemporal}
          >
            <Text style={styles.saveButtonText}>Guardar Cambios</Text>
          </TouchableOpacity>
        </View>

        {/* BOTÓN ROJO PRINCIPAL DE CIERRE DE SESIÓN */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>🚪 CERRAR SESIÓN</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121214", padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1e1e24",
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#2a2a32",
  },
  label: { color: "#aaa", fontSize: 12, fontWeight: "bold", marginBottom: 6 },
  input: {
    backgroundColor: "#121214",
    color: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#333",
  },
  saveButton: {
    backgroundColor: "#03dac6",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: { color: "#000", fontWeight: "bold" },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  logoutText: { color: "#ffffff", fontWeight: "bold", fontSize: 16 },
});
