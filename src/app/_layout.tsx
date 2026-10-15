import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        initialRouteName="login"
        screenOptions={{
          headerStyle: { backgroundColor: "#121214" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: "#121214" },
        }}
      >
        {/* Pantalla 1: Login de la aplicación */}
        <Stack.Screen name="login" options={{ headerShown: false }} />

        {/* Pantalla 2: Pestañas principales */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Pantalla 3: Recuperación de contraseña */}
        <Stack.Screen name="forgot-password" options={{ headerShown: false }} />

        {/* Pantalla 4: Modal para registrar horas */}
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Registrar Horas" }}
        />
      </Stack>
    </>
  );
}
