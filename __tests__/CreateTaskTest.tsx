import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CreateTaskScreen from '@/app/(tabs)/create';

const mockPush = jest.fn();

jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('CreateTaskScreen', () => {
  it('não deve fazer nada se o título estiver vazio ao criar uma tarefa', () => {
    const { getByText, getByPlaceholderText } = render(<CreateTaskScreen />);
    const createButton = getByText('Criar Tarefa');

    fireEvent.press(createButton);

    expect(getByPlaceholderText('Enter task title').props.value).toBe('');
  });

  it('deve aceitar uma nova tarefa e navegar para a tela inicial', () => {
    const { getByText, getByPlaceholderText } = render(<CreateTaskScreen />);
    const titleInput = getByPlaceholderText('Enter task title');
    const descriptionInput = getByPlaceholderText('Enter task description');
    const createButton = getByText('Criar Tarefa');

    const useRouter = jest.requireMock('expo-router').useRouter();


    fireEvent.changeText(titleInput, 'Nova Tarefa');
    fireEvent.changeText(descriptionInput, 'Descrição da nova tarefa');

    fireEvent.press(createButton);

    expect(useRouter.push).toHaveBeenCalledWith(`/`);
});
});