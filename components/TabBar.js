import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function TabBar({ state, descriptors, navigation }) {
  const icons = {
    index: "home",
    interprete: "smile",
    respuestas: "layers",
    traductor: "video",
    usuario: "user",
  };

  return (
    <View style={Styles.TabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Feather
              name={icons[route.name]}
              size={40}
              color={isFocused ? "#F5FFFA" : "#222"}
            />

            <Text style={{ color: isFocused ? "#1210AF" : "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Styles = StyleSheet.create({
  TabBar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-evenly",
    backgroundColor: "#F5FFFA",
  },
});

export default TabBar;