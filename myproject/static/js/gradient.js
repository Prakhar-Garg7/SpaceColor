var inputElements = document.getElementsByTagName('input');
var firstInp = inputElements[0];
var secInp = inputElements[1];
var btn = document.getElementsByTagName('button')[0];
var dirElements = document.getElementsByTagName('li');
var cont = document.getElementsByClassName('cont')[0] ;
var radial = document.getElementsByClassName('radial')[0] ;
var direc = 0 ;
var radialBool = false ;
const pattern = /^#[0-9A-Fa-f]{6}$/;
var code = document.getElementsByClassName('code')[0] ;
var currDirec = 0 ;

function changeColor () {

                    let col1 = firstInp.value ;
                    let col2 = secInp.value ;

                    if ( ! ( pattern.test(col1) && pattern.test(col2) ) ) {

                                        alert("Enter correct hexadecimal code");
                                        return ;
                    }
                    firstInp.style.backgroundColor = col1 ;
                    secInp.style.backgroundColor = col2 ;

                    if ( radialBool ) {
                                        cont.style.background = 'radial-gradient( circle,' + col1 + ', ' + col2 + ')';
                                        code.textContent = 'background: radial-gradient( circle,' + col1 + ', ' + col2 + ')';
                    }else {
                                        cont.style.background = 'linear-gradient(' + direc + 'deg, ' + col1 + ', ' + col2 + ')';
                                        code.textContent = 'background: linear-gradient(' + direc + 'deg, ' + col1 + ', ' + col2 + ')';
                    }
}

btn.addEventListener('click', changeColor) ;

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