describe('Note app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const user = {
          name: 'Admin',
          username: 'admin',
          password: 'admin'
        }
        cy.request('POST', 'http://localhost:3001/api/users/', user) 
        cy.visit('http://localhost:3000')
      })
    
    it('front page can be opened', function() {
      cy.contains('Notes')
      cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
    })

    it.only('login fails with wrong password', function() {
        cy.contains('log in').click()
        cy.get('#username').type('wrong')
        cy.get('#password').type('wrong')
        cy.get('#login-button').click()
    
        cy.get('.error').contains('Wrong credentials')
      })

    it('login form can be opened', function() {
        cy.contains('log in').click()
      })

      it('user can login', function () {
        cy.contains('log in').click()
        cy.get('#username').type('admin')
        cy.get('#password').type('admin')
        cy.get('#login-button').click()
      })



      describe('when logged in', function() {
  

        it('a new note can be created', function() {
        cy.get('#note-button').click()
          cy.get('#note-input').type('a note created by cypress')
          cy.contains('save').click()
          cy.contains('a note created by cypress')
        })


        describe('and a note exists', function () {
            beforeEach(function () {
                cy.get('#note-button').click()
                cy.get('#note-input').type('another note cypress')
              cy.contains('save').click()
            })
      
            it('it can be made important', function () {
              cy.contains('another note cypress')
                .contains('make important')
                .click()
      
              cy.contains('another note cypress')
                .contains('make not important')
            })

      })
  })
})