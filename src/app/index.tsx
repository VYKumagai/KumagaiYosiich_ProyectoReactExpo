import { Link } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Juego {
  id: string;
  nombre: string;
  horasHoy: number;
  horasTotales: number;
}

export default function HomeScreen() {
  const [juegos] = useState<Juego[]>([
    {
      id: "1",
      nombre: "Zelda: Tears of the Kingdom",
      horasHoy: 2.5,
      horasTotales: 45,
    },
    { id: "2", nombre: "Valorant", horasHoy: 1.0, horasTotales: 120 },
    { id: "3", nombre: "Elden Ring", horasHoy: 0, horasTotales: 85 },
  ]);

  const totalHorasHoy = juegos.reduce((acc, juego) => acc + juego.horasHoy, 0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.title}>Game Tracker 🎮</Text>
        <View style={styles.cardResumen}>
          <Text style={styles.resumenTexto}>Horas jugadas hoy:</Text>
          <Text style={styles.resumenHoras}>{totalHorasHoy} hrs</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>Mis Videojuegos</Text>
      <FlatList
        data={juegos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.juegoCard}>
            <View>
              <Text style={styles.juegoNombre}>{item.nombre}</Text>
              <Text style={styles.juegoDetalle}>
                Total: {item.horasTotales} hrs acumuladas
              </Text>
            </View>
            <View style={styles.badgeHoras}>
              <Text style={styles.badgeTexto}>+{item.horasHoy}h hoy</Text>
            </View>
          </View>
        )}
      />

      <Link href="/modal" asChild>
        <TouchableOpacity style={styles.botonAgregar}>
          <Text style={styles.botonTexto}>+ Registrar Horas</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f9", paddingHorizontal: 20 },
  header: { marginBottom: 20, marginTop: 10 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 15,
  },
  cardResumen: {
    backgroundColor: "#6200ee",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  resumenTexto: { color: "#ffffff", fontSize: 16, opacity: 0.9 },
  resumenHoras: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  juegoCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    elevation: 2,
  },
  juegoNombre: { fontSize: 16, fontWeight: "bold", color: "#222" },
  juegoDetalle: { fontSize: 13, color: "#666", marginTop: 4 },
  badgeHoras: {
    backgroundColor: "#e8def8",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  badgeTexto: { color: "#6200ee", fontWeight: "600", fontSize: 13 },
  botonAgregar: {
    backgroundColor: "#03dac6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 15,
  },
  botonTexto: { color: "#000", fontWeight: "bold", fontSize: 16 },
});
