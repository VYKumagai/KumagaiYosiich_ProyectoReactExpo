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

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleRecoverPassword = () => {
    if (!email.trim()) {
      Alert.alert("Error", "Por favor ingresa un correo electrónico válido.");
      return;
    }

    // Imprime en la consola del terminal de VS Code
    console.log("Correo ingresado para recuperación:", email);

    // Muestra alerta en pantalla
    Alert.alert(
      "Solicitud Enviada 📧",
      `Se ha enviado un enlace de recuperación al correo:\n\n${email}`,
      [
        {
          text: "Volver al Login",
          onPress: () => router.back(),
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Volver al Login</Text>
      </TouchableOpacity>

      <View style={styles.darkCard}>
        <Text style={styles.title}>Recuperar Contraseña 🔐</Text>

        <Text style={styles.description}>
          Ingresa la dirección de correo electrónico asociada a tu cuenta para
          restablecer tu contraseña.
        </Text>

        <Text style={styles.inputLabel}>Correo Electrónico</Text>
        <TextInput
          style={styles.darkInput}
          placeholder="ejemplo@correo.com"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleRecoverPassword}
        >
          <Text style={styles.actionButtonText}>Enviar Correo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 55,
    left: 20,
    paddingVertical: 8,
    zIndex: 10,
  },
  backText: { color: "#0070dd", fontSize: 16, fontWeight: "600" },
  darkCard: {
    backgroundColor: "#1e1e24",
    padding: 25,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2a2a32",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#aaa",
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 24,
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
    marginBottom: 20,
    fontSize: 15,
  },
  actionButton: {
    backgroundColor: "#03dac6",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  actionButtonText: { color: "#000000", fontSize: 16, fontWeight: "bold" },
});
