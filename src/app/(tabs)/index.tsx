import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Amigo {
  id: string;
  nombre: string;
  estado: string;
  online: boolean;
}

export default function UserProfileScreen() {
  const router = useRouter();

  const [amigos] = useState<Amigo[]>([
    {
      id: "1",
      nombre: "Paladin_Arthur",
      estado: "En Raid de Dragón",
      online: true,
    },
    { id: "2", nombre: "ShadowArcher", estado: "Menú Principal", online: true },
    {
      id: "3",
      nombre: "MerlinTheGreat",
      estado: "Última vez hace 2h",
      online: false,
    },
  ]);

  // VALIDACIÓN DE CIERRE DE SESIÓN CON ALERTDIALOG
  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que deseas salir de Game Tracker?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          style: "destructive",
          onPress: () => {
            // Desmonta las pestañas y redirige limpiamente a la pantalla de Login
            router.replace("/login");
          },
        },
      ],
      { cancelable: true },
    );
  };

  const handleAddFriend = () => {
    Alert.alert("Agregar Amigo", "Ingresa el nombre de usuario:", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Agregar",
        onPress: () =>
          Alert.alert(
            "🔔 Solicitud Enviada",
            "Se ha enviado la solicitud de amistad.",
          ),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>Perfil de Jugador</Text>
          <TouchableOpacity
            style={styles.logoutHeaderBtn}
            onPress={handleLogout}
          >
            <Text style={styles.logoutHeaderText}>🚪 Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>⚔️</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.username}>Vampel</Text>
            <Text style={styles.guildTitle}>Guild Master de [OATH]</Text>

            <View style={styles.xpContainer}>
              <View style={styles.xpRow}>
                <Text style={styles.levelBadge}>NVL 42</Text>
                <Text style={styles.xpText}>84,200 / 100,000 XP</Text>
              </View>
              <View style={styles.barBackground}>
                <View style={[styles.barFill, { width: "84%" }]} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>BIOGRAFÍA</Text>
          <Text style={styles.bioText}>
            Jugador principal de Aion 2, Warzone y Last Epoch. Cazador de logros
            y líder de clan.
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3.42</Text>
            <Text style={styles.statLabel}>PROMEDIO K/D</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>78%</Text>
            <Text style={styles.statLabel}>VICTORIAS</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1,240</Text>
            <Text style={styles.statLabel}>PARTIDAS</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.friendsHeader}>
            <Text style={styles.cardTitle}>AMIGOS ({amigos.length})</Text>
          </View>

          {amigos.map((item) => (
            <View key={item.id} style={styles.friendRow}>
              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>{item.nombre}</Text>
                <Text style={styles.friendStatus}>{item.estado}</Text>
              </View>
              <View style={styles.onlineBadge}>
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: item.online ? "#4caf50" : "#888" },
                  ]}
                />
                <Text
                  style={[
                    styles.onlineText,
                    { color: item.online ? "#4caf50" : "#888" },
                  ]}
                >
                  {item.online ? "En línea" : "Desconectado"}
                </Text>
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={styles.addFriendBtn}
            onPress={handleAddFriend}
          >
            <Text style={styles.addFriendText}>+ AGREGAR AMIGO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121214" },
  scrollContent: { padding: 18, paddingBottom: 30 },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  topBarTitle: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  logoutHeaderBtn: {
    backgroundColor: "rgba(255, 77, 77, 0.15)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ff4d4d",
  },
  logoutHeaderText: { color: "#ff4d4d", fontSize: 12, fontWeight: "bold" },
  header: { flexDirection: "row", marginBottom: 20, alignItems: "center" },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1e1e24",
    borderWidth: 2,
    borderColor: "#a335ee",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarText: { fontSize: 32 },
  userInfo: { flex: 1 },
  username: { fontSize: 22, fontWeight: "bold", color: "#ffffff" },
  guildTitle: {
    fontSize: 13,
    color: "#a335ee",
    fontWeight: "600",
    marginBottom: 6,
  },
  xpContainer: { marginTop: 4 },
  xpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  levelBadge: { color: "#03dac6", fontWeight: "bold", fontSize: 12 },
  xpText: { color: "#888", fontSize: 11 },
  barBackground: { height: 8, backgroundColor: "#2a2a32", borderRadius: 4 },
  barFill: { height: "100%", backgroundColor: "#a335ee", borderRadius: 4 },
  card: {
    backgroundColor: "#1e1e24",
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#2a2a32",
  },
  cardTitle: {
    fontSize: 13,
    color: "#888",
    fontWeight: "bold",
    marginBottom: 8,
  },
  bioText: { color: "#ccc", fontSize: 13, lineHeight: 18 },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#1e1e24",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#2a2a32",
  },
  statNumber: { fontSize: 20, fontWeight: "bold", color: "#a335ee" },
  statLabel: { fontSize: 10, color: "#888", marginTop: 4, fontWeight: "600" },
  friendsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  friendRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#2a2a32",
  },
  friendInfo: { flex: 1 },
  friendName: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  friendStatus: { color: "#777", fontSize: 12, marginTop: 2 },
  onlineBadge: { flexDirection: "row", alignItems: "center" },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  onlineText: { fontSize: 12, fontWeight: "600" },
  addFriendBtn: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#a335ee",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  addFriendText: { color: "#a335ee", fontWeight: "bold", fontSize: 13 },
});
