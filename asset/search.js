



window.addEventListener("load",function(){

    // add event listeners to the HTML elements

    // disable submit event on form

    let searchForm = document.querySelector("#search-form");
        searchForm.addEventListener("submit", submitForm );

            // add input even listener to the search query input

        let searchQueryInput = document.querySelector("[name=q]");
          searchQueryInput.addEventListener("input",searchInputListener  );   

    
});

    function submitForm(event){
        console.log( event );
        event.preventDefault();

    }

    function searchInputListener(event){
        let queryString = event.target.value;
           
        let result = searchResult( queryString );

        showResult( result );

    }




    function searchResult( query ){
        
        let result = products_list.filter( function( element ){
            if( element.includes(query) ){
                return true;
            }
        } );

        console.log( "Result ::", result );

        return result;
    }



    // Removes old results and replaces with new results
    function showResult(result){
        clearResult();
        printResult( result );
    }



    // Removes all search result items from results DOM
    function clearResult(){

        let resultsDOM = document.querySelector( "#search-result" );

                while( resultsDOM.lastChild ){
                    resultsDOM.lastChild.remove();
                }  
        
    }

    // Append the new search results to results DOM
    function printResult( results ){
        let resultsDOM = document.querySelector( "#search-result" );
        

        results.forEach( result=>{
            let resultDOM = document.createElement("li");
                resultDOM.innerText = result;

                resultsDOM.appendChild( resultDOM );
        } );

    }  