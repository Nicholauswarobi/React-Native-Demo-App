import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const activities = [
  { title: 'Welcome to your workspace', detail: 'Your account is ready to go.', time: 'Just now', color: '#5B5FEF' },
  { title: 'Profile completed', detail: 'You added the basics to your profile.', time: 'Today', color: '#2DBE9B' },
  { title: 'First project created', detail: 'Start building something great.', time: 'Today', color: '#F2A84B' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View><Text style={styles.greeting}>GOOD MORNING</Text><Text style={styles.title}>Welcome, Alex</Text></View>
          <View style={styles.avatar}><Text style={styles.avatarText}>A</Text></View>
        </View>
        <View style={styles.heroCard}>
          <View style={styles.heroCopy}>
            <Text style={styles.heroEyebrow}>YOUR DEMO SPACE</Text>
            <Text style={styles.heroTitle}>Make today count.</Text>
            <Text style={styles.heroSubtitle}>Everything you need to get moving is right here.</Text>
          </View>
          <View style={styles.heroShape}><Text style={styles.heroShapeText}>✦</Text></View>
        </View>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}><Text style={styles.statValue}>12</Text><Text style={styles.statLabel}>Tasks done</Text></View>
          <View style={styles.statCard}><Text style={[styles.statValue, { color: '#2DBE9B' }]}>04</Text><Text style={styles.statLabel}>In progress</Text></View>
        </View>
        <Text style={styles.sectionTitle}>Recent activity</Text>
        <View style={styles.activityCard}>
          {activities.map((activity, index) => (
            <View key={activity.title} style={[styles.activityRow, index < activities.length - 1 && styles.activityBorder]}>
              <View style={[styles.activityDot, { backgroundColor: activity.color }]} />
              <View style={styles.activityCopy}><Text style={styles.activityTitle}>{activity.title}</Text><Text style={styles.activityDetail}>{activity.detail}</Text></View>
              <Text style={styles.activityTime}>{activity.time}</Text>
            </View>
          ))}
        </View>
        <Pressable onPress={() => router.replace('/')} style={styles.logoutButton}><Text style={styles.logoutText}>Sign out</Text></Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#F7F8FC', flex: 1 },
  content: { padding: 24, paddingBottom: 40 },
  header: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28 },
  greeting: { color: '#7B8495', fontSize: 11, fontWeight: '800', letterSpacing: 1.4, marginBottom: 8 },
  title: { color: '#182033', fontSize: 28, fontWeight: '800', letterSpacing: -0.6 },
  avatar: { alignItems: 'center', backgroundColor: '#E8E8FF', borderRadius: 22, height: 44, justifyContent: 'center', width: 44 },
  avatarText: { color: '#5B5FEF', fontSize: 18, fontWeight: '800' },
  heroCard: { backgroundColor: '#5B5FEF', borderRadius: 24, flexDirection: 'row', minHeight: 176, overflow: 'hidden', padding: 24 },
  heroCopy: { flex: 1, zIndex: 1 },
  heroEyebrow: { color: '#C9CAFF', fontSize: 11, fontWeight: '800', letterSpacing: 1.2 },
  heroTitle: { color: '#FFFFFF', fontSize: 28, fontWeight: '800', letterSpacing: -0.6, marginTop: 16 },
  heroSubtitle: { color: '#E2E2FF', fontSize: 14, lineHeight: 20, marginTop: 8, maxWidth: 190 },
  heroShape: { alignItems: 'center', backgroundColor: '#7275F3', borderRadius: 70, height: 140, justifyContent: 'center', position: 'absolute', right: -20, top: 18, width: 140 },
  heroShapeText: { color: '#BFC0FF', fontSize: 54 },
  sectionTitle: { color: '#182033', fontSize: 18, fontWeight: '800', marginBottom: 14, marginTop: 30 },
  statsRow: { flexDirection: 'row', gap: 12 },
  statCard: { backgroundColor: '#FFFFFF', borderRadius: 18, flex: 1, padding: 18 },
  statValue: { color: '#5B5FEF', fontSize: 28, fontWeight: '800' },
  statLabel: { color: '#7B8495', fontSize: 13, marginTop: 6 },
  activityCard: { backgroundColor: '#FFFFFF', borderRadius: 18, paddingHorizontal: 16 },
  activityRow: { alignItems: 'center', flexDirection: 'row', minHeight: 76 },
  activityBorder: { borderBottomColor: '#EEF0F5', borderBottomWidth: 1 },
  activityDot: { borderRadius: 6, height: 12, marginRight: 12, width: 12 },
  activityCopy: { flex: 1 },
  activityTitle: { color: '#30394D', fontSize: 14, fontWeight: '700' },
  activityDetail: { color: '#8A93A3', fontSize: 12, marginTop: 4 },
  activityTime: { color: '#A0A7B4', fontSize: 11, marginLeft: 8 },
  logoutButton: { alignItems: 'center', marginTop: 28, padding: 12 },
  logoutText: { color: '#5B5FEF', fontSize: 14, fontWeight: '800' },
});
