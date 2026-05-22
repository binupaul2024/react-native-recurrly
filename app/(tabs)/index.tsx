import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        <Text className="text-white">Go to Onboarding</Text>
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        <Text className="text-white">Sign In</Text>
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        <Text className="text-white">Sign Up</Text>
      </Link>

      <Link
        href="/subscriptions/spotify"
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        Spotify Subscription
      </Link>

      <Link
        className="mt-4 rounded bg-primary text-white px-4 py-2"
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
      >
        Claude Subscription
      </Link>
    </SafeAreaView>
  );
}
