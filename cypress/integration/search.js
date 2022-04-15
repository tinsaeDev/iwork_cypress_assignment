
define("listeners",function(){
    it("Form Submit does nothing", function (){
        cy.visit("/");
        let form = cy.get("#search-form");
       form.submit();

    } );
});


define("Search", function(){
    it( "Empty result for empty query", function(){
        cy.visit("/");
        cy.get("#q").clear();


        cy.get("#search-result").should(($el) => {
            expect($el.text().trim()).equal('');
        });



    } )
});

define('Displaying Result', function(){
    it('Clears results before showing new results', function(){

        let searchQuery = cy.get("#q");
        searchQuery.type(" ");

       cy.get("#search-result").should(($el) => {
            expect($el.text().trim()).equal('');
        });

    })

    it( 'Empty result for not found ', function(){

    } );
});