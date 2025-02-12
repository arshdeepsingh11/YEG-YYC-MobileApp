import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to My New App!</Text>
      <Text style={styles.message}>You have successfully signed in. Explore Calgary and Edmonton below.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  welcome: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 , color: 'red' },
  message: { fontSize: 16, textAlign: 'center', color: 'gray' }
});
