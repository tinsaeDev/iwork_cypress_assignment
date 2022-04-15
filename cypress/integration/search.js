
define(".result-itemsteners",function(){
    it("Form Submit does nothing", function (){
        cy.visit("/");
        let form = cy.get("#search-form");
       form.submit();

    } );
});


define("Search", function(){

    it('Ask user to start typing', function(){

        cy.get("#q").clear();
        cy.get("#search-result .type-to-search-message").should('have.length', 1)



    })

    it( "Shows empty result message for empty result", function(){

        // Search for a non existing products
   
        cy.get("#q").clear().type("sdfjsdfksdlfjsdlkfjklsdjfhsdufhsjlkj");
        cy.get("#search-result .empty-result-message").should('have.length', 1)

    } );

    it("Query for known existing products", function(){

        cy.get("#q").clear().type("Cha");
        cy.get("#search-result .result-item").its('length').should('be.gte', 1)

    });

    it( "Empty result for empty query", function(){
        cy.visit("/");
        cy.get("#q").clear();


        cy.get("#search-result").should(($el) => {
            expect($el.text().trim()).equal('');
        });



    } )

    it("Max 10 result per page", function(){
      
        //  products wich match with 'a' are more than 54, so it is nice to use 'a' 
          
        cy.get("#q").clear().type("a");

        cy.get("#search-result .result-item").its('length').should('be.lte', 10)

    })


});