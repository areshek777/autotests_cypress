'use strict'
import Authoriz from "./PageObjets/auth.spec"

describe('Adding payment', () => {
    const auth = new Authoriz();
    it('Testing adding payment transaction type income', () => {
        auth.fastAuthCreatePaym();
        //Вводим данные в обязательное поле "Описание"
        cy.get('div[data-field-name="description"]').within(() => {
            cy.get('textarea[type="textarea"]').type('Банк');
        });

        //Проверяем радиокнопку в строке "Статус платежа"
        cy.get('div[data-field-name="statuses"]').within(() => {
            cy.get('div[class="form-field radio-group__checkbox radio-group__checkbox--last"]').within(() => {
                cy.get('div[class="checkbox__icon checkbox__icon--checkbox"]').click() //cy.get('div[class="checkbox__icon checkbox__icon--checkbox checkbox__icon--checked"]').should('not.exist')//cy.get('div[class="checkbox__icon checkbox__icon--checkbox"]').click()

            });
        });

        //Заполняем поле "Сумма план"
        cy.get('div[data-field-name="amount_plan"]').within(() => {
            cy.get('input[type="text"]').type('1000');
        });
        //Заполняем поле "Сумма факт"
        cy.get('div[data-field-name="amount_fact"]').within(() => {
            cy.get('input[type="text"]').type('1000');
        });
        //Выбираем радиокнопку "Оплачено"
        cy.get('div[data-field-name="status"]')
            .within(() => {
                cy.get('div[class="form-field radio-group__checkbox"]').within(() => {
                    cy.get('div[class="checkbox__icon checkbox__icon--radio"]').click();
                });
            });
        //Выставляем Дату план
        cy.get('div[data-field-name="date_plan"]').within(() => {
            cy.get('div [class="date date--is-short date--state-undefined"]').click();
        });

        cy.get('.dp-days').children('[data-date="1649106000000"]').contains('5').click();

        //Выставляем Дату факт
        cy.get('div[data-field-name="date_fact"]').within(() => {
            cy.get('div [class="date date--is-short date--state-undefined"]').click();
        });

        cy.get('.dp-days').children('[data-date="1649365200000"]').contains('8').click();

        //Выставляем значение в текстовое поле Источник
        cy.get('div[data-field-name="source"]').within(() => {
            cy.get('span[class="multiselect__placeholder"]').type('Ромашкино');
        });

        //Выставляем значение в текстовое поле Источник, уточнение
        cy.get('div[data-field-name="source_additional_id"]').within(() => {
            cy.get('textarea[type="textarea"]').type('Ромашкино');
        });

        //Выставляем значение из выпадающего список Статус документов
        cy.get('div[data-field-name="source_status"]').within(() => {
            cy.get('div[class="select__caret multiselect__select"]').click();

        });

        cy.contains('Счет отправлен').click();

        //Выставляем значение в текстовое поле Юридическое лицо
        cy.get('div[data-field-name="company_own"]').within(() => {
            cy.get('[class="multiselect__placeholder"]').type('ООО Ромашкино{enter}');

        });

        //Выставляем значение в текстовое поле Контрагент
        cy.get('div[data-field-name="company_client"]').within(() => {
            cy.get('[class="multiselect__placeholder"]').type('ООО Ромашкино{enter}');
        });

        //Выставляем значение в числовое поле Счёт отправителя
        cy.get('div[data-field-name="account_sender"]').within(() => {
            cy.get('[class="multiselect__placeholder"]').type('10101010101010{enter}');
        });

        //Выставляем значение в числовое поле Счёт получателя
        cy.get('div[data-field-name="account_recipient"]').within(() => {
            cy.get('[class="multiselect__placeholder"]').type('01010101010101{enter}');
        });

        //Выставляем значение в поле Тэги
        cy.get('div[data-field-name="tags"]').within(() => {
            cy.get('[class="multiselect__placeholder"]').type('Автотест{enter}');
        });

        //Клик по кнопке "Добавить"
        cy.get('button[type="submit"]').contains('Добавить').click();

        //Проверка успешного добавления платежа
        cy.contains('Платеж успешно сохранен').should('have.text', 'Платеж успешно сохранен');

    });
});





