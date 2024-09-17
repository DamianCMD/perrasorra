import { Tabs } from "expo-router";
import TabBar from "../../components/TabBar";

const TabsLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="traductor"
        options={{ title: "Traductor", headerShown: false }}
      />
      <Tabs.Screen
        name="interprete"
        options={{ title: "Interprete", headerShown: false }}
      />
      <Tabs.Screen
        name="index" sty
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="respuestas"
        options={{ title: "Respuestas", headerShown: false }}
      />
      <Tabs.Screen
        name="usuario"
        options={{ title: "Usuario", headerShown: false }}
      />
    </Tabs>
  );
};

export default TabsLayout;
