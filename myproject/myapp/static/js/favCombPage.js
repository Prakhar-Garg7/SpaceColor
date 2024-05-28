var cont = document.getElementsByClassName('cont')[0];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const dataParam = urlParams.get("data");
const decodedDataParam = decodeURIComponent(dataParam);
const dataArray = JSON.parse(decodedDataParam);

for (let i = 0; i < dataArray.length; i++) {
                                        let divi = document.createElement('div');
                                        divi.style.background = 'linear-gradient(' + dataArray[i].angle + 'deg' + ', ' + dataArray[i].first_col + ', ' + dataArray[i].sec_col + ')' ;
                                        
                                        // Create the span elements
                                        let span1 = document.createElement('span');
                                        let span2 = document.createElement('span');
                                        let span3 = document.createElement('span');
                                        
                                        // Set the inner HTML for each span
                                        span1.innerHTML = 'Color1 : ' + dataArray[i].first_col;
                                        span2.innerHTML = 'Color2 : ' + dataArray[i].sec_col;
                                        span3.innerHTML = 'Angle : ' + dataArray[i].angle;
                                        
                                        // Add class to the spans
                                        span1.classList.add('itemcont');
                                        span2.classList.add('itemcont');
                                        span3.classList.add('itemcont');
                                        
                                        // Append spans to the div
                                        divi.appendChild(span1);
                                        divi.appendChild(span2);
                                        divi.appendChild(span3);
                                        
                                        // Add class to the div
                                        divi.classList.add('item');
                                        
                                        // Append the div to the container
                                        cont.appendChild(divi);
}
                                    
