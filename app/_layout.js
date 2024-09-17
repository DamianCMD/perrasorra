import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [loaded] = useFonts({
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Light: require("../assets/fonts/Poppins-Light.ttf"),
    Titulo: require("../assets/fonts/Poppins-Bold.ttf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}


export default RootLayout;
