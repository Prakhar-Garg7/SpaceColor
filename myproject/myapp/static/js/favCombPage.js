var cont = document.getElementsByClassName('cont')[0];

const queryString = window.location.search;
// console.log("query string: ", queryString) ;
const urlParams = new URLSearchParams(queryString);
// console.log("urlParams(data): ", urlParams.get('data')) ;
// console.log("urlParams(username): ", urlParams.get('username')) ;

const dataParam = urlParams.get("data");
const decodedDataParam = decodeURIComponent(dataParam);
const dataArray = JSON.parse(decodedDataParam);

var firstUnpinIndex = 0 ;

for (let i = 0; i < dataArray.length; i++) {
    let divi = document.createElement('div');
    divi.style.background = 'linear-gradient(' + dataArray[i].first_col + ', ' + dataArray[i].sec_col + ')' ;
                                        
    // Create the span elements
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');
    let span4 = document.createElement('span');
                                        
    // Set the inner HTML for each span
    span1.innerHTML = 'Color1 : ' + dataArray[i].first_col;
    span2.innerHTML = 'Color2 : ' + dataArray[i].sec_col;
    span3.innerHTML = 'Pin' ;
    span4.innerHTML = 'Delete' ;
                                        
    // Add class to the spans
    span1.classList.add('itemcont');
    span2.classList.add('itemcont');
    span3.classList.add('itemcont');
    span4.classList.add('itemcont');

//     if ( dataArray[i].priority == 1 ) {

                                        
//     }
                                        
    // Append spans to the div
    divi.appendChild(span1);
    divi.appendChild(span2);
    divi.appendChild(span3);
    divi.appendChild(span4);
                                        
    // Add class to the div
    divi.classList.add('item');
                                        
    // Append the div to the container
    cont.appendChild(divi);

    span4.addEventListener ( 'click', deleteItem = (e) => {
        $.ajax({
            url: deleteItemUrl,
            data: {
                'username': urlParams.get('username'),
                'index': i,
            },
            dataType: 'json',
            success: function(message) {
                console.log ( message ) ;
                divi.remove() ;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('An error occurred: ' + errorThrown);
                console.log('Response text: ' + jqXHR.responseText);
            }
         });   
    } ) ;
}                               