describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/auth/login')
    cy.clearAllLocalStorage()
  })

  it('should allow user to log in and redirects to account details page', () => {
    cy.intercept('POST', '**/sanctum-token', {
      statusCode: 200,
      body: { data: { token: 'mocked_token' } },
    }).as('loginRequest')

    cy.get('#email').type('menna@34ml.com')
    cy.get('#password').type('password123')
    cy.get('#sign-in-btn').click()

    cy.wait('@loginRequest')
    cy.contains('Account Details').should('be.visible')

    cy.url().should('include', '/account/accountdetails')
  })

  it('should display error message on invalid login', () => {
    cy.get('#email').type('menna@34ml.com')
    cy.get('#password').type('password123')
    cy.get('#sign-in-btn').click()

    cy.contains('Invalid email or password').should('be.visible')
  })

  it('should display error message when password is empty', () => {
    cy.get('#email').type('your-email@example.com')
    cy.get('#sign-in-btn').click()

    cy.contains('All inputs are required.').should('be.visible')
  })

  it('should display error message when email format is invalid', () => {
    cy.get('#email').type('invalidemail')
    cy.get('#password').type('password123')
    cy.get('#sign-in-btn').click()

    cy.contains('Please enter a valid email.').should('be.visible')
  })

  it('should redirect to login page on unauthorized access', () => {
    cy.clearLocalStorage()

    cy.visit('/account/accountdetails')

    cy.url().should('include', '/login')
  })
})
