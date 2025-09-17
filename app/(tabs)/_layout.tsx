import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#248232",
        headerStyle: {
          backgroundColor: "#25292e", // the style of tab bar above
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e", // the style of tabs below
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color} //Tabbaractive tint color
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          headerTitle: "Contact",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "call-sharp" : "call-outline"}
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Tabs>
  );
}
