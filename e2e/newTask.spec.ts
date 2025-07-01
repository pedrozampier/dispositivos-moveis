import { test, expect } from '@playwright/test';

test('navegar para a página de criação de uma nova tarefa', async ({ page }) => {
    await page.goto('http://localhost:8082');
    await page.getByText('New Task').click();
    await expect(page.getByText('Nova atividade')).toBeVisible();
});

test('criar uma nova tarefa e voltar para a página inicial', async ({ page }) => {
    await page.goto('http://localhost:8082');
    await page.getByText('New Task').click();
    await page.fill('input[placeholder="Enter task title"]', 'Minha Nova Tarefa');
    await page.fill('textarea[placeholder="Enter task description"]', 'Descrição da nova tarefa');
    await page.getByText('Criar Tarefa').click();
    await expect(page.getByText('Minhas Atividades')).toBeVisible();
});
