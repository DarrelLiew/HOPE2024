import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'login',
  };
export default function RootLayout() {
  return (
    <Stack>
    <Stack.Screen name="login" options={{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}