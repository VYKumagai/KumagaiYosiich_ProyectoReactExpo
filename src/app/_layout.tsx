import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#121214" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: "#121214" },
        }}
      >
        {/* Pantalla de Login inicial */}
        <Stack.Screen name="index" options={{ headerShown: false }} />

        {/* Grupo de Pestañas con la interfaz de la Fase 2 */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Pantallas independientes */}
        <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Registrar Horas" }}
        />
      </Stack>
    </>
  );
}
