import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AnalysisScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Análisis de Tiempo 📊</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Promedio Semanal</Text>
          <Text style={styles.statNumber}>3.2 hrs/día</Text>
          <Text style={styles.statSub}>-15% respecto a la semana pasada</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Juego Más Jugado</Text>
          <Text style={styles.highlightText}>Valorant (120 hrs tot.)</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Distribución por Categoría</Text>
          <View style={styles.barContainer}>
            <Text style={styles.barLabel}>RPG (Zelda, Elden Ring): 60%</Text>
            <View
              style={[styles.bar, { width: "60%", backgroundColor: "#6200ee" }]}
            />
            <Text style={styles.barLabel}>Shooter (Valorant): 40%</Text>
            <View
              style={[styles.bar, { width: "40%", backgroundColor: "#03dac6" }]}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f9", paddingHorizontal: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginVertical: 15 },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: { fontSize: 16, color: "#666", marginBottom: 5 },
  statNumber: { fontSize: 28, fontWeight: "bold", color: "#6200ee" },
  statSub: { fontSize: 12, color: "#4caf50", marginTop: 4 },
  highlightText: { fontSize: 20, fontWeight: "bold", color: "#333" },
  barContainer: { marginTop: 10 },
  barLabel: { fontSize: 13, color: "#444", marginTop: 8 },
  bar: { height: 10, borderRadius: 5, marginTop: 4 },
});
