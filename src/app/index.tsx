import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function signIn() {
    if (!email.trim() || !password) {
      setError('Please enter your email and password.');
      return;
    }
    router.replace('/home');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <View style={styles.logo}><Text style={styles.logoText}>TABLE</Text></View>
          <Text style={styles.kicker}>WELCOME TO TABLE</Text>
          <Text style={styles.title}>Good food{'\n'}starts here.</Text>
          <Text style={styles.subtitle}>Sign in to discover your next favorite meal.</Text>

          <View style={styles.form}>
            <Text style={styles.label}>EMAIL ADDRESS</Text>
            <TextInput autoCapitalize="none" keyboardType="email-address" onChangeText={setEmail} placeholder="you@example.com" placeholderTextColor="#9C958A" style={styles.input} value={email} />
            <Text style={styles.label}>PASSWORD</Text>
            <TextInput onChangeText={setPassword} placeholder="Your password" placeholderTextColor="#9C958A" secureTextEntry style={styles.input} value={password} />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Pressable onPress={signIn} style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
              <Text style={styles.primaryText}>SIGN IN</Text>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>New to Table?</Text>
            <Pressable onPress={() => router.push('/signup')}><Text style={styles.link}> Create an account</Text></Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  safeArea: { backgroundColor: '#F5F1EA', flex: 1 },
  content: { flexGrow: 1, justifyContent: 'center', padding: 28 },
  logo: { borderBottomColor: '#B94D2D', borderBottomWidth: 3, alignSelf: 'flex-start', marginBottom: 54, paddingBottom: 6 },
  logoText: { color: '#B94D2D', fontSize: 18, fontWeight: '900', letterSpacing: 3 },
  kicker: { color: '#B94D2D', fontSize: 11, fontWeight: '800', letterSpacing: 2, marginBottom: 12 },
  title: { color: '#25221E', fontSize: 44, fontWeight: '900', letterSpacing: -1.5, lineHeight: 45 },
  subtitle: { color: '#726B61', fontSize: 16, lineHeight: 23, marginTop: 16 },
  form: { marginTop: 42 },
  label: { color: '#625C54', fontSize: 11, fontWeight: '800', letterSpacing: 1.2, marginBottom: 9, marginTop: 20 },
  input: { backgroundColor: '#FFFDF9', borderBottomColor: '#9E968A', borderBottomWidth: 1, color: '#25221E', fontSize: 16, height: 52, paddingHorizontal: 0 },
  error: { color: '#A83F2C', fontSize: 13, marginTop: 12 },
  primaryButton: { alignItems: 'center', backgroundColor: '#B94D2D', height: 56, justifyContent: 'center', marginTop: 28 },
  primaryText: { color: '#FFFDF9', fontSize: 13, fontWeight: '900', letterSpacing: 1.5 },
  pressed: { opacity: 0.78 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 32 },
  footerText: { color: '#726B61', fontSize: 14 },
  link: { color: '#B94D2D', fontSize: 14, fontWeight: '800' },
});
