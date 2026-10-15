import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ShopScreen() {
  const items = [
    {
      id: "1",
      nombre: "Kinah (Aion 2)",
      precio: "1,500 G",
      desc: "Moneda oficial para comercio en Aion 2",
    },
    {
      id: "2",
      nombre: "Tibia Coins (TC)",
      precio: "250 TC",
      desc: "Moneda premium de Tibia",
    },
    {
      id: "3",
      nombre: "Oro (Blade & Soul)",
      precio: "3,000 G",
      desc: "Oro de intercambio para equipo en B&S",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Eldorian Market 🛒</Text>
      <ScrollView>
        {items.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>{item.nombre}</Text>
              <Text style={styles.itemDesc}>{item.desc}</Text>
              <Text style={styles.itemPrice}>{item.precio}</Text>
            </View>
            <TouchableOpacity
              style={styles.buyBtn}
              onPress={() =>
                Alert.alert("Compra", `Has adquirido ${item.nombre}`)
              }
            >
              <Text style={styles.buyBtnText}>Comprar</Text>
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
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2a2a32",
  },
  itemName: { fontSize: 16, fontWeight: "bold", color: "#03dac6" },
  itemDesc: { fontSize: 12, color: "#888", marginVertical: 4 },
  itemPrice: { fontSize: 14, fontWeight: "bold", color: "#a335ee" },
  buyBtn: {
    backgroundColor: "#a335ee",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buyBtnText: { color: "#fff", fontWeight: "bold" },
});
