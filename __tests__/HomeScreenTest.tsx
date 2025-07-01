import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '@/app/(tabs)/index';
import { SAMPLE_TASKS } from '@/data/sampleTasks';

const mockPush = jest.fn();

jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('HomeScreen', () => {
  it('deve renderizar a lista de tarefas', () => {
    const { getAllByTestId } = render(<HomeScreen />);
    const taskCards = getAllByTestId(/task-id-/);
    expect(taskCards.length).toBe(SAMPLE_TASKS.length);
  });

  it('deve alternar o status de uma tarefa ao pressionar', () => {
    const { getByTestId, getByText } = render(<HomeScreen />);
    const firstTask = SAMPLE_TASKS[0];
    const taskCard = getByTestId(`task-id-${firstTask.id}`);

    expect(getByText('○ Pendente')).toBeTruthy();

    fireEvent.press(taskCard);

    expect(getByText('✓ Pronta')).toBeTruthy();
  });

it('deve navegar para a tela de detalhes ao pressionar "Inspecionar"', () => {
  const { getAllByText } = render(<HomeScreen />);
  const useRouter = jest.requireMock('expo-router').useRouter();
  const inspectButtons = getAllByText('Inspecionar');

  fireEvent.press(inspectButtons[0]);

  expect(useRouter.push).toHaveBeenCalledWith(`/task/${SAMPLE_TASKS[0].id}`);
});

  it('deve exibir a quantidade correta de tarefas', () => {
    const { getAllByTestId } = render(<HomeScreen />);
    const taskCards = getAllByTestId(/task-id-/);
    expect(taskCards.length).toBe(1);
  });
});