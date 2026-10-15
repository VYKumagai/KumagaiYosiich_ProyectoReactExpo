import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Manejo de inicio de sesión
  const handleLogin = () => {
    if (username.trim().toLowerCase() === "vampel" && password === "336699") {
      router.replace("/(tabs)");
    } else {
      Alert.alert("Error de Acceso", "Usuario o contraseña incorrectos.");
    }
  };

  return (
    <SafeAreaView style={styles.darkContainer}>
      <StatusBar barStyle="light-content" />

      <View style={styles.headerLogin}>
        <Text style={styles.logoTitle}>Game Tracker 🎮</Text>
        <Text style={styles.logoSubtitle}>Ingresa a tu cuenta de jugador</Text>
      </View>

      <View style={styles.darkCard}>
        <Text style={styles.inputLabel}>Usuario</Text>
        <TextInput
          style={styles.darkInput}
          placeholder="Ej. Vampel"
          placeholderTextColor="#666"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.inputLabel}>Contraseña</Text>
        <TextInput
          style={styles.darkInput}
          placeholder="••••••••"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => router.push("/forgot-password")}
        >
          <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
          <Text style={styles.primaryButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  darkContainer: {
    flex: 1,
    backgroundColor: "#121214",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  headerLogin: { alignItems: "center", marginBottom: 30 },
  logoTitle: { fontSize: 32, fontWeight: "bold", color: "#a335ee" },
  logoSubtitle: { fontSize: 14, color: "#888", marginTop: 6 },
  darkCard: {
    backgroundColor: "#1e1e24",
    padding: 25,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#333",
  },
  inputLabel: {
    fontSize: 13,
    color: "#aaa",
    fontWeight: "600",
    marginBottom: 6,
  },
  darkInput: {
    backgroundColor: "#121214",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 15,
  },
  forgotButton: { alignSelf: "flex-end", paddingVertical: 8, marginBottom: 16 },
  forgotText: { color: "#0070dd", fontSize: 13, fontWeight: "600" },
  primaryButton: {
    backgroundColor: "#6200ee",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  primaryButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
