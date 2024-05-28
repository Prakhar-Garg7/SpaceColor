var inputElements = document.getElementsByClassName('cnamInp');
var firstInp = inputElements[0];
var secInp = inputElements[1];
var inputColorElements = document.getElementsByClassName('colInp');
var firstColorInp = inputColorElements[0];
var secColorInp = inputColorElements[1];
var btn = document.getElementsByTagName('button')[0];
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

                    btn.classList.add('changeSizeClass') ;

                    setTimeout(function() {
                                        btn.classList.remove('changeSizeClass');
                                        }, 1000);

                    if ( radialBool ) {
                                        cont.style.background = 'radial-gradient( circle,' + col1 + ', ' + col2 + ')';
                                        code.textContent = 'background: radial-gradient( circle,' + col1 + ', ' + col2 + ') ;';
                    }else {
                                        cont.style.background = 'linear-gradient(' + direc + 'deg, ' + col1 + ', ' + col2 + ')';
                                        code.textContent = 'background: linear-gradient(' + direc + 'deg, ' + col1 + ', ' + col2 + ') ;';
                    }
}

btn.addEventListener('click', changeColor) ;

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

fav_btn.addEventListener('click', (event) => {
                                        let urlParams = new URLSearchParams(queryString);
                                        if ( urlParams.get("registered") == "true" ) {

                                                                                let queryParams = new URLSearchParams({
                                                                                                                        col1: firstInp.value,
                                                                                                                        col2: firstInp.value,
                                                                                                                        currDirec: currDirec
                                                                                }).toString();
                                                                                window.location.href = `${addCombinationUrl}?${queryParams}` ;
                                        }else {
                                                                                window.location.href = loginUrl ;
                                        }
})