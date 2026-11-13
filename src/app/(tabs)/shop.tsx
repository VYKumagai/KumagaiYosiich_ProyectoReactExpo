import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MarketListing {
  id: string;
  seller: string;
  game: string;
  itemOrCurrency: string;
  amount: string;
  priceUsd: number;
  rating: string;
  isVerified: boolean;
}

export default function ShopScreen() {
  const gamesList = [
    { id: "all", name: "Todos" },
    { id: "aion", name: "Aion 2" },
    { id: "wow", name: "WoW Retail" },
    { id: "warframe", name: "Warframe" },
    { id: "epoch", name: "Last Epoch" },
  ];

  const [selectedGame, setSelectedGame] = useState("all");
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState<MarketListing[]>([]);
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");

  // Base de datos simulada para respuesta del GET
  const mockMarketplaceDatabase: MarketListing[] = [
    {
      id: "1",
      seller: "Vampel_Trade",
      game: "aion",
      itemOrCurrency: "1,000,000 Kinah",
      amount: "Stock: 50M",
      priceUsd: 4.85,
      rating: "5.0 ★",
      isVerified: true,
    },
    {
      id: "2",
      seller: "AionDealer_MX",
      game: "aion",
      itemOrCurrency: "Lanza del Dragón (+15)",
      amount: "1 Unidad",
      priceUsd: 45.0,
      rating: "4.8 ★",
      isVerified: false,
    },
    {
      id: "3",
      seller: "GoldMaster_WoW",
      game: "wow",
      itemOrCurrency: "100,000 Gold",
      amount: "Stock: 1.2M",
      priceUsd: 12.5,
      rating: "4.9 ★",
      isVerified: true,
    },
    {
      id: "4",
      seller: "TennoStore",
      game: "warframe",
      itemOrCurrency: "500 Platinum",
      amount: "Stock: 2500",
      priceUsd: 20.0,
      rating: "5.0 ★",
      isVerified: true,
    },
    {
      id: "5",
      seller: "LootTrader",
      game: "epoch",
      itemOrCurrency: "1,000,000 Gold",
      amount: "Stock: 10M",
      priceUsd: 3.2,
      rating: "4.7 ★",
      isVerified: false,
    },
  ];

  // Simulación del método GET reactivo
  const fetchMarketListings = (gameFilter: string) => {
    setLoading(true);
    setTimeout(() => {
      if (gameFilter === "all") {
        setListings(mockMarketplaceDatabase);
      } else {
        const filtered = mockMarketplaceDatabase.filter(
          (item) => item.game === gameFilter,
        );
        setListings(filtered);
      }
      setLoading(false);
    }, 500); // Retraso simulado de respuesta de API
  };

  useEffect(() => {
    fetchMarketListings(selectedGame);
  }, [selectedGame, tradeType]);

  const handleBuyPress = (item: MarketListing) => {
    Alert.alert(
      "Confirmar Orden",
      `¿Deseas iniciar una transacción de $${item.priceUsd} USD con ${item.seller} por ${item.itemOrCurrency}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Proceder al Pago",
          onPress: () =>
            Alert.alert(
              "🎉 Transacción Iniciada",
              "Se ha abierto un chat seguro con el vendedor.",
            ),
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenTitle}>Marketplace & Trade 🛒</Text>

        {/* CERO COMISIONES BADGE */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>
            ⚡ Mercado P2P Segura entre Jugadores
          </Text>
          <Text style={styles.bannerSubtitle}>
            Compra y vende Kinah, Gold e items sin intermediarios.
          </Text>
        </View>

        {/* SELECTOR COMPRAR / VENDER */}
        <View style={styles.tradeTypeContainer}>
          <TouchableOpacity
            style={[
              styles.tradeTab,
              tradeType === "buy" && styles.tradeTabActive,
            ]}
            onPress={() => setTradeType("buy")}
          >
            <Text
              style={[
                styles.tradeTabText,
                tradeType === "buy" && styles.tradeTabTextActive,
              ]}
            >
              🛒 COMPRAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tradeTab,
              tradeType === "sell" && styles.tradeTabActiveSell,
            ]}
            onPress={() => setTradeType("sell")}
          >
            <Text
              style={[
                styles.tradeTabText,
                tradeType === "sell" && styles.tradeTabTextActive,
              ]}
            >
              💰 PUBLICAR VENTA
            </Text>
          </TouchableOpacity>
        </View>

        {/* COMPONENTE 1: SELECTOR DE JUEGOS (GET REACTIVO) */}
        <Text style={styles.sectionLabel}>Filtrar por Juego:</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.gameSelector}
        >
          {gamesList.map((g) => (
            <TouchableOpacity
              key={g.id}
              style={[styles.chip, selectedGame === g.id && styles.chipActive]}
              onPress={() => setSelectedGame(g.id)}
            >
              <Text style={styles.chipText}>{g.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* LISTADO DE OFERTAS (CONSUMO GET) */}
        <View style={styles.listHeader}>
          <Text style={styles.cardTitle}>
            OFERTA DE JUGADORES ({listings.length})
          </Text>
          <TouchableOpacity onPress={() => fetchMarketListings(selectedGame)}>
            <Text style={styles.refreshText}>🔄 Actualizar GET</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#a335ee" />
            <Text style={styles.loadingText}>
              Cargando ofertas de la API...
            </Text>
          </View>
        ) : (
          listings.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <View style={styles.itemMain}>
                <View style={styles.badgeRow}>
                  <Text style={styles.itemTitle}>{item.itemOrCurrency}</Text>
                  {item.isVerified && (
                    <Text style={styles.verifiedBadge}>✓ VERIFICADO</Text>
                  )}
                </View>
                <Text style={styles.sellerText}>
                  Vendedor: {item.seller} • {item.rating}
                </Text>
                <Text style={styles.stockText}>{item.amount}</Text>
              </View>

              <View style={styles.priceAction}>
                <Text style={styles.priceText}>
                  ${item.priceUsd.toFixed(2)} USD
                </Text>
                <TouchableOpacity
                  style={styles.buyButton}
                  onPress={() => handleBuyPress(item)}
                >
                  <Text style={styles.buyButtonText}>Comprar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121214" },
  scrollContent: { padding: 18, paddingBottom: 30 },
  screenTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 14,
  },
  banner: {
    backgroundColor: "rgba(163, 53, 238, 0.12)",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#a335ee",
    marginBottom: 16,
  },
  bannerTitle: { color: "#a335ee", fontWeight: "bold", fontSize: 13 },
  bannerSubtitle: { color: "#aaa", fontSize: 11, marginTop: 2 },
  tradeTypeContainer: {
    flexDirection: "row",
    backgroundColor: "#1e1e24",
    borderRadius: 10,
    padding: 4,
    marginBottom: 16,
  },
  tradeTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  tradeTabActive: { backgroundColor: "#a335ee" },
  tradeTabActiveSell: { backgroundColor: "#0070dd" },
  tradeTabText: { color: "#888", fontWeight: "bold", fontSize: 12 },
  tradeTabTextActive: { color: "#fff" },
  sectionLabel: {
    color: "#888",
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 8,
  },
  gameSelector: { flexDirection: "row", marginBottom: 16 },
  chip: {
    backgroundColor: "#1e1e24",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#333",
  },
  chipActive: {
    backgroundColor: "rgba(163, 53, 238, 0.25)",
    borderColor: "#a335ee",
  },
  chipText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: { fontSize: 12, color: "#888", fontWeight: "bold" },
  refreshText: { color: "#03dac6", fontSize: 11, fontWeight: "bold" },
  loadingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  loadingText: { color: "#888", fontSize: 12, marginLeft: 10 },
  itemCard: {
    backgroundColor: "#1e1e24",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#2a2a32",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemMain: { flex: 1, marginRight: 10 },
  badgeRow: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  itemTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 6,
  },
  verifiedBadge: {
    color: "#03dac6",
    fontSize: 9,
    fontWeight: "bold",
    backgroundColor: "rgba(3, 218, 198, 0.15)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  sellerText: { color: "#888", fontSize: 11, marginTop: 4 },
  stockText: { color: "#666", fontSize: 10, marginTop: 2 },
  priceAction: { alignItems: "flex-end" },
  priceText: {
    color: "#03dac6",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },
  buyButton: {
    backgroundColor: "#a335ee",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buyButtonText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
});
