import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Task } from '@/types/task';
import Colors from '@/constants/Colors';

interface TaskCardProps {
  task: Task;
  onToggleStatus: () => void;
  onInspect: () => void;
}

export default function TaskCard({ task, onToggleStatus, onInspect }: TaskCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, task.status === 'completed' && styles.completedCard]}
      onPress={onToggleStatus}
    >
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.date}>Vence: {new Date(task.dueDate).toLocaleDateString()}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onInspect}>
          <Text style={styles.inspectText}>Inspecionar</Text>
        </TouchableOpacity>
        <Text style={styles.statusText}>
          {task.status === 'completed' ? '✓ Pronta' : '○ Pendente'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  completedCard: {
    backgroundColor: Colors.gray[50],
    borderColor: Colors.gray[300],
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
    marginBottom: 4,
  },
  date: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
  },
  actions: {
    position: 'absolute',
    right: 16,
    top: 16,
    alignItems: 'flex-end',
  },
  inspectText: {
    color: Colors.primary,
    fontSize: 14,
    marginBottom: 4,
  },
  statusText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary,
  },
});