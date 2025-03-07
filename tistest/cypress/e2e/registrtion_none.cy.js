describe('registration_none', () => {
    it('registration', () =>{
        cy.fixture('cypressTest').then(data =>{
            cy.log('Переход на регистрацию')
            cy.visit('https://dev.profteam.su/registration')

            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_login)
            cy.get('.form-input--email').type(data.email_none)
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.none_existent_password)
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.none_existent_password)
            cy.wait(2000)
            cy.get('.form__buttons > :nth-child(4)').click()

            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.firstName_none)
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.lastName_none)
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.thirdName_none)
            cy.wait(2000)
            cy.get('.form__buttons > :nth-child(3)').click()
        })
    })
})