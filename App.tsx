import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  Alert,
  useWindowDimensions,
} from 'react-native';

const App = () => {
  const { width } = useWindowDimensions();

  // Mengatur style responsif berdasarkan ukuran layar
  const isSmallDevice = width < 360;
  const isLargeDevice = width > 720;

  // Fungsi untuk menangani tombol
  const handleButtonPress = () => {
    Alert.alert('Informasi', 'Tombol berhasil ditekan!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Selamat Datang di Aplikasi</Text>
        <Text style={styles.headerSubtitle}>
          Pengalaman terbaik dimulai dari sini!
        </Text>
      </View>

      {/* Konten utama */}
      <View
        style={[
          styles.card,
          isSmallDevice ? styles.smallCard : isLargeDevice ? styles.largeCard : {},
        ]}
      >
        <Text style={styles.title}>Contoh Desain Responsif</Text>
        <Text style={styles.text}>
          Aplikasi ini menyesuaikan tata letaknya secara dinamis berdasarkan
          ukuran layar perangkat.
        </Text>
      </View>

      {/* Tombol */}
      <View style={styles.buttonContainer}>
        <Button title="Klik Disini" onPress={handleButtonPress} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Dibuat dengan oleh Ayu</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    width: '80%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  smallCard: {
    width: '90%',
    padding: 12,
  },
  largeCard: {
    width: '60%',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  footer: {
    marginTop: 'auto',
    padding: 10,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default App;
