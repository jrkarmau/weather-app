//<reference types="cypress"/>

describe('weather app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('can fetch weather', () => {
        const town = 'Helsinki'
        cy.get('.search-input').type(`${town}`)
        cy.get('.search-button').click()
        cy.get('.card')
            .first()
            .should('be.visible')
            .and('contain', 'Open weather')

        cy.get('.card.comparison')
            .first()
            .should('be.visible')
            .and('contain', 'Comparison for Helsinki, Finland')

        cy.get('.card')
            .last()
            .should('be.visible')
            .and('contain', 'WeatherApi')
    });

    it('shows error message', () => {
        const town = 'foobar'
        cy.get('.search-input').type(`${town}`)
        cy.get('.search-button').click()
        cy.get('.error')
            .should('be.visible')
            .and('contain', 'Unable to fetch weather data')
    });

});