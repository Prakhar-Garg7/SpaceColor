var inputElements = document.getElementsByClassName('cnamInp');
var firstInp = inputElements[0];
var secInp = inputElements[1];
var inputColorElements = document.getElementsByClassName('colInp');
var firstColorInp = inputColorElements[0];
var secColorInp = inputColorElements[1];
var gene_btn = document.getElementById('gene_btn');
var dirElements = document.getElementsByTagName('li');
var cont = document.getElementsByClassName('cont')[0] ;
var radial = document.getElementsByClassName('radial')[0] ;
var direc = 0 ;
var radialBool = false ;
const pattern = /^#[0-9A-Fa-f]{6}$/;
const patternLight = /^#[0-9]{6}$/;
const patternDark = /^#[0-9A-Fa-f]{6}$/;
var code = document.getElementsByClassName('code')[0] ;
var codeHeading = document.getElementsByClassName('CSSCodeHeadingHidden')[0] ;
var upscroll = document.getElementsByClassName('upscroll')[0] ;
var currDirec = 0 ;
var fav_btn = document.getElementById('fav-btn') ;
var col1;
var col2 ;
var usernameHead = document.getElementsByTagName('h2')[0] ;
let login_btn = document.getElementById('login_btn') ;
let register_btn = document.getElementById('register_btn') ;
let fav_page_btn = document.getElementById('fav-page-btn') ;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function isLight(hexCode) {
                                        // Convert hex to RGB
                                        const r = parseInt(hexCode.substring(1, 3), 16) / 255;
                                        const g = parseInt(hexCode.substring(3, 5), 16) / 255;
                                        const b = parseInt(hexCode.substring(5, 7), 16) / 255;
                                    
                                        // Calculate luminance
                                        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                                    
                                        // Compare to threshold (adjust threshold to fit your definition of light/dark)
                                        const threshold = 0.5;
                                        return luminance > threshold;
}

firstColorInp.addEventListener('input', () => {
                                        firstInp.value = firstColorInp.value;
});

secColorInp.addEventListener('input', () => {
                                        secInp.value = secColorInp.value;
});

function changeColor () {

                    col1 = firstInp.value ;
                    col2 = secInp.value ;

                    if ( ! ( pattern.test(col1) && pattern.test(col2) ) ) {

                                        alert("Enter correct hexadecimal code");
                                        return ;
                    }

                    codeHeading.classList.remove('CSSCodeHeadingHidden');
                    code.style.display = 'block' ;

                    window.scrollTo({
                                        top: document.body.scrollHeight,
                                        behavior: 'smooth'
                                        });

                    if (isLight(col1)) firstInp.style.color = "black" ;
                    if (isLight(col2)) secInp.style.color = "black" ;

                    firstColorInp.value = col1 ;
                    secColorInp.value = col2 ;

                    firstInp.style.backgroundColor = col1 ;
                    secInp.style.backgroundColor = col2 ;

                    gene_btn.classList.add('changeSizeClass') ;

                    setTimeout(function() {
                                        gene_btn.classList.remove('changeSizeClass');
                                        }, 1000);

                    if ( radialBool ) {
                                        cont.style.background = 'radial-gradient( circle,' + col1 + ', ' + col2 + ')';
                                        code.textContent = 'background: radial-gradient( circle,' + col1 + ', ' + col2 + ') ;';
                    }else {
                                        cont.style.background = 'linear-gradient(' + direc + 'deg, ' + col1 + ', ' + col2 + ')';
                                        code.textContent = 'background: linear-gradient(' + direc + 'deg, ' + col1 + ', ' + col2 + ') ;';
                    }
}

gene_btn.addEventListener('click', changeColor) ;

upscroll.addEventListener('click', (e) => {
                                        
                                        window.scrollTo({
                                                                                top: 0,
                                                                                behavior: 'smooth'
                                                                                });                  
}) ;

var dirArray = Array.from(dirElements);
dirArray[0].classList.add('loop') ;

radial.addEventListener('click', (event) => {
                          
                    radialBool = true ;
                    dirArray.forEach((ele, idx) => {
                                        if ( ele.classList.contains('loop') ) {

                                                            ele.classList.remove('loop') ;    
                                        }
                    });
                    radial.classList.add('loop') ;
}) ;

dirArray.forEach((ele, idx) => {
                    ele.addEventListener('click', (event) => {
                                        direc = idx * 45 ;
                                        dirArray[idx].classList.add('loop') ;
                                        if(radialBool) {
                                                            radialBool = false ;
                                                            radial.classList.remove('loop') ;
                                        }
                                        console.log(currDirec) ;
                                        dirElements[currDirec].classList.remove('loop') ;
                                        currDirec = idx ;
                    });
});

$(document).ready(function() {
                                        fav_btn.addEventListener('click', (event) => {
                                                                    let col1 = firstInp.value ;            
                                                                    let col2 = secInp.value ;            
                                                                    let currDirec = direc ;

                                                                    let urlParams = new URLSearchParams(queryString);
                                                                    if ( urlParams.get("registered") == "true" ) {
                                                                        usernameHead.textContent = urlParams.get("username") ;
                                                                        $.ajax({
                                                                            url: addCombinationUrl,
                                                                            data: {
                                                                                'col1': col1,
                                                                                'col2': col2,
                                                                                'currDirec': currDirec,
                                                                                'user_name': urlParams.get("username")
                                                                            },
                                                                            dataType: 'json',
                                                                            success: function(data) {
                                                                                console.log ( "Combination registered successfully" ) ;
                                                                            },
                                                                            error: function(jqXHR, textStatus, errorThrown) {
                                                                                console.log('An error occurred: ' + errorThrown);
                                                                                console.log('Response text: ' + jqXHR.responseText);
                                                                            }
                                                                        });
                                                                    }else {
                                                                                                            window.location.href = loginUrl ;
                                                                    }
                                        })
})

code.addEventListener('click', (event) => {
                                        // Create a range to select the text content of the code element
                                        const range = document.createRange();
                                        range.selectNodeContents(code);
                                    
                                        // Create a selection object and add the range to it
                                        const selection = window.getSelection();
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    
                                        // Copy the selected text to the clipboard
                                        document.execCommand('copy');
                                    
                                        // Clear the selection
                                        selection.removeAllRanges();
                                    
                                        // Alert the user
                                        alert("Copied the text: " + code.textContent);
});

register_btn.addEventListener('click', (event) => {
    window.location.href = registerUrl ;
})

login_btn.addEventListener('click', (event) => {
    window.location.href = loginUrl ;
})
if ( urlParams.get("registered") == "true" ) {
    usernameHead.textContent = urlParams.get("username") ;
}

fav_page_btn.addEventListener('click', (event) => {
    
    if ( urlParams.get("registered") == "true" ) {
        $.ajax({
            url: getFavCombUrl,
            data: {
                'username': urlParams.get("username")
            },
            dataType: 'json',
            success: function(response) {
                console.log ( response ) ;
                var combinations = response.combinations;
                window.location.href = favCombPageUrl + "?data=" + encodeURIComponent(JSON.stringify(combinations));
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('An error occurred: ' + errorThrown);
                console.log('Response text: ' + jqXHR.responseText);
            }
        });
    }else {
                                            window.location.href = loginUrl ;
    }
})
// [{"first_col":"#d9dfe8","sec_col":"#aa79e6","angle":0},{"first_col":"#123123","sec_col":"#ab1ab1","angle":180}]