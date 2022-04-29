'use strict'

class Authoriz {
    fastAuthCreatePaym() {
        cy.visit({
            url: "https://finance.dev.fabrique.studio/accounts/login/",
            auth: {
                username: "fabrique",
                password: "fabrique"
            }
        });
        cy.get('input[type="email"]')
            .type('admin@admin.ad')

        cy.get('input[type="password"]')
            .type('admin')

        cy.get('button[type="submit"]')
            .click();

        cy.viewport(1000, 660);

        cy.get('button[type="button"]')
            .contains('Добавить платёж')
            .click();
    }
};

export default Authoriz