import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// --- Static data (no backend/API needed) ---

const CATEGORIES = [
  { id: '1', label: '☕ Coffee', active: true },
  { id: '2', label: '🍵 Tea', active: false },
  { id: '3', label: '🥐 Pastry', active: false },
  { id: '4', label: '🧋 Cold Drinks', active: false },
];

const POPULAR_ITEMS = [
  { id: '1', name: 'Caramel Macchiato', price: '$4.50', emoji: '☕' },
  { id: '2', name: 'Iced Latte', price: '$4.00', emoji: '🧊' },
  { id: '3', name: 'Matcha Latte', price: '$4.75', emoji: '🍵' },
];

const MENU_ITEMS = [
  { id: '1', name: 'Espresso', desc: 'Bold & rich single shot', price: '$2.50', emoji: '☕' },
  { id: '2', name: 'Cappuccino', desc: 'Steamed milk foam blend', price: '$3.75', emoji: '☕' },
  { id: '3', name: 'Croissant', desc: 'Buttery, flaky pastry', price: '$3.00', emoji: '🥐' },
  { id: '4', name: 'Cold Brew', desc: 'Slow-steeped, extra smooth', price: '$4.25', emoji: '🧋' },
];

export default function CafeHomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning ☀️</Text>
            <Text style={styles.title}>Brew & Bean Café</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
        </View>

        {/* Search bar */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Search drinks, pastries..."
            placeholderTextColor="#a08a7c"
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[styles.categoryChip, cat.active && styles.categoryChipActive]}
            >
              <Text style={[styles.categoryText, cat.active && styles.categoryTextActive]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Promo banner */}
        <View style={styles.promoBanner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.promoTitle}>20% OFF</Text>
            <Text style={styles.promoSubtitle}>On your first order today</Text>
          </View>
          <Text style={styles.promoEmoji}>🥤</Text>
        </View>

        {/* Popular items - horizontal scroll */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Popular Now</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.popularRow}
        >
          {POPULAR_ITEMS.map((item) => (
            <View key={item.id} style={styles.popularCard}>
              <View style={styles.popularEmojiWrap}>
                <Text style={styles.popularEmoji}>{item.emoji}</Text>
              </View>
              <Text style={styles.popularName}>{item.name}</Text>
              <Text style={styles.popularPrice}>{item.price}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Menu list */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Full Menu</Text>
        </View>
        <View style={styles.menuList}>
          {MENU_ITEMS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuEmojiWrap}>
                <Text style={styles.menuEmoji}>{item.emoji}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.menuName}>{item.name}</Text>
                <Text style={styles.menuDesc}>{item.desc}</Text>
              </View>
              <Text style={styles.menuPrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <NavItem icon="🏠" label="Home" active />
        <NavItem icon="🔎" label="Discover" />
        <NavItem icon="🛒" label="Cart" />
        <NavItem icon="👤" label="Profile" />
      </View>
    </SafeAreaView>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Text style={styles.navIcon}>{icon}</Text>
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const BROWN = '#3f2b22';
const CREAM = '#fbf3ea';
const ACCENT = '#c8863f';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: CREAM,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 13,
    color: '#8a6f5e',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: BROWN,
    marginTop: 2,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: ACCENT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  searchIcon: {
    marginRight: 8,
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: BROWN,
  },
  categoryRow: {
    paddingBottom: 18,
    gap: 10,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  categoryChipActive: {
    backgroundColor: BROWN,
  },
  categoryText: {
    fontSize: 13,
    color: '#8a6f5e',
    fontWeight: '600',
  },
  categoryTextActive: {
    color: '#fff',
  },
  promoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BROWN,
    borderRadius: 18,
    padding: 20,
    marginBottom: 22,
  },
  promoTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
  promoSubtitle: {
    color: '#e6d5c8',
    fontSize: 12,
    marginTop: 4,
  },
  promoEmoji: {
    fontSize: 38,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: BROWN,
  },
  seeAll: {
    fontSize: 12,
    color: ACCENT,
    fontWeight: '600',
  },
  popularRow: {
    paddingBottom: 22,
    gap: 12,
  },
  popularCard: {
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginRight: 12,
    alignItems: 'center',
  },
  popularEmojiWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: CREAM,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  popularEmoji: {
    fontSize: 26,
  },
  popularName: {
    fontSize: 12,
    fontWeight: '600',
    color: BROWN,
    textAlign: 'center',
  },
  popularPrice: {
    fontSize: 12,
    color: ACCENT,
    fontWeight: '700',
    marginTop: 4,
  },
  menuList: {
    gap: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  menuEmojiWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: CREAM,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuEmoji: {
    fontSize: 22,
  },
  menuName: {
    fontSize: 14,
    fontWeight: '700',
    color: BROWN,
  },
  menuDesc: {
    fontSize: 11,
    color: '#a08a7c',
    marginTop: 2,
  },
  menuPrice: {
    fontSize: 13,
    fontWeight: '700',
    color: ACCENT,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee0d3',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 18,
  },
  navLabel: {
    fontSize: 10,
    color: '#a08a7c',
    marginTop: 3,
  },
  navLabelActive: {
    color: BROWN,
    fontWeight: '700',
  },
});
