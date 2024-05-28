var username = document.getElementsByTagName("input")[0] ;
var email = document.getElementsByTagName("input")[1] ;
var psw = document.getElementsByTagName("input")[2] ;
var confirmPsw = document.getElementsByTagName("input")[3] ;
var submitbtn = document.getElementsByTagName("button")[0] ;

$(document).ready(function() {
                                        submitbtn.addEventListener('click', function(){

                                                                                let usernamev = username.value ;
                                                                                let emailv = email.value ;
                                                                                let pswv = psw.value ;
                                                                                console.log("Request to AJAX, with username " + usernamev + " and email " + emailv + " and password " + pswv);
                                                                                $.ajax({
                                                                                                                    url: addUserUrl,
                                                                                                                    data: {
                                                                                                                        'username': usernamev,
                                                                                                                        'email': emailv, 
                                                                                                                        'psw': pswv
                                                                                                                    },
                                                                                                                    dataType: 'json',
                                                                                                                    success: function(data) {
                                                                                                                        console.log ( "User registered successfully" ) ;
                                                                                                                    },
                                                                                                                    error: function(jqXHR, textStatus, errorThrown) {
                                                                                                                        console.log('An error occurred: ' + errorThrown);
                                                                                                                        console.log('Response text: ' + jqXHR.responseText);
                                                                                                                    }
                                                                                });
                                                                                window.location.href = loginUrl ;
                                        })
})