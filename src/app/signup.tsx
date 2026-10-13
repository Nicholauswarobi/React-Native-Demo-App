import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSignup() {
    if (!name.trim() || !email.trim() || password.length < 6) {
      setError('Add your name, a valid email, and a password of 6+ characters.');
      return;
    }
    setError('');
    router.replace('/home');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Pressable onPress={() => router.back()} style={styles.backButton}><Text style={styles.backText}>‹ Back</Text></Pressable>
          <Text style={styles.eyebrow}>GET STARTED</Text>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>Join the demo and see what a focused workspace can feel like.</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Full name</Text>
            <TextInput onChangeText={setName} placeholder="Alex Morgan" placeholderTextColor="#9AA3B2" style={styles.input} value={name} />
            <Text style={styles.label}>Email address</Text>
            <TextInput autoCapitalize="none" keyboardType="email-address" onChangeText={setEmail} placeholder="you@example.com" placeholderTextColor="#9AA3B2" style={styles.input} value={email} />
            <Text style={styles.label}>Password</Text>
            <TextInput onChangeText={setPassword} placeholder="At least 6 characters" placeholderTextColor="#9AA3B2" secureTextEntry style={styles.input} value={password} />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Pressable onPress={handleSignup} style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
              <Text style={styles.primaryButtonText}>Create account</Text>
            </Pressable>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={() => router.replace('/')}><Text style={styles.link}> Sign in</Text></Pressable>
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
  backButton: { alignSelf: 'flex-start', marginBottom: 42 },
  backText: { color: '#5B5FEF', fontSize: 16, fontWeight: '700' },
  eyebrow: { color: '#5B5FEF', fontSize: 12, fontWeight: '800', letterSpacing: 1.5, marginBottom: 10 },
  title: { color: '#182033', fontSize: 34, fontWeight: '800', letterSpacing: -1 },
  subtitle: { color: '#697386', fontSize: 16, lineHeight: 24, marginTop: 12 },
  form: { marginTop: 24 },
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
