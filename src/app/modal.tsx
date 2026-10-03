import { useRouter } from "expo-router";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ModalScreen() {
  const router = useRouter();
  const [juego, setJuego] = useState("");
  const [horas, setHoras] = useState("");

  const guardarRegistro = () => {
    alert(`Registrado: ${horas} horas en ${juego}`);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Sesión 🎮</Text>

      <Text style={styles.label}>Nombre del Juego</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Valorant"
        value={juego}
        onChangeText={setJuego}
      />

      <Text style={styles.label}>Horas Jugadas Hoy</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: 2.5"
        keyboardType="numeric"
        value={horas}
        onChangeText={setHoras}
      />

      <TouchableOpacity style={styles.botonGuardar} onPress={guardarRegistro}>
        <Text style={styles.botonTexto}>Guardar Registro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: { fontSize: 14, color: "#555", marginBottom: 5, fontWeight: "600" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  botonGuardar: {
    backgroundColor: "#6200ee",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  botonTexto: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
