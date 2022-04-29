'use strict'

describe('Payment', () => {
    it('Test button create payment', () => {
        cy.visit({
            url: "https://finance.dev.fabrique.studio/accounts/login/",
            auth: {
                username: "fabrique",
                password: "fabrique"
            }
        });
        //Авторизация   
        cy.get('input[type="email"]')
            .type('admin@admin.ad')
            .should('have.value', 'admin@admin.ad');

        cy.get('input[type="password"]')
            .type('admin')
            .should('have.value', 'admin');
        cy.get('button[type="submit"]')
            .click();

        cy.viewport(1000, 660);
        //Проверка кнопки "Добваить платёж"
        cy.get('button[type="button"]')
            .contains('Добавить платёж')
            .should('be.visible')
            .click().then(() => { cy.location('href').should('include', 'https://finance.dev.fabrique.studio/payments/edit/'); });
    });
});