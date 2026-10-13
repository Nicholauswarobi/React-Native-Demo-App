import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const dishes = [
  { name: 'Roasted tomato pasta', description: 'Basil, garlic, aged parmesan', price: '$18', color: '#D97B54' },
  { name: 'Crispy chicken bowl', description: 'Greens, grains, herb dressing', price: '$21', color: '#D3A34F' },
  { name: 'Seasonal garden salad', description: 'Market vegetables, lemon oil', price: '$14', color: '#7FA35E' },
];

export default function RestaurantHomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View><Text style={styles.logo}>TABLE</Text><Text style={styles.location}>SOHO · NEW YORK</Text></View>
          <Pressable onPress={() => router.replace('/')} style={styles.account}><Text style={styles.accountText}>AM</Text></Pressable>
        </View>
        <View style={styles.hero}>
          <Text style={styles.heroKicker}>TONIGHT AT TABLE</Text>
          <Text style={styles.heroTitle}>Fresh, local,{"\n"}made with care.</Text>
          <Text style={styles.heroText}>Seasonal dishes and warm plates, ready when you are.</Text>
          <Pressable style={styles.heroButton}><Text style={styles.heroButtonText}>VIEW FULL MENU  →</Text></Pressable>
        </View>
        <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Popular today</Text><Text style={styles.seeAll}>SEE ALL</Text></View>
        {dishes.map((dish) => (
          <View key={dish.name} style={styles.dishRow}>
            <View style={[styles.dishImage, { backgroundColor: dish.color }]}><Text style={styles.dishSymbol}>✦</Text></View>
            <View style={styles.dishCopy}><Text style={styles.dishName}>{dish.name}</Text><Text style={styles.dishDescription}>{dish.description}</Text></View>
            <Text style={styles.price}>{dish.price}</Text>
          </View>
        ))}
        <View style={styles.orderBar}>
          <View><Text style={styles.orderLabel}>YOUR ORDER</Text><Text style={styles.orderDetails}>2 items · $39.00</Text></View>
          <Pressable style={styles.orderButton}><Text style={styles.orderButtonText}>VIEW ORDER</Text></Pressable>
        </View>
        <Pressable onPress={() => router.replace('/')} style={styles.signOut}><Text style={styles.signOutText}>SIGN OUT</Text></Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#F5F1EA', flex: 1 },
  content: { padding: 24, paddingBottom: 36 },
  header: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28 },
  logo: { color: '#B94D2D', fontSize: 20, fontWeight: '900', letterSpacing: 3 },
  location: { color: '#8A8278', fontSize: 10, fontWeight: '800', letterSpacing: 1.2, marginTop: 6 },
  account: { alignItems: 'center', backgroundColor: '#25221E', height: 42, justifyContent: 'center', width: 42 },
  accountText: { color: '#FFFDF9', fontSize: 12, fontWeight: '900' },
  hero: { backgroundColor: '#25221E', minHeight: 260, padding: 24 },
  heroKicker: { color: '#E6B39E', fontSize: 11, fontWeight: '900', letterSpacing: 1.5 },
  heroTitle: { color: '#FFFDF9', fontSize: 34, fontWeight: '900', letterSpacing: -1, lineHeight: 36, marginTop: 22 },
  heroText: { color: '#C4BCB1', fontSize: 14, lineHeight: 20, marginTop: 14, maxWidth: 230 },
  heroButton: { alignSelf: 'flex-start', borderBottomColor: '#E6B39E', borderBottomWidth: 1, marginTop: 24, paddingBottom: 6 },
  heroButtonText: { color: '#E6B39E', fontSize: 11, fontWeight: '900', letterSpacing: 1 },
  sectionHeader: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14, marginTop: 32 },
  sectionTitle: { color: '#25221E', fontSize: 22, fontWeight: '900', letterSpacing: -0.4 },
  seeAll: { color: '#B94D2D', fontSize: 10, fontWeight: '900', letterSpacing: 1 },
  dishRow: { alignItems: 'center', backgroundColor: '#FFFDF9', borderBottomColor: '#DDD6CB', borderBottomWidth: 1, flexDirection: 'row', minHeight: 88, padding: 12 },
  dishImage: { alignItems: 'center', height: 62, justifyContent: 'center', width: 62 },
  dishSymbol: { color: '#FFF4E8', fontSize: 25 },
  dishCopy: { flex: 1, paddingHorizontal: 14 },
  dishName: { color: '#25221E', fontSize: 15, fontWeight: '800' },
  dishDescription: { color: '#847B70', fontSize: 12, marginTop: 5 },
  price: { color: '#B94D2D', fontSize: 15, fontWeight: '900' },
  orderBar: { alignItems: 'center', backgroundColor: '#DCE4D2', flexDirection: 'row', justifyContent: 'space-between', marginTop: 28, padding: 18 },
  orderLabel: { color: '#647158', fontSize: 10, fontWeight: '900', letterSpacing: 1.2 },
  orderDetails: { color: '#25221E', fontSize: 14, fontWeight: '800', marginTop: 5 },
  orderButton: { backgroundColor: '#25221E', paddingHorizontal: 15, paddingVertical: 12 },
  orderButtonText: { color: '#FFFDF9', fontSize: 10, fontWeight: '900', letterSpacing: 1 },
  signOut: { alignItems: 'center', marginTop: 26, padding: 10 },
  signOutText: { color: '#B94D2D', fontSize: 11, fontWeight: '900', letterSpacing: 1.2 },
});
