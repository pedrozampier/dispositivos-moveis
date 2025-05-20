import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/106272283?s=400&u=948ac46c29a001b58d93c9bb273dcb946637a3fb&v=4' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Pedro Zampier</Text>
        <Text style={styles.bio}>Estudante de TSI</Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: Colors.primary,
  },
  profile: {
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: Colors.gray[800],
  },
  bio: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.gray[600],
    marginTop: 4,
  },
  stats: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-around',
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: Colors.gray[50],
    padding: 16,
    borderRadius: 12,
    width: '45%',
  },
  statNumber: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: Colors.primary,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginTop: 4,
  },
});