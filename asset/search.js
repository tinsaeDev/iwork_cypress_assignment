



window.addEventListener("load",function(){

    // add event listeners to the HTML elements

    // disable submit event on form

    let searchForm = document.querySelector("#search-form");
        searchForm.addEventListener("submit", submitForm );

            // add input even listener to the search query input

        let searchQueryInput = document.querySelector("[name=q]");
          searchQueryInput.addEventListener("input",searchInputListener  );   


          askToEnterQuery();

    
});

    function submitForm(event){
        event.preventDefault();

    }

    function searchInputListener(event){
        let queryString = event.target.value;
        
        // Prevent searching for empty string
        if( queryString.trim().length < 1 ){
            askToEnterQuery();
            return;
        }

        let result = searchResult( queryString );
        showResult( result );
    

    }




    function searchResult( query ){                   
        let result = products_list.filter( function( element ){
            if( element.includes(query) ){
                return true;
            }
        } );

        return result.splice(0,9)
    }

    // prints a message asking a user  to type their query
    function askToEnterQuery(){

        clearResult();

        let resultsDOM = document.querySelector( "#search-result" );


        let emptyResultMessage = document.createElement("strong");
        emptyResultMessage.classList.add("type-to-search-message");
        emptyResultMessage.innerText = "Please enter your search query";
        resultsDOM.append( emptyResultMessage );

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

        if( results.length < 1 ){

            let emptyResultMessage = document.createElement("strong");
                emptyResultMessage.classList.add("empty-result-message");
                emptyResultMessage.innerText = "No Product matches your search query";
                resultsDOM.append( emptyResultMessage );

            return;
        }

        results.forEach( result=>{
            let resultDOM = document.createElement("li");
                resultDOM.classList.add("result-item");
                resultDOM.innerText = result;

                resultsDOM.appendChild( resultDOM );
        } );

    }  