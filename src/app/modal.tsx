import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ModalScreen() {
  const router = useRouter();
  const [horas, setHoras] = useState("");

  const handleSave = () => {
    if (!horas) {
      Alert.alert("Error", "Por favor ingresa las horas jugadas.");
      return;
    }
    Alert.alert("Éxito", `Se registraron ${horas} horas de juego.`);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Horas de Juego ⏱️</Text>

      <Text style={styles.label}>Horas de hoy:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. 2.5"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={horas}
        onChangeText={setHoras}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar Registro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: { color: "#aaa", marginBottom: 8 },
  input: {
    backgroundColor: "#1e1e24",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#03dac6",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#000", fontWeight: "bold" },
});
