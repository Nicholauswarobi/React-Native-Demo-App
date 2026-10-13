import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function createAccount() {
    if (!name.trim() || !email.trim() || password.length < 6) {
      setError('Add your name, email, and a password with 6+ characters.');
      return;
    }
    router.replace('/home');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Pressable onPress={() => router.back()} style={styles.back}><Text style={styles.backText}>‹  BACK</Text></Pressable>
          <Text style={styles.kicker}>JOIN THE TABLE</Text>
          <Text style={styles.title}>A seat is{'\n'}waiting for you.</Text>
          <Text style={styles.subtitle}>Create an account to save favorites and order faster.</Text>
          <View style={styles.form}>
            <Text style={styles.label}>FULL NAME</Text>
            <TextInput onChangeText={setName} placeholder="Alex Morgan" placeholderTextColor="#9C958A" style={styles.input} value={name} />
            <Text style={styles.label}>EMAIL ADDRESS</Text>
            <TextInput autoCapitalize="none" keyboardType="email-address" onChangeText={setEmail} placeholder="you@example.com" placeholderTextColor="#9C958A" style={styles.input} value={email} />
            <Text style={styles.label}>PASSWORD</Text>
            <TextInput onChangeText={setPassword} placeholder="At least 6 characters" placeholderTextColor="#9C958A" secureTextEntry style={styles.input} value={password} />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Pressable onPress={createAccount} style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}><Text style={styles.primaryText}>CREATE ACCOUNT</Text></Pressable>
          </View>
          <View style={styles.footer}><Text style={styles.footerText}>Already a member?</Text><Pressable onPress={() => router.replace('/')}><Text style={styles.link}> Sign in</Text></Pressable></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  safeArea: { backgroundColor: '#F5F1EA', flex: 1 },
  content: { flexGrow: 1, justifyContent: 'center', padding: 28 },
  back: { alignSelf: 'flex-start', marginBottom: 42 },
  backText: { color: '#B94D2D', fontSize: 12, fontWeight: '900', letterSpacing: 1 },
  kicker: { color: '#B94D2D', fontSize: 11, fontWeight: '800', letterSpacing: 2, marginBottom: 12 },
  title: { color: '#25221E', fontSize: 42, fontWeight: '900', letterSpacing: -1.5, lineHeight: 43 },
  subtitle: { color: '#726B61', fontSize: 16, lineHeight: 23, marginTop: 16 },
  form: { marginTop: 30 },
  label: { color: '#625C54', fontSize: 11, fontWeight: '800', letterSpacing: 1.2, marginBottom: 9, marginTop: 18 },
  input: { backgroundColor: '#FFFDF9', borderBottomColor: '#9E968A', borderBottomWidth: 1, color: '#25221E', fontSize: 16, height: 52, paddingHorizontal: 0 },
  error: { color: '#A83F2C', fontSize: 13, marginTop: 12 },
  primaryButton: { alignItems: 'center', backgroundColor: '#B94D2D', height: 56, justifyContent: 'center', marginTop: 26 },
  primaryText: { color: '#FFFDF9', fontSize: 13, fontWeight: '900', letterSpacing: 1.5 },
  pressed: { opacity: 0.78 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 30 },
  footerText: { color: '#726B61', fontSize: 14 },
  link: { color: '#B94D2D', fontSize: 14, fontWeight: '800' },
});
