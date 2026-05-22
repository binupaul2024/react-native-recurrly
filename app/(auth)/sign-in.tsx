import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up">
        <Text>Don`t have an account? Sign Up</Text>
      </Link>
      <View>
        <Link href="/">Back</Link>
      </View>
    </View>
  );
};

export default SignIn;
