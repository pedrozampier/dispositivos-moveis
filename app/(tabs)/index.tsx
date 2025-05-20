import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Task } from '@/types/task';
import { SAMPLE_TASKS } from '@/data/sampleTasks';
import Colors from '@/constants/Colors';
import TaskCard from '@/components/TaskCard';

export default function HomeScreen() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(SAMPLE_TASKS);
  }, []);

  const toggleTaskStatus = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task
      )
    );
  };

  const renderTask = ({ item: task }: { item: Task }) => (
    <TaskCard
      task={task}
      onToggleStatus={() => toggleTaskStatus(task.id)}
      onInspect={() => router.push(`/task/${task.id}`)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas atividades</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={task => task.id}
        renderItem={renderTask}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[50],
  },
  header: {
    padding: 16,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: Colors.primary,
  },
  flatListContent: {
    padding: 16,
  },
});