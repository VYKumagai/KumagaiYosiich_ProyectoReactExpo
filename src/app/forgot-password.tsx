import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      Alert.alert("Error", "Por favor ingresa tu correo.");
      return;
    }
    Alert.alert(
      "Correo Enviado ✉️",
      "Se han enviado las instrucciones de recuperación.",
    );
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña 🔑</Text>
      <Text style={styles.subtitle}>Ingresa tu correo registrado:</Text>

      <TextInput
        style={styles.input}
        placeholder="vampel@ejemplo.com"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Enviar Instrucciones</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Volver al Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    padding: 20,
    justifyContent: "center",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  subtitle: { color: "#aaa", marginBottom: 20 },
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
    backgroundColor: "#a335ee",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  backButton: { alignItems: "center", padding: 10 },
  backText: { color: "#888" },
});
