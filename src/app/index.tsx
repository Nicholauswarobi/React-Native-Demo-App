import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin() {
    if (!email.trim() || !password) {
      setError('Enter your email and password to continue.');
      return;
    }
    setError('');
    router.replace('/home');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <View style={styles.brandMark}><Text style={styles.brandMarkText}>D</Text></View>
          <Text style={styles.eyebrow}>WELCOME BACK</Text>
          <Text style={styles.title}>Sign in to Demo</Text>
          <Text style={styles.subtitle}>Your simple, focused workspace starts here.</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Email address</Text>
            <TextInput autoCapitalize="none" keyboardType="email-address" onChangeText={setEmail} placeholder="you@example.com" placeholderTextColor="#9AA3B2" style={styles.input} value={email} />
            <Text style={styles.label}>Password</Text>
            <TextInput onChangeText={setPassword} placeholder="Enter your password" placeholderTextColor="#9AA3B2" secureTextEntry style={styles.input} value={password} />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Pressable onPress={handleLogin} style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
              <Text style={styles.primaryButtonText}>Sign in</Text>
            </Pressable>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>New here?</Text>
            <Pressable onPress={() => router.push('/signup')}><Text style={styles.link}> Create an account</Text></Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  safeArea: { backgroundColor: '#F7F8FC', flex: 1 },
  content: { flexGrow: 1, justifyContent: 'center', padding: 28 },
  brandMark: { alignItems: 'center', backgroundColor: '#5B5FEF', borderRadius: 16, height: 56, justifyContent: 'center', marginBottom: 36, width: 56 },
  brandMarkText: { color: '#FFFFFF', fontSize: 28, fontWeight: '800' },
  eyebrow: { color: '#5B5FEF', fontSize: 12, fontWeight: '800', letterSpacing: 1.5, marginBottom: 10 },
  title: { color: '#182033', fontSize: 34, fontWeight: '800', letterSpacing: -1 },
  subtitle: { color: '#697386', fontSize: 16, lineHeight: 24, marginTop: 12, maxWidth: 300 },
  form: { marginTop: 36 },
  label: { color: '#30394D', fontSize: 14, fontWeight: '700', marginBottom: 8, marginTop: 18 },
  input: { backgroundColor: '#FFFFFF', borderColor: '#E2E6EF', borderRadius: 14, borderWidth: 1, color: '#182033', fontSize: 16, height: 54, paddingHorizontal: 16 },
  error: { color: '#C2415A', fontSize: 13, marginTop: 12 },
  primaryButton: { alignItems: 'center', backgroundColor: '#5B5FEF', borderRadius: 14, height: 56, justifyContent: 'center', marginTop: 24 },
  primaryButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
  pressed: { opacity: 0.82 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 32 },
  footerText: { color: '#697386', fontSize: 14 },
  link: { color: '#5B5FEF', fontSize: 14, fontWeight: '800' },
});
