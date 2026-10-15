import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarPosition: "top", // Movemos las pestañas a la parte superior
          tabBarActiveTintColor: "#a335ee", // Morado neón
          tabBarInactiveTintColor: "#777",
          tabBarStyle: {
            backgroundColor: "#121214",
            borderBottomColor: "#2a2a32",
            borderBottomWidth: 1,
            paddingTop: 35, // Margen superior para librar la barra de estado/notch
            height: 85,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#a335ee", // Línea de indicación activa arriba
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold",
            marginBottom: 4,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            title: "Tienda",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart-outline" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="games"
          options={{
            title: "Juegos",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="game-controller-outline"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="world"
          options={{
            title: "Mundo",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="planet-outline" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={20} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
