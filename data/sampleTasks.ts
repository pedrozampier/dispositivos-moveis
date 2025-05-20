import { Task } from '@/types/task';

export const SAMPLE_TASKS: Task[] = [
  {
    id: '1',
    title: 'Terminar Trabalho de Pesquisa',
    description: 'Completar a seção de revisão de literatura para o trabalho final de pesquisa sobre aplicações de aprendizado de máquina na área da saúde.',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString(),
    status: 'pending',
  },
  {
    id: '2',
    title: 'Preparar Apresentação',
    description: 'Criar slides para a apresentação de ciência da computação sobre estruturas de dados e algoritmos.',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(),
    status: 'pending',
  },
  {
    id: '3',
    title: 'Enviar Trabalho de Matemática',
    description: 'Resolver todos os problemas de cálculo do capítulo 4 e enviar online.',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
    status: 'pending',
  }
];