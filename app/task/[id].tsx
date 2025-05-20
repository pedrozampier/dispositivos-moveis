import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';
import { Task } from '@/types/task';
import { SAMPLE_TASKS } from '@/data/sampleTasks';
import Colors from '@/constants/Colors';
import { ArrowLeft } from 'lucide-react-native';

export default function ViewTaskScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if (id) {
      const foundTask = SAMPLE_TASKS.find(t => t.id === id);
      if (foundTask) {
        setTask(foundTask);
      }
    }
  }, [id]);

  if (!task) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <ArrowLeft size={24} color={Colors.gray[800]} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Task Not Found</Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>The task you're looking for could not be found.</Text>
          <TouchableOpacity style={styles.backToHomeButton} onPress={() => router.push('/')}>
            <Text style={styles.backToHomeText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.gray[800]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes da Atividade</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.detailGroup}>
          <Text style={styles.detailLabel}>Titulo</Text>
          <Text style={styles.detailValue}>{task.title}</Text>
        </View>

        <View style={styles.detailGroup}>
          <Text style={styles.detailLabel}>Descrição</Text>
          <Text style={styles.detailValue}>{task.description || 'No description'}</Text>
        </View>

        <View style={styles.detailGroup}>
          <Text style={styles.detailLabel}>Data de vencimento</Text>
          <Text style={styles.detailValue}>{format(new Date(task.dueDate), 'MMMM d, yyyy')}</Text>
        </View>

        <View style={styles.detailGroup}>
          <Text style={styles.detailLabel}>Status</Text>
          <View style={[
            styles.statusBadge,
            task.status === 'completed' ? styles.completedBadge : styles.pendingBadge
          ]}>
            <Text style={styles.statusBadgeText}>
              {task.status === 'completed' ? 'Completed' : 'Pending'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.gray[800],
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[700],
    textAlign: 'center',
    marginBottom: 24,
  },
  backToHomeButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backToHomeText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.white,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  detailGroup: {
    marginBottom: 24,
  },
  detailLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.gray[500],
    marginBottom: 4,
  },
  detailValue: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.gray[800],
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  pendingBadge: {
    backgroundColor: Colors.warning,
  },
  completedBadge: {
    backgroundColor: Colors.success,
  },
  statusBadgeText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.gray[800],
  },
});