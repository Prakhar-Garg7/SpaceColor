var inputElements = document.getElementsByTagName('input');
var firstInp = inputElements[0];
var secInp = inputElements[1];
var btn = document.getElementsByTagName('button')[0];
var dirElements = document.getElementsByTagName('li');
var cont = document.getElementsByClassName('cont')[0] ;

function changeColor () {

                    let col1 = firstInp.value ;
                    let col2 = secInp.value ;
                    console.log(col1, col2) ;
                    cont.style.background = 'linear-gradient(45deg, ' + col1 + ', ' + col2 + ')';
}

btn.addEventListener('click', changeColor) ;
