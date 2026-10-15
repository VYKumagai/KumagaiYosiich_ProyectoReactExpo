import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WorldScreen() {
  const servidores = [
    {
      id: "1",
      juego: "Aion 2",
      servidor: "Siel [NA-East]",
      estado: "Online",
      ping: "24ms",
    },
    {
      id: "2",
      juego: "Warzone",
      servidor: "US-West (Oregon)",
      estado: "Online",
      ping: "18ms",
    },
    {
      id: "3",
      juego: "Farever",
      servidor: "Realm of Eldoria",
      estado: "Mantenimiento",
      ping: "--",
    },
    {
      id: "4",
      juego: "Diablo Immortal",
      servidor: "High Heavens [SA]",
      estado: "Online",
      ping: "45ms",
    },
    {
      id: "5",
      juego: "Last Epoch",
      servidor: "US East (N. Virginia)",
      estado: "Online",
      ping: "32ms",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mapa del Mundo & Servidores 🌐</Text>
      <ScrollView>
        {servidores.map((srv) => (
          <View key={srv.id} style={styles.card}>
            <View>
              <Text style={styles.gameName}>{srv.juego}</Text>
              <Text style={styles.serverName}>{srv.servidor}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={[
                  styles.status,
                  { color: srv.estado === "Online" ? "#4caf50" : "#ff4d4d" },
                ]}
              >
                {srv.estado}
              </Text>
              <Text style={styles.ping}>{srv.ping}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121214", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#fff", marginBottom: 20 },
  card: {
    backgroundColor: "#1e1e24",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2a2a32",
  },
  gameName: { fontSize: 12, color: "#a335ee", fontWeight: "bold" },
  serverName: { fontSize: 16, color: "#fff", fontWeight: "600", marginTop: 2 },
  status: { fontSize: 13, fontWeight: "bold" },
  ping: { fontSize: 11, color: "#888", marginTop: 2 },
});
