import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/(auth)/sign-in">
        <Text>Already have an account? Sign In</Text>
      </Link>
      <View>
        <Link href="/">Back</Link>
      </View>
    </View>
  );
};

export default SignUp;
