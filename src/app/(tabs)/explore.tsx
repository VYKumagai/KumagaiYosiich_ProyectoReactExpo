import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  const ordenJuegos = [
    {
      id: "1",
      nombre: "1. Warzone",
      popularidad: "Tendencia #1",
      horasTotales: "320h activas",
    },
    {
      id: "2",
      nombre: "2. Farever",
      popularidad: "Tendencia #2",
      horasTotales: "45h activas",
    },
    {
      id: "3",
      nombre: "3. Last Epoch",
      popularidad: "Tendencia #3",
      horasTotales: "110h activas",
    },
    {
      id: "4",
      nombre: "4. Aion 2",
      popularidad: "Comunidad Alta",
      horasTotales: "145h activas",
    },
    {
      id: "5",
      nombre: "5. Diablo Immortal",
      popularidad: "Comunidad Media",
      horasTotales: "88h activas",
    },
  ];

  return (
    <SafeAreaView style={styles.darkContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Explorar & Tendencias 🔍</Text>

        {ordenJuegos.map((juego) => (
          <View key={juego.id} style={styles.darkCard}>
            <Text style={styles.highlightText}>{juego.nombre}</Text>
            <View style={styles.row}>
              <Text style={styles.badge}>{juego.popularidad}</Text>
              <Text style={styles.subText}>{juego.horasTotales}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  darkContainer: { flex: 1, backgroundColor: "#121214" },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 30 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginVertical: 20,
  },
  darkCard: {
    backgroundColor: "#1e1e24",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2a2a32",
  },
  highlightText: { fontSize: 18, fontWeight: "bold", color: "#03dac6" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  badge: { color: "#a335ee", fontSize: 12, fontWeight: "bold" },
  subText: { color: "#888", fontSize: 12 },
});
