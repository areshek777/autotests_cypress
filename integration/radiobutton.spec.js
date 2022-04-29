'use strict'
import Authoriz from "./PageObjets/auth.spec"


describe('Radiobutton', () => {
  const auth = new Authoriz();
  it('Radiobutton switching testing', () => {
    auth.fastAuthCreatePaym();
    //Проверка установки Радиокнопки в строке "Тип операции"
    cy.get('div[data-field-name="operation"]')
      .within(() => {
        cy.get('.checkbox__icon--checked')
          .should('have.class', 'checkbox__icon--checked');
      });
    // Переключение Радиокнопки на "Расход"
    cy.get('div[data-field-name="operation"]')
      .within(() => {
        cy.get('div[class = "form-field radio-group__checkbox"]')
          .within(() => {
            cy.get('div[class = "checkbox__icon checkbox__icon--radio"]')
              .click()
              .should('have.class', 'checkbox__icon--checked');
          });
      });
    // Переключение Радиокнопки на "Перевод средств"
    cy.get('div[data-field-name="operation"]')
      .within(() => {
        cy.get('div[class = "form-field radio-group__checkbox radio-group__checkbox--last"]')
          .within(() => {
            cy.get('div[class = "checkbox__icon checkbox__icon--radio"]')
              .click()
              .should('have.class', 'checkbox__icon--checked');
          });
      });


  });
});


