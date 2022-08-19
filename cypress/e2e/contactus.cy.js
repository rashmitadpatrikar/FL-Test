describe('Form Submission', () => {
  

it('Valid Input Form Submission', () => {
    //valid data input
    
    cy.visit('https://www.founderandlightning.com/contact')
    cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95').type('Rashmi')
    cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95').type('Tadpatrikar')
    cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95').type('rashmi123@ymail.com')
    cy.wait(2000)
    cy.get('#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95').type('9999999998')
    cy.get('#message-b15d4232-7672-429d-81fd-a00020bddf95').type('Testing Contact Us')
    cy.get('.actions > .btn').click()
    cy.wait(500);
    
    /*cy.get('iframe')
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.recaptcha-checkbox-border')
          .should('be.visible')
          .click();
      });*/

  })

 it('Blank Form Submission', () => {
    //when blank form is submitted
    cy.visit('https://www.founderandlightning.com/contact')

    cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95').type(' ')
    cy.get('.hs_firstname > .no-list > li > .hs-error-msg').then($e1 =>{
     const r1 =$e1.text();
     cy.wrap(r1).should('include','Please complete this required field.')
    })

    cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95').type(' ')
    cy.get('.hs_lastname > .no-list > li > .hs-error-msg').then($e2 =>{
      const r2 =$e2.text();
      cy.wrap(r2).should('include','Please complete this required field.')
    })

    cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95').type(' ')
    cy.wait(5000)
    cy.get('.hs_email > .no-list > li > .hs-error-msg').then($e3 =>{
      const r3 =$e3.text();
      cy.wrap(r3).should('include','Please complete this required field.')
    })

    cy.get('#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95').type(' ')
    cy.get('#how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95').focus()
    cy.get('.hs_mobilephone > .no-list > li > .hs-error-msg').then($e4 =>{
      const r4 =$e4.text();
      cy.wrap(r4).should('include','Must contain only numbers, +()-. and x.')
    })
    
    cy.get('#message-b15d4232-7672-429d-81fd-a00020bddf95').type(' ')
    cy.get('.hs_message > .no-list > li > .hs-error-msg').then($e5 =>{
      const r5 =$e5.text();
      cy.wrap(r5).should('include','Please complete this required field.')
    })
    //cy.get('.actions > .btn').click()

  })

  it('Email Validation', () => {
    //Email format validation
    cy.visit('https://www.founderandlightning.com/contact')

    cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95').type('rashmi123@yopmail.com')
    cy.wait(5000)
    cy.get('.hs-error-msg').then($p1 =>{
      const t1 = $p1.text();
      cy.wrap(t1).should('include','Please enter a valid email address.')
    })
    cy.get('label > a').then($p2 =>{
      const t2 = $p2.text();
      cy.log(t2)
      cy.wrap(t2).should('equal','Did you mean rashmi123@ymail.com?')
   })
  })

  it('Invalid Email Validation', () => {
    //Email format validation
    cy.visit('https://www.founderandlightning.com/contact')

    cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95').type('rashmi12@com-net@.com')
    cy.wait(5000)
    cy.get('.hs-error-msg').then($p3 =>{
     const t3 = $p3.text();
     cy.wrap(t3).should ('include','Email must be formatted correctly.')
   })
  })


  
    //cy.get('.actions > .btn').click()   Email must be formatted correctly.*/

  })


