$(document).ready(function() {
    $('#check-user-btn').click(function() {
        const username = document.getElementsByTagName('input')[0].value; // Replace with actual username
        const email = document.getElementsByTagName('input')[1].value; // Replace with actual email
        const password = document.getElementsByTagName('input')[2].value; // Replace with actual email

        $.ajax({
            url: checkUserUrl,
            data: {
                'username': username,
                'email': email,
                'password': password
            },
            dataType: 'json',
            success: function(data) {
                if (data.registered) {
                    window.location.href = gradientUrl + "?registered=true&username=" + data.username;
                } else {
                    window.location.href = registerUrl ;
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('An error occurred: ' + errorThrown);
            }
        });
    });
});
                                    