
define("listeners",function(){
    it("Form Submit does nothing", function (){
        cy.visit("/");
        let form = cy.get("#search-form");
       form.submit();

    } );
});