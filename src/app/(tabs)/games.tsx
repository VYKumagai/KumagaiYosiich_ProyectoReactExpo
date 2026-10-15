import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GamesScreen() {
  const router = useRouter();
  const listaJuegos = [
    { id: "1", nombre: "Aion 2", genero: "MMORPG", horas: "145 hrs" },
    { id: "2", nombre: "Warzone", genero: "Battle Royale", horas: "320 hrs" },
    { id: "3", nombre: "Farever", genero: "Aventura / RPG", horas: "45 hrs" },
    {
      id: "4",
      nombre: "Diablo Immortal",
      genero: "Action RPG",
      horas: "88 hrs",
    },
    { id: "5", nombre: "Last Epoch", genero: "ARPG", horas: "110 hrs" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mis Juegos 🎮</Text>
      <ScrollView>
        {listaJuegos.map((juego) => (
          <View key={juego.id} style={styles.card}>
            <View>
              <Text style={styles.gameTitle}>{juego.nombre}</Text>
              <Text style={styles.gameSub}>
                {juego.genero} • {juego.horas}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={() => router.push("/modal")}
            >
              <Text style={styles.actionBtnText}>+ Horas</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121214", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 20 },
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
  gameTitle: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  gameSub: { fontSize: 12, color: "#888", marginTop: 4 },
  actionBtn: {
    backgroundColor: "#03dac6",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  actionBtnText: { color: "#000", fontWeight: "bold", fontSize: 12 },
});
