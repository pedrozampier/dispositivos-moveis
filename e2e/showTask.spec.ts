import { test, expect } from '@playwright/test';

test('navegar para a página de detalhes de uma tarefa', async ({ page }) => {
    await page.goto('http://localhost:8082');
    await expect(page.getByText('Minhas Atividades')).toBeVisible();
    await page.getByText('Inspecionar').first().click();
    await expect(page.getByText('Detalhes da Atividade')).toBeVisible();
});

test('voltar para a página inicial a partir da página de detalhes', async ({ page }) => {
    await page.goto('http://localhost:8082');
    await page.getByText('Inspecionar').first().click();
    await expect(page.getByText('Detalhes da Atividade')).toBeVisible();
    await page.getByTestId('Voltar').click();
    await expect(page.getByText('Minhas Atividades')).toBeVisible();
});
